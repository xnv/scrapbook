window.gLocalAssetContainer["HoverableRect"] = function(g) { (function(exports, require, module, __filename, __dirname) {
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
var HoverableRect = /** @class */ (function (_super) {
    __extends(HoverableRect, _super);
    function HoverableRect(param) {
        var _this = _super.call(this, __assign(__assign({}, param), { touchable: true })) || this;
        _this.hoverable = true;
        _this.hovered = new g.Trigger();
        _this.unhovered = new g.Trigger();
        _this._cssColor = _this.cssColor;
        _this.hovered.add(_this.onHovered, _this);
        _this.unhovered.add(_this.onUnhovered, _this);
        return _this;
    }
    HoverableRect.prototype.onHovered = function () {
        this.cssColor = "#f00";
        this.modified();
    };
    HoverableRect.prototype.onUnhovered = function () {
        this.cssColor = this._cssColor;
        this.modified();
    };
    return HoverableRect;
}(g.FilledRect));
exports.HoverableRect = HoverableRect;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
}