"use strict";
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