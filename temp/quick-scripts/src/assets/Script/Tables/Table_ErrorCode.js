"use strict";
cc._RF.push(module, 'fc60atEvUVDe7XqwH5+CoRp', 'Table_ErrorCode');
// Script/Tables/Table_ErrorCode.ts

/**
 *
 * @author : ludingguo
 *
 * @time : 2021-07-15
 *
 * @function :  Table_ErrorCode class define
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
var Table_ErrorCode = /** @class */ (function (_super) {
    __extends(Table_ErrorCode, _super);
    function Table_ErrorCode() {
        var _this = _super.call(this) || this;
        // define member values here
        _this.m_ID = 0; //错误ID
        _this.m_ErrorInfo = ""; //错误信息
        _this.m_TipsId = 0; //提示信息
        return _this;
    }
    Table_ErrorCode.prototype.initTable = function (jsonData) {
        // init member values here
        this.m_ID = jsonData.ID;
        this.m_ErrorInfo = jsonData.ErrorInfo;
        this.m_TipsId = jsonData.TipsId;
    };
    return Table_ErrorCode;
}(TableStruct));

cc._RF.pop();