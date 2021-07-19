
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
        _this.m_TalkerID = 0; //当前说话者的编号，0：表示用户说话
        _this.m_Word = ""; //如果是NPC，则展示该语句，如果是用户，则对比是否说了这句话
        return _this;
    }
    Table_Story.prototype.initTable = function (jsonData) {
        // init member values here
        this.m_ID = jsonData.ID;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVGFibGVzL1RhYmxlX1N0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztHQVFHOzs7Ozs7Ozs7Ozs7OztBQUVGO0lBQTBCLCtCQUFXO0lBT3JDO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBUEQsNEJBQTRCO1FBQ3JCLFVBQUksR0FBVSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3ZCLGdCQUFVLEdBQVUsQ0FBQyxDQUFDLENBQUMsbUJBQW1CO1FBQzFDLFlBQU0sR0FBVSxFQUFFLENBQUMsQ0FBQyxnQ0FBZ0M7O0lBSTNELENBQUM7SUFHTSwrQkFBUyxHQUFoQixVQUFpQixRQUFZO1FBQzVCLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztJQUU3QixDQUFDO0lBRUQsa0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxDQXBCeUIsV0FBVyxHQW9CcEMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBAYXV0aG9yIDogbHVkaW5nZ3VvXG4gKiBcbiAqIEB0aW1lIDogMjAyMS0wNy0xNVxuICogXG4gKiBAZnVuY3Rpb24gOiAgVGFibGVfU3RvcnkgY2xhc3MgZGVmaW5lXG4gKlxuICovXG4gXG4gY2xhc3MgVGFibGVfU3RvcnkgZXh0ZW5kcyBUYWJsZVN0cnVjdHtcbiBcblx0Ly8gZGVmaW5lIG1lbWJlciB2YWx1ZXMgaGVyZVxuXHRwdWJsaWMgbV9JRDpudW1iZXIgPSAwO1x0Ly/liafmg4VJRFxuXHRwdWJsaWMgbV9UYWxrZXJJRDpudW1iZXIgPSAwO1x0Ly/lvZPliY3or7Tor53ogIXnmoTnvJblj7fvvIww77ya6KGo56S655So5oi36K+06K+dXG5cdHB1YmxpYyBtX1dvcmQ6c3RyaW5nID0gXCJcIjtcdC8v5aaC5p6c5pivTlBD77yM5YiZ5bGV56S66K+l6K+t5Y+l77yM5aaC5p6c5piv55So5oi377yM5YiZ5a+55q+U5piv5ZCm6K+05LqG6L+Z5Y+l6K+dXG5cdFxuXHRwdWJsaWMgY29uc3RydWN0b3IoKXtcblx0XHRzdXBlcigpO1xuXHR9XG5cdFxuXHRcblx0cHVibGljIGluaXRUYWJsZShqc29uRGF0YTphbnkpOnZvaWR7XG5cdFx0Ly8gaW5pdCBtZW1iZXIgdmFsdWVzIGhlcmVcblx0XHR0aGlzLm1fSUQgPSBqc29uRGF0YS5JRDtcblx0XHR0aGlzLm1fVGFsa2VySUQgPSBqc29uRGF0YS5UYWxrZXJJRDtcblx0XHR0aGlzLm1fV29yZCA9IGpzb25EYXRhLldvcmQ7XG5cdFx0XG5cdH1cblx0XG4gfSJdfQ==