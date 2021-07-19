
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tables/Table_ErrorCode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUYWJsZXNcXFRhYmxlX0Vycm9yQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7R0FRRzs7Ozs7Ozs7Ozs7Ozs7QUFFRjtJQUE4QixtQ0FBVztJQU96QztRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQVBELDRCQUE0QjtRQUNyQixVQUFJLEdBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUN2QixpQkFBVyxHQUFVLEVBQUUsQ0FBQyxDQUFDLE1BQU07UUFDL0IsY0FBUSxHQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU07O0lBSWxDLENBQUM7SUFHTSxtQ0FBUyxHQUFoQixVQUFpQixRQUFZO1FBQzVCLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUVqQyxDQUFDO0lBRUQsc0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxDQXBCNkIsV0FBVyxHQW9CeEMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICpcclxuICogQGF1dGhvciA6IGx1ZGluZ2d1b1xyXG4gKiBcclxuICogQHRpbWUgOiAyMDIxLTA3LTE1XHJcbiAqIFxyXG4gKiBAZnVuY3Rpb24gOiAgVGFibGVfRXJyb3JDb2RlIGNsYXNzIGRlZmluZVxyXG4gKlxyXG4gKi9cclxuIFxyXG4gY2xhc3MgVGFibGVfRXJyb3JDb2RlIGV4dGVuZHMgVGFibGVTdHJ1Y3R7XHJcbiBcclxuXHQvLyBkZWZpbmUgbWVtYmVyIHZhbHVlcyBoZXJlXHJcblx0cHVibGljIG1fSUQ6bnVtYmVyID0gMDtcdC8v6ZSZ6K+vSURcclxuXHRwdWJsaWMgbV9FcnJvckluZm86c3RyaW5nID0gXCJcIjtcdC8v6ZSZ6K+v5L+h5oGvXHJcblx0cHVibGljIG1fVGlwc0lkOm51bWJlciA9IDA7XHQvL+aPkOekuuS/oeaBr1xyXG5cdFxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0cHVibGljIGluaXRUYWJsZShqc29uRGF0YTphbnkpOnZvaWR7XHJcblx0XHQvLyBpbml0IG1lbWJlciB2YWx1ZXMgaGVyZVxyXG5cdFx0dGhpcy5tX0lEID0ganNvbkRhdGEuSUQ7XHJcblx0XHR0aGlzLm1fRXJyb3JJbmZvID0ganNvbkRhdGEuRXJyb3JJbmZvO1xyXG5cdFx0dGhpcy5tX1RpcHNJZCA9IGpzb25EYXRhLlRpcHNJZDtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuIH0iXX0=