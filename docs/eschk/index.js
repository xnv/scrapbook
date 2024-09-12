// NOTE: should be written in ES5 because this script is used to check
// wether or not the running environment supports ES6 (ES2015) and later...

var out = document.getElementById("out");

function stricteq(a, b) {
  return a === b;
}

function dedent(s) {
  var m = s.match(/^[\n\r]*(\s*)/);
  var indent = m ? m[1].length : 0;
  if (indent === 0) return s;
  var re = new RegExp("[\\n\\r]+\\s{" + indent + "}", "g");
  return s.replace(re, "\n").replace(/ /g, "&nbsp;");
}

function elem(name, props) {
  var el = document.createElement(name);
  Object.keys(props).forEach(function (k) {
    var v = props[k];
    switch (k) {
      case "children": {
        v.forEach(function (ch) { return el.appendChild(ch); });
        break;
      }
      default: {
        el[k] = v;
        break;
      }
    }
  });
  return el;
}

function addTestcaseResult(name, succ, message) {
  var res = elem("div", { className: "res", innerText: message });
  if (!succ)
    res.style.background = "#fee";

  var resContainer = elem("div", {
    className: "res-container",
    children: [
      elem("div", { className: "name", innerHTML: name }),
      res,
    ]
  });

  out.appendChild(resContainer);
  return res;
}

function testcase(src, expected, comp) {
  comp = comp || stricteq;
  var source = dedent(src);
  try {
    var ret = (0, eval)(src);

    if (ret && typeof ret.then === "function") {
      // Ugh! workaround Promise support. Needs to be reconsidered.
      var el = addTestcaseResult(source, true, "");
      ret.then(
        v => {
          if (comp(expected, v)) {
            el.innerText = v;
          } else {
            el.style.background = "#fee";
            el.innerText = "Failed. Expected: " + expected + " / Received: " + ret;
          }
        },
        e => {
          el.style.background = "#fee";
          el.innerText = e.message;
        }
      );
      return;
    }

    if (comp(expected, ret)) {
      addTestcaseResult(source, true, ret);
    } else {
      addTestcaseResult(source, false, "Failed. Expected: " + expected + " / Received: " + ret);
    }
  } catch (e) {
    addTestcaseResult(source, false, e.message);
  }
}

function testcases(entries) {
  entries.forEach(function (ent) {
    if (typeof ent === "string") {
      var level = (ent[0] === "#") ? 2 : 3;
      var name = (ent[0] === "#") ? ent.slice(1) : ent;
      out.appendChild(elem("h" + level, { innerText: name }));
    } else if (Array.isArray(ent)) {
      testcase.apply(null, ent);
    }
  });
}

