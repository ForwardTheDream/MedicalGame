
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVGFibGVzL1RhYmxlX1NjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztHQVFHOzs7Ozs7Ozs7Ozs7OztBQUVGO0lBQTBCLCtCQUFXO0lBTXJDO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBTkQsNEJBQTRCO1FBQ3JCLFVBQUksR0FBVSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3ZCLGFBQU8sR0FBVSxFQUFFLENBQUMsQ0FBQyxZQUFZOztJQUl4QyxDQUFDO0lBR00sK0JBQVMsR0FBaEIsVUFBaUIsUUFBWTtRQUM1QiwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUUvQixDQUFDO0lBRUQsa0JBQUM7QUFBRCxDQWxCQSxBQWtCQyxDQWxCeUIsV0FBVyxHQWtCcEMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBAYXV0aG9yIDogbHVkaW5nZ3VvXG4gKiBcbiAqIEB0aW1lIDogMjAyMS0wNy0xNVxuICogXG4gKiBAZnVuY3Rpb24gOiAgVGFibGVfU2NlbmUgY2xhc3MgZGVmaW5lXG4gKlxuICovXG4gXG4gY2xhc3MgVGFibGVfU2NlbmUgZXh0ZW5kcyBUYWJsZVN0cnVjdHtcbiBcblx0Ly8gZGVmaW5lIG1lbWJlciB2YWx1ZXMgaGVyZVxuXHRwdWJsaWMgbV9JRDpudW1iZXIgPSAwO1x0Ly/lnLrmma/nvJblj7dcblx0cHVibGljIG1fU3Rvcnk6c3RyaW5nID0gXCJcIjtcdC8v5a+55bqU5Ymn5oOF5pWF5LqL6KGo5qC8SURcblx0XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdH1cblx0XG5cdFxuXHRwdWJsaWMgaW5pdFRhYmxlKGpzb25EYXRhOmFueSk6dm9pZHtcblx0XHQvLyBpbml0IG1lbWJlciB2YWx1ZXMgaGVyZVxuXHRcdHRoaXMubV9JRCA9IGpzb25EYXRhLklEO1xuXHRcdHRoaXMubV9TdG9yeSA9IGpzb25EYXRhLlN0b3J5O1xuXHRcdFxuXHR9XG5cdFxuIH0iXX0=