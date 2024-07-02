window.gLocalAssetContainer["main"] = function(g) { (function(exports, require, module, __filename, __dirname) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hover = require("@akashic-extension/akashic-hover-plugin");
var HoverableLabel_1 = require("./HoverableLabel");
var HoverableRect_1 = require("./HoverableRect");
g.game.operationPluginManager.register(hover.HoverPlugin, 5);
g.game.operationPluginManager.start(5);
function main(param) {
    var scene = new g.Scene({ game: g.game, assetIds: ["aco"] });
    scene.onLoad.add(function () {
        var font = new g.DynamicFont({
            game: g.game,
            size: 40,
            fontFamily: "sans-serif"
        });
        var _loop_1 = function (i) {
            (function () {
                var aco = new g.FrameSprite({
                    scene: scene,
                    src: scene.asset.getImageById("aco"),
                    x: 5,
                    y: i * 50,
                    width: 32,
                    height: 48,
                    frames: [5, 6, 7, 6]
                });
                var hoverableAco = hover.Converter.asHoverable(aco);
                hoverableAco.onPointDown.add(function () { hoverableAco.scale(1.5); hoverableAco.modified(); });
                hoverableAco.onPointUp.add(function () { hoverableAco.scale(1); hoverableAco.modified(); });
                hoverableAco.hovered.add(function () {
                    aco.start();
                });
                hoverableAco.unhovered.add(function () {
                    aco.stop();
                });
                hoverableAco.title = "aco" + (i + 1) + ": \u3053\u3093\u306B\u3061\u308F\uFF01";
                var rect = new HoverableRect_1.HoverableRect({
                    scene: scene,
                    x: 40,
                    y: i * 50 + 20,
                    width: 20,
                    height: 20,
                    cssColor: "#000"
                });
                rect.onPointDown.add(function () { rect.scale(1.5); rect.modified(); });
                rect.onPointUp.add(function () { rect.scale(1); rect.modified(); });
                var label = new HoverableLabel_1.HoverableLabel({
                    scene: scene,
                    x: 65,
                    y: i * 50 + 18,
                    text: "test" + (i + 1),
                    fontSize: 20,
                    font: font
                });
                label.onPointDown.add(function () { label.scale(1.5); label.modified(); });
                label.onPointUp.add(function () { label.scale(1); label.modified(); });
                scene.append(aco);
                scene.append(rect);
                scene.append(label);
            })();
        };
        for (var i = 0; i < 5; i++) {
            _loop_1(i);
        }
    });
    g.game.pushScene(scene);
}
exports.main = main;
module.exports = main;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
}