
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tables/Table_Scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f289bq/1kRHAKIHRcuTzKU6', 'Table_Scene');
// Script/Tables/Table_Scene.ts

/**
 *
 * @author : ludingguo
 *
 * @time : 2021-07-15
 *
 * @function :  Table_Scene class define
 *
 */
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
var Table_Scene = /** @class */ (function (_super) {
    __extends(Table_Scene, _super);
    function Table_Scene() {
        var _this = _super.call(this) || this;
        // define member values here
        _this.m_ID = 0; //场景编号
        _this.m_Story = ""; //对应剧情故事表格ID
        return _this;
    }
    Table_Scene.prototype.initTable = function (jsonData) {
        // init member values here
        this.m_ID = jsonData.ID;
        this.m_Story = jsonData.Story;
    };
    return Table_Scene;
}(TableStruct));

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUYWJsZXNcXFRhYmxlX1NjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztHQVFHOzs7Ozs7Ozs7Ozs7OztBQUVGO0lBQTBCLCtCQUFXO0lBTXJDO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBTkQsNEJBQTRCO1FBQ3JCLFVBQUksR0FBVSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3ZCLGFBQU8sR0FBVSxFQUFFLENBQUMsQ0FBQyxZQUFZOztJQUl4QyxDQUFDO0lBR00sK0JBQVMsR0FBaEIsVUFBaUIsUUFBWTtRQUM1QiwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUUvQixDQUFDO0lBRUQsa0JBQUM7QUFBRCxDQWxCQSxBQWtCQyxDQWxCeUIsV0FBVyxHQWtCcEMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICpcclxuICogQGF1dGhvciA6IGx1ZGluZ2d1b1xyXG4gKiBcclxuICogQHRpbWUgOiAyMDIxLTA3LTE1XHJcbiAqIFxyXG4gKiBAZnVuY3Rpb24gOiAgVGFibGVfU2NlbmUgY2xhc3MgZGVmaW5lXHJcbiAqXHJcbiAqL1xyXG4gXHJcbiBjbGFzcyBUYWJsZV9TY2VuZSBleHRlbmRzIFRhYmxlU3RydWN0e1xyXG4gXHJcblx0Ly8gZGVmaW5lIG1lbWJlciB2YWx1ZXMgaGVyZVxyXG5cdHB1YmxpYyBtX0lEOm51bWJlciA9IDA7XHQvL+WcuuaZr+e8luWPt1xyXG5cdHB1YmxpYyBtX1N0b3J5OnN0cmluZyA9IFwiXCI7XHQvL+WvueW6lOWJp+aDheaVheS6i+ihqOagvElEXHJcblx0XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHRwdWJsaWMgaW5pdFRhYmxlKGpzb25EYXRhOmFueSk6dm9pZHtcclxuXHRcdC8vIGluaXQgbWVtYmVyIHZhbHVlcyBoZXJlXHJcblx0XHR0aGlzLm1fSUQgPSBqc29uRGF0YS5JRDtcclxuXHRcdHRoaXMubV9TdG9yeSA9IGpzb25EYXRhLlN0b3J5O1xyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG4gfSJdfQ==