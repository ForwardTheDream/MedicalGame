
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tables/Table_Story.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c503fD4zRZFG5cdM1nJ6K5q', 'Table_Story');
// Script/Tables/Table_Story.ts

/**
 *
 * @author : ludingguo
 *
 * @time : 2021-07-15
 *
 * @function :  Table_Story class define
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
var Table_Story = /** @class */ (function (_super) {
    __extends(Table_Story, _super);
    function Table_Story() {
        var _this = _super.call(this) || this;
        // define member values here
        _this.m_ID = 0; //剧情ID
        _this.m_Type = 0; //引导语类型（1：NPC说话，2：引导用户说话）
        _this.m_TalkerID = 0; //当前说话者的编号，0：表示用户说话
        _this.m_Word = ""; //如果是NPC，则展示该语句，如果是用户，则对比是否说了这句话
        return _this;
    }
    Table_Story.prototype.initTable = function (jsonData) {
        // init member values here
        this.m_ID = jsonData.ID;
        this.m_Type = jsonData.Type;
        this.m_TalkerID = jsonData.TalkerID;
        this.m_Word = jsonData.Word;
    };
    return Table_Story;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUYWJsZXNcXFRhYmxlX1N0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztHQVFHOzs7Ozs7Ozs7Ozs7OztBQUVGO0lBQTBCLCtCQUFXO0lBUXJDO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBUkQsNEJBQTRCO1FBQ3JCLFVBQUksR0FBVSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3ZCLFlBQU0sR0FBVSxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7UUFDNUMsZ0JBQVUsR0FBVSxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7UUFDMUMsWUFBTSxHQUFVLEVBQUUsQ0FBQyxDQUFDLGdDQUFnQzs7SUFJM0QsQ0FBQztJQUdNLCtCQUFTLEdBQWhCLFVBQWlCLFFBQVk7UUFDNUIsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztJQUU3QixDQUFDO0lBRUQsa0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxDQXRCeUIsV0FBVyxHQXNCcEMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICpcclxuICogQGF1dGhvciA6IGx1ZGluZ2d1b1xyXG4gKiBcclxuICogQHRpbWUgOiAyMDIxLTA3LTE1XHJcbiAqIFxyXG4gKiBAZnVuY3Rpb24gOiAgVGFibGVfU3RvcnkgY2xhc3MgZGVmaW5lXHJcbiAqXHJcbiAqL1xyXG4gXHJcbiBjbGFzcyBUYWJsZV9TdG9yeSBleHRlbmRzIFRhYmxlU3RydWN0e1xyXG4gXHJcblx0Ly8gZGVmaW5lIG1lbWJlciB2YWx1ZXMgaGVyZVxyXG5cdHB1YmxpYyBtX0lEOm51bWJlciA9IDA7XHQvL+WJp+aDhUlEXHJcblx0cHVibGljIG1fVHlwZTpudW1iZXIgPSAwO1x0Ly/lvJXlr7zor63nsbvlnovvvIgx77yaTlBD6K+06K+d77yMMu+8muW8leWvvOeUqOaIt+ivtOivne+8iVxyXG5cdHB1YmxpYyBtX1RhbGtlcklEOm51bWJlciA9IDA7XHQvL+W9k+WJjeivtOivneiAheeahOe8luWPt++8jDDvvJrooajnpLrnlKjmiLfor7Tor51cclxuXHRwdWJsaWMgbV9Xb3JkOnN0cmluZyA9IFwiXCI7XHQvL+WmguaenOaYr05QQ++8jOWImeWxleekuuivpeivreWPpe+8jOWmguaenOaYr+eUqOaIt++8jOWImeWvueavlOaYr+WQpuivtOS6hui/meWPpeivnVxyXG5cdFxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0cHVibGljIGluaXRUYWJsZShqc29uRGF0YTphbnkpOnZvaWR7XHJcblx0XHQvLyBpbml0IG1lbWJlciB2YWx1ZXMgaGVyZVxyXG5cdFx0dGhpcy5tX0lEID0ganNvbkRhdGEuSUQ7XHJcblx0XHR0aGlzLm1fVHlwZSA9IGpzb25EYXRhLlR5cGU7XHJcblx0XHR0aGlzLm1fVGFsa2VySUQgPSBqc29uRGF0YS5UYWxrZXJJRDtcclxuXHRcdHRoaXMubV9Xb3JkID0ganNvbkRhdGEuV29yZDtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuIH0iXX0=