
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVGFibGVzL1RhYmxlX0Vycm9yQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7R0FRRzs7Ozs7Ozs7Ozs7Ozs7QUFFRjtJQUE4QixtQ0FBVztJQU96QztRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQVBELDRCQUE0QjtRQUNyQixVQUFJLEdBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUN2QixpQkFBVyxHQUFVLEVBQUUsQ0FBQyxDQUFDLE1BQU07UUFDL0IsY0FBUSxHQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU07O0lBSWxDLENBQUM7SUFHTSxtQ0FBUyxHQUFoQixVQUFpQixRQUFZO1FBQzVCLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUVqQyxDQUFDO0lBRUQsc0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxDQXBCNkIsV0FBVyxHQW9CeEMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBAYXV0aG9yIDogbHVkaW5nZ3VvXG4gKiBcbiAqIEB0aW1lIDogMjAyMS0wNy0xNVxuICogXG4gKiBAZnVuY3Rpb24gOiAgVGFibGVfRXJyb3JDb2RlIGNsYXNzIGRlZmluZVxuICpcbiAqL1xuIFxuIGNsYXNzIFRhYmxlX0Vycm9yQ29kZSBleHRlbmRzIFRhYmxlU3RydWN0e1xuIFxuXHQvLyBkZWZpbmUgbWVtYmVyIHZhbHVlcyBoZXJlXG5cdHB1YmxpYyBtX0lEOm51bWJlciA9IDA7XHQvL+mUmeivr0lEXG5cdHB1YmxpYyBtX0Vycm9ySW5mbzpzdHJpbmcgPSBcIlwiO1x0Ly/plJnor6/kv6Hmga9cblx0cHVibGljIG1fVGlwc0lkOm51bWJlciA9IDA7XHQvL+aPkOekuuS/oeaBr1xuXHRcblx0cHVibGljIGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoKTtcblx0fVxuXHRcblx0XG5cdHB1YmxpYyBpbml0VGFibGUoanNvbkRhdGE6YW55KTp2b2lke1xuXHRcdC8vIGluaXQgbWVtYmVyIHZhbHVlcyBoZXJlXG5cdFx0dGhpcy5tX0lEID0ganNvbkRhdGEuSUQ7XG5cdFx0dGhpcy5tX0Vycm9ySW5mbyA9IGpzb25EYXRhLkVycm9ySW5mbztcblx0XHR0aGlzLm1fVGlwc0lkID0ganNvbkRhdGEuVGlwc0lkO1xuXHRcdFxuXHR9XG5cdFxuIH0iXX0=