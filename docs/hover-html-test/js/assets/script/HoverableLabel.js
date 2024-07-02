window.gLocalAssetContainer["HoverableLabel"] = function(g) { (function(exports, require, module, __filename, __dirname) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var HoverableLabel = /** @class */ (function (_super) {
    __extends(HoverableLabel, _super);
    function HoverableLabel(param) {
        var _this = _super.call(this, __assign(__assign({}, param), { touchable: true })) || this;
        _this.hoverable = true;
        _this.hovered = new g.Trigger();
        _this.unhovered = new g.Trigger();
        _this._text = _this.text;
        _this.hovered.add(_this.onHovered, _this);
        _this.unhovered.add(_this.onUnhovered, _this);
        return _this;
    }
    HoverableLabel.prototype.onHovered = function () {
        this.text = "hover!";
        this.textColor = "#f00";
        this.invalidate();
    };
    HoverableLabel.prototype.onUnhovered = function () {
        this.text = this._text;
        this.textColor = "#000";
        this.invalidate();
    };
    return HoverableLabel;
}(g.Label));
exports.HoverableLabel = HoverableLabel;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
}