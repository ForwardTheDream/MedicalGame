
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/HomeScene');
require('./assets/Script/Tables/TableStruct');
require('./assets/Script/Tables/TableSystem');
require('./assets/Script/Tables/Table_ErrorCode');
require('./assets/Script/Tables/Table_Scene');
require('./assets/Script/Tables/Table_Story');
require('./assets/migration/use_v2.1-2.2.1_cc.Toggle_event');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/HomeScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'HomeScene');
// Script/HomeScene.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    Helloworld.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "label", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSG9tZVNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBUUM7UUFMRyxXQUFLLEdBQWEsSUFBSSxDQUFDOztJQUszQixDQUFDO0lBSEcsMEJBQUssR0FBTDtJQUVBLENBQUM7SUFKRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNJO0lBSE4sVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQVE5QjtJQUFELGlCQUFDO0NBUkQsQUFRQyxDQVJ1QyxFQUFFLENBQUMsU0FBUyxHQVFuRDtrQkFSb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG93b3JsZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.1-2.2.1_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0055SV/oVPe5QV/+Hf2mDo', 'use_v2.1-2.2.1_cc.Toggle_event');
// migration/use_v2.1-2.2.1_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with the v2.1.0 ～ 2.2.1 version.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 ~ 2.2.1 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether to trigger 'toggle' and 'checkEvents' events when modifying 'toggle.isChecked' in the code
  // 在代码中修改 'toggle.isChecked' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_isChecked = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9taWdyYXRpb24vdXNlX3YyLjEtMi4yLjFfY2MuVG9nZ2xlX2V2ZW50LmpzIl0sIm5hbWVzIjpbImNjIiwiVG9nZ2xlIiwiX3RyaWdnZXJFdmVudEluU2NyaXB0X2lzQ2hlY2tlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQSxJQUFJQSxFQUFFLENBQUNDLE1BQVAsRUFBZTtBQUNYO0FBQ0E7QUFDQUQsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLCtCQUFWLEdBQTRDLElBQTVDO0FBQ0giLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIHNjcmlwdCBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBDb2NvcyBDcmVhdG9yIGFuZCBpcyBvbmx5IHVzZWQgZm9yIHByb2plY3RzIGNvbXBhdGlibGUgd2l0aCB0aGUgdjIuMS4wIO+9niAyLjIuMSB2ZXJzaW9uLlxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cbiAqIElmIHlvdSBkb24ndCB1c2UgY2MuVG9nZ2xlIGluIHlvdXIgcHJvamVjdCwgeW91IGNhbiBkZWxldGUgdGhpcyBzY3JpcHQgZGlyZWN0bHkuXG4gKiBJZiB5b3VyIHByb2plY3QgaXMgaG9zdGVkIGluIFZDUyBzdWNoIGFzIGdpdCwgc3VibWl0IHRoaXMgc2NyaXB0IHRvZ2V0aGVyLlxuICpcbiAqIOatpOiEmuacrOeUsSBDb2NvcyBDcmVhdG9yIOiHquWKqOeUn+aIkO+8jOS7heeUqOS6juWFvOWuuSB2Mi4xLjAgfiAyLjIuMSDniYjmnKznmoTlt6XnqIvvvIxcbiAqIOS9oOaXoOmcgOWcqOS7u+S9leWFtuWug+mhueebruS4reaJi+WKqOa3u+WKoOatpOiEmuacrOOAglxuICog5aaC5p6c5L2g55qE6aG555uu5Lit5rKh55So5YiwIFRvZ2dsZe+8jOWPr+ebtOaOpeWIoOmZpOivpeiEmuacrOOAglxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcbiAqL1xuXG5pZiAoY2MuVG9nZ2xlKSB7XG4gICAgLy8gV2hldGhlciB0byB0cmlnZ2VyICd0b2dnbGUnIGFuZCAnY2hlY2tFdmVudHMnIGV2ZW50cyB3aGVuIG1vZGlmeWluZyAndG9nZ2xlLmlzQ2hlY2tlZCcgaW4gdGhlIGNvZGVcbiAgICAvLyDlnKjku6PnoIHkuK3kv67mlLkgJ3RvZ2dsZS5pc0NoZWNrZWQnIOaXtuaYr+WQpuinpuWPkSAndG9nZ2xlJyDkuI4gJ2NoZWNrRXZlbnRzJyDkuovku7ZcbiAgICBjYy5Ub2dnbGUuX3RyaWdnZXJFdmVudEluU2NyaXB0X2lzQ2hlY2tlZCA9IHRydWU7XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tables/TableStruct.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb4826L89JM1ZV9L6ZZqSIs', 'TableStruct');
// Script/Tables/TableStruct.ts

/**
 *
 * @author : ludingguo
 *
 * @time : 2021-07-15
 *
 * @function :  TableStruct class define
 *
 */
var TableStruct = /** @class */ (function () {
    // define member values here
    function TableStruct() {
    }
    TableStruct.prototype.initTable = function (jsonData) {
        // init member values here
    };
    return TableStruct;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVGFibGVzL1RhYmxlU3RydWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztHQVFHO0FBRUY7SUFFQSw0QkFBNEI7SUFFNUI7SUFFQSxDQUFDO0lBR00sK0JBQVMsR0FBaEIsVUFBaUIsUUFBWTtRQUM1QiwwQkFBMEI7SUFFM0IsQ0FBQztJQUVELGtCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBAYXV0aG9yIDogbHVkaW5nZ3VvXG4gKiBcbiAqIEB0aW1lIDogMjAyMS0wNy0xNVxuICogXG4gKiBAZnVuY3Rpb24gOiAgVGFibGVTdHJ1Y3QgY2xhc3MgZGVmaW5lXG4gKlxuICovXG4gXG4gY2xhc3MgVGFibGVTdHJ1Y3Qge1xuIFxuXHQvLyBkZWZpbmUgbWVtYmVyIHZhbHVlcyBoZXJlXG5cdFxuXHRwdWJsaWMgY29uc3RydWN0b3IoKXtcblx0XHRcblx0fVxuXHRcblx0XG5cdHB1YmxpYyBpbml0VGFibGUoanNvbkRhdGE6YW55KTp2b2lke1xuXHRcdC8vIGluaXQgbWVtYmVyIHZhbHVlcyBoZXJlXG5cdFx0XG5cdH1cblx0XG4gfSJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVGFibGVzL1RhYmxlX1N0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztHQVFHOzs7Ozs7Ozs7Ozs7OztBQUVGO0lBQTBCLCtCQUFXO0lBUXJDO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBUkQsNEJBQTRCO1FBQ3JCLFVBQUksR0FBVSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3ZCLFlBQU0sR0FBVSxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7UUFDNUMsZ0JBQVUsR0FBVSxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7UUFDMUMsWUFBTSxHQUFVLEVBQUUsQ0FBQyxDQUFDLGdDQUFnQzs7SUFJM0QsQ0FBQztJQUdNLCtCQUFTLEdBQWhCLFVBQWlCLFFBQVk7UUFDNUIsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztJQUU3QixDQUFDO0lBRUQsa0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxDQXRCeUIsV0FBVyxHQXNCcEMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBAYXV0aG9yIDogbHVkaW5nZ3VvXG4gKiBcbiAqIEB0aW1lIDogMjAyMS0wNy0xNVxuICogXG4gKiBAZnVuY3Rpb24gOiAgVGFibGVfU3RvcnkgY2xhc3MgZGVmaW5lXG4gKlxuICovXG4gXG4gY2xhc3MgVGFibGVfU3RvcnkgZXh0ZW5kcyBUYWJsZVN0cnVjdHtcbiBcblx0Ly8gZGVmaW5lIG1lbWJlciB2YWx1ZXMgaGVyZVxuXHRwdWJsaWMgbV9JRDpudW1iZXIgPSAwO1x0Ly/liafmg4VJRFxuXHRwdWJsaWMgbV9UeXBlOm51bWJlciA9IDA7XHQvL+W8leWvvOivreexu+Wei++8iDHvvJpOUEPor7Tor53vvIwy77ya5byV5a+855So5oi36K+06K+d77yJXG5cdHB1YmxpYyBtX1RhbGtlcklEOm51bWJlciA9IDA7XHQvL+W9k+WJjeivtOivneiAheeahOe8luWPt++8jDDvvJrooajnpLrnlKjmiLfor7Tor51cblx0cHVibGljIG1fV29yZDpzdHJpbmcgPSBcIlwiO1x0Ly/lpoLmnpzmmK9OUEPvvIzliJnlsZXnpLror6Xor63lj6XvvIzlpoLmnpzmmK/nlKjmiLfvvIzliJnlr7nmr5TmmK/lkKbor7Tkuobov5nlj6Xor51cblx0XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdH1cblx0XG5cdFxuXHRwdWJsaWMgaW5pdFRhYmxlKGpzb25EYXRhOmFueSk6dm9pZHtcblx0XHQvLyBpbml0IG1lbWJlciB2YWx1ZXMgaGVyZVxuXHRcdHRoaXMubV9JRCA9IGpzb25EYXRhLklEO1xuXHRcdHRoaXMubV9UeXBlID0ganNvbkRhdGEuVHlwZTtcblx0XHR0aGlzLm1fVGFsa2VySUQgPSBqc29uRGF0YS5UYWxrZXJJRDtcblx0XHR0aGlzLm1fV29yZCA9IGpzb25EYXRhLldvcmQ7XG5cdFx0XG5cdH1cblx0XG4gfSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tables/TableSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f940f9Dh09BMqgEHMBtsQpS', 'TableSystem');
// Script/Tables/TableSystem.ts

/**
 *
 * @author : ludingguo
 *
 * @time : 2021-07-15
 *
 * @function : Table struct manager
 *
 */
var TableSystem = /** @class */ (function () {
    function TableSystem() {
        //===============================================================================================
        this.m_listErrorCode = new Array();
        this.m_listScene = new Array();
        this.m_listStory = new Array();
    }
    TableSystem.getInstance = function () {
        if (TableSystem._instance == null) {
            TableSystem._instance = new TableSystem();
            //===================================================
            TableSystem._instance.loadErrorCode();
            TableSystem._instance.loadScene();
            TableSystem._instance.loadStory();
            //===================================================
        }
        return TableSystem._instance;
    };
    //====================================================================================
    TableSystem.prototype.loadErrorCode = function () {
        var tableTxt = RES.getRes("ErrorCode_txt");
        var jsonData = JSON.parse(tableTxt);
        for (var i = 0; i < jsonData.length; i++) {
            var jsData = jsonData[i];
            var table_ErrorCode = new Table_ErrorCode();
            table_ErrorCode.initTable(jsData);
            this.addErrorCode(table_ErrorCode);
        }
    };
    TableSystem.prototype.addErrorCode = function (table) {
        for (var i = 0; i < this.m_listErrorCode.length; i++) {
            var tableItem = this.m_listErrorCode[i];
            if (tableItem.m_ID == table.m_ID) {
                return;
            }
        }
        this.m_listErrorCode.push(table);
    };
    TableSystem.prototype.getErrorCode = function (index) {
        var table = null;
        if (index < this.m_listErrorCode.length) {
            table = this.m_listErrorCode[index];
        }
        return table;
    };
    TableSystem.prototype.getErrorCodeById = function (id) {
        var table = null;
        for (var i = 0; i < this.m_listErrorCode.length; i++) {
            var tableTemplate = this.m_listErrorCode[i];
            if (tableTemplate.m_ID == id) {
                table = tableTemplate;
            }
        }
        return table;
    };
    TableSystem.prototype.getErrorCodeCount = function () {
        return this.m_listErrorCode.length;
    };
    //====================================================================================
    TableSystem.prototype.loadScene = function () {
        var tableTxt = RES.getRes("Scene_txt");
        var jsonData = JSON.parse(tableTxt);
        for (var i = 0; i < jsonData.length; i++) {
            var jsData = jsonData[i];
            var table_Scene = new Table_Scene();
            table_Scene.initTable(jsData);
            this.addScene(table_Scene);
        }
    };
    TableSystem.prototype.addScene = function (table) {
        for (var i = 0; i < this.m_listScene.length; i++) {
            var tableItem = this.m_listScene[i];
            if (tableItem.m_ID == table.m_ID) {
                return;
            }
        }
        this.m_listScene.push(table);
    };
    TableSystem.prototype.getScene = function (index) {
        var table = null;
        if (index < this.m_listScene.length) {
            table = this.m_listScene[index];
        }
        return table;
    };
    TableSystem.prototype.getSceneById = function (id) {
        var table = null;
        for (var i = 0; i < this.m_listScene.length; i++) {
            var tableTemplate = this.m_listScene[i];
            if (tableTemplate.m_ID == id) {
                table = tableTemplate;
            }
        }
        return table;
    };
    TableSystem.prototype.getSceneCount = function () {
        return this.m_listScene.length;
    };
    //====================================================================================
    TableSystem.prototype.loadStory = function () {
        var tableTxt = RES.getRes("Story_txt");
        var jsonData = JSON.parse(tableTxt);
        for (var i = 0; i < jsonData.length; i++) {
            var jsData = jsonData[i];
            var table_Story = new Table_Story();
            table_Story.initTable(jsData);
            this.addStory(table_Story);
        }
    };
    TableSystem.prototype.addStory = function (table) {
        for (var i = 0; i < this.m_listStory.length; i++) {
            var tableItem = this.m_listStory[i];
            if (tableItem.m_ID == table.m_ID) {
                return;
            }
        }
        this.m_listStory.push(table);
    };
    TableSystem.prototype.getStory = function (index) {
        var table = null;
        if (index < this.m_listStory.length) {
            table = this.m_listStory[index];
        }
        return table;
    };
    TableSystem.prototype.getStoryById = function (id) {
        var table = null;
        for (var i = 0; i < this.m_listStory.length; i++) {
            var tableTemplate = this.m_listStory[i];
            if (tableTemplate.m_ID == id) {
                table = tableTemplate;
            }
        }
        return table;
    };
    TableSystem.prototype.getStoryCount = function () {
        return this.m_listStory.length;
    };
    TableSystem._instance = null;
    return TableSystem;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVGFibGVzL1RhYmxlU3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztHQVFHO0FBQ0g7SUFpQkk7UUFJQSxpR0FBaUc7UUFDekYsb0JBQWUsR0FBMkIsSUFBSSxLQUFLLEVBQW1CLENBQUM7UUFDMUUsZ0JBQVcsR0FBdUIsSUFBSSxLQUFLLEVBQWUsQ0FBQztRQUMzRCxnQkFBVyxHQUF1QixJQUFJLEtBQUssRUFBZSxDQUFDO0lBTmhFLENBQUM7SUFmYSx1QkFBVyxHQUF6QjtRQUNJLElBQUcsV0FBVyxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDOUIsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzFDLHFEQUFxRDtZQUNyRCxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQy9DLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUV6QixxREFBcUQ7U0FDeEQ7UUFFRCxPQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQVlELHNGQUFzRjtJQUNsRixtQ0FBYSxHQUFwQjtRQUNDLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDM0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxlQUFlLEdBQW9CLElBQUksZUFBZSxFQUFFLENBQUM7WUFDN0QsZUFBZSxDQUFDLFNBQVMsQ0FB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QkFBQztDQTNLRCxBQTJLQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogQGF1dGhvciA6IGx1ZGluZ2d1b1xuICogXG4gKiBAdGltZSA6IDIwMjEtMDctMTVcbiAqIFxuICogQGZ1bmN0aW9uIDogVGFibGUgc3RydWN0IG1hbmFnZXJcbiAqXG4gKi9cbmNsYXNzIFRhYmxlU3lzdGVtIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlOiBUYWJsZVN5c3RlbSA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBUYWJsZVN5c3RlbSB7XG4gICAgICAgIGlmKFRhYmxlU3lzdGVtLl9pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBUYWJsZVN5c3RlbS5faW5zdGFuY2UgPSBuZXcgVGFibGVTeXN0ZW0oKTtcbiAgICAgICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICBUYWJsZVN5c3RlbS5faW5zdGFuY2UubG9hZEVycm9yQ29kZSgpO1xuXHRcdFx0VGFibGVTeXN0ZW0uX2luc3RhbmNlLmxvYWRTY2VuZSgpO1xuXHRcdFx0VGFibGVTeXN0ZW0uX2luc3RhbmNlLmxvYWRTdG9yeSgpO1xuXHRcdFx0XG4gICAgICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFRhYmxlU3lzdGVtLl9pbnN0YW5jZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHByaXZhdGUgbV9saXN0RXJyb3JDb2RlOiBBcnJheTxUYWJsZV9FcnJvckNvZGU+ID0gbmV3IEFycmF5PFRhYmxlX0Vycm9yQ29kZT4oKTtcblx0cHJpdmF0ZSBtX2xpc3RTY2VuZTogQXJyYXk8VGFibGVfU2NlbmU+ID0gbmV3IEFycmF5PFRhYmxlX1NjZW5lPigpO1xuXHRwcml2YXRlIG1fbGlzdFN0b3J5OiBBcnJheTxUYWJsZV9TdG9yeT4gPSBuZXcgQXJyYXk8VGFibGVfU3Rvcnk+KCk7XG5cdFxuICAgIFxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdHB1YmxpYyBsb2FkRXJyb3JDb2RlKCk6IHZvaWQge1xuXHRcdHZhciB0YWJsZVR4dCA9IFJFUy5nZXRSZXMoXCJFcnJvckNvZGVfdHh0XCIpO1xuXHRcdHZhciBqc29uRGF0YSA9IEpTT04ucGFyc2UodGFibGVUeHQpO1xuXG5cdFx0Zm9yKHZhciBpID0gMDtpIDwganNvbkRhdGEubGVuZ3RoO2krKykge1xuXHRcdFx0dmFyIGpzRGF0YSA9IGpzb25EYXRhW2ldO1xuXHRcdFx0dmFyIHRhYmxlX0Vycm9yQ29kZTogVGFibGVfRXJyb3JDb2RlID0gbmV3IFRhYmxlX0Vycm9yQ29kZSgpO1xuXHRcdFx0dGFibGVfRXJyb3JDb2RlLmluaXRUYWJsZShqc0RhdGEpO1xuXHRcdFx0dGhpcy5hZGRFcnJvckNvZGUodGFibGVfRXJyb3JDb2RlKTtcblx0XHR9XG5cdH1cblx0XHRcblx0cHJpdmF0ZSBhZGRFcnJvckNvZGUodGFibGU6IFRhYmxlX0Vycm9yQ29kZSk6dm9pZHtcblx0XHRmb3IodmFyIGkgPSAwO2kgPCB0aGlzLm1fbGlzdEVycm9yQ29kZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHRhYmxlSXRlbTpUYWJsZV9FcnJvckNvZGUgPSB0aGlzLm1fbGlzdEVycm9yQ29kZVtpXTtcblx0XHRcdGlmKHRhYmxlSXRlbS5tX0lEID09IHRhYmxlLm1fSUQpe1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMubV9saXN0RXJyb3JDb2RlLnB1c2godGFibGUpO1xuXHR9XG5cblx0cHVibGljIGdldEVycm9yQ29kZShpbmRleDpudW1iZXIpOlRhYmxlX0Vycm9yQ29kZXtcblx0XHR2YXIgdGFibGU6VGFibGVfRXJyb3JDb2RlID0gbnVsbDtcblx0XHRpZiAoaW5kZXggPCB0aGlzLm1fbGlzdEVycm9yQ29kZS5sZW5ndGgpe1xuXHRcdFx0dGFibGUgPSB0aGlzLm1fbGlzdEVycm9yQ29kZVtpbmRleF07XG5cdFx0fVxuXHRcdHJldHVybiB0YWJsZTtcblx0fVxuXHRcblx0cHVibGljIGdldEVycm9yQ29kZUJ5SWQoaWQ6bnVtYmVyKTpUYWJsZV9FcnJvckNvZGV7XG5cdFx0dmFyIHRhYmxlOlRhYmxlX0Vycm9yQ29kZSA9IG51bGw7XG5cdFx0Zm9yICh2YXIgaT0wOyBpIDwgdGhpcy5tX2xpc3RFcnJvckNvZGUubGVuZ3RoOyBpKyspe1xuXHRcdFx0dmFyIHRhYmxlVGVtcGxhdGUgPSB0aGlzLm1fbGlzdEVycm9yQ29kZVtpXTtcblx0XHRcdGlmICh0YWJsZVRlbXBsYXRlLm1fSUQgPT0gaWQpe1xuXHRcdFx0XHR0YWJsZSA9IHRhYmxlVGVtcGxhdGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0YWJsZTtcblx0fVxuXG5cdHB1YmxpYyBnZXRFcnJvckNvZGVDb3VudCgpOm51bWJlcntcblx0XHRyZXR1cm4gdGhpcy5tX2xpc3RFcnJvckNvZGUubGVuZ3RoO1xuXHR9XG5cblx0Ly89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0cHVibGljIGxvYWRTY2VuZSgpOiB2b2lkIHtcblx0XHR2YXIgdGFibGVUeHQgPSBSRVMuZ2V0UmVzKFwiU2NlbmVfdHh0XCIpO1xuXHRcdHZhciBqc29uRGF0YSA9IEpTT04ucGFyc2UodGFibGVUeHQpO1xuXG5cdFx0Zm9yKHZhciBpID0gMDtpIDwganNvbkRhdGEubGVuZ3RoO2krKykge1xuXHRcdFx0dmFyIGpzRGF0YSA9IGpzb25EYXRhW2ldO1xuXHRcdFx0dmFyIHRhYmxlX1NjZW5lOiBUYWJsZV9TY2VuZSA9IG5ldyBUYWJsZV9TY2VuZSgpO1xuXHRcdFx0dGFibGVfU2NlbmUuaW5pdFRhYmxlKGpzRGF0YSk7XG5cdFx0XHR0aGlzLmFkZFNjZW5lKHRhYmxlX1NjZW5lKTtcblx0XHR9XG5cdH1cblx0XHRcblx0cHJpdmF0ZSBhZGRTY2VuZSh0YWJsZTogVGFibGVfU2NlbmUpOnZvaWR7XG5cdFx0Zm9yKHZhciBpID0gMDtpIDwgdGhpcy5tX2xpc3RTY2VuZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHRhYmxlSXRlbTpUYWJsZV9TY2VuZSA9IHRoaXMubV9saXN0U2NlbmVbaV07XG5cdFx0XHRpZih0YWJsZUl0ZW0ubV9JRCA9PSB0YWJsZS5tX0lEKXtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHR0aGlzLm1fbGlzdFNjZW5lLnB1c2godGFibGUpO1xuXHR9XG5cblx0cHVibGljIGdldFNjZW5lKGluZGV4Om51bWJlcik6VGFibGVfU2NlbmV7XG5cdFx0dmFyIHRhYmxlOlRhYmxlX1NjZW5lID0gbnVsbDtcblx0XHRpZiAoaW5kZXggPCB0aGlzLm1fbGlzdFNjZW5lLmxlbmd0aCl7XG5cdFx0XHR0YWJsZSA9IHRoaXMubV9saXN0U2NlbmVbaW5kZXhdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGFibGU7XG5cdH1cblx0XG5cdHB1YmxpYyBnZXRTY2VuZUJ5SWQoaWQ6bnVtYmVyKTpUYWJsZV9TY2VuZXtcblx0XHR2YXIgdGFibGU6VGFibGVfU2NlbmUgPSBudWxsO1xuXHRcdGZvciAodmFyIGk9MDsgaSA8IHRoaXMubV9saXN0U2NlbmUubGVuZ3RoOyBpKyspe1xuXHRcdFx0dmFyIHRhYmxlVGVtcGxhdGUgPSB0aGlzLm1fbGlzdFNjZW5lW2ldO1xuXHRcdFx0aWYgKHRhYmxlVGVtcGxhdGUubV9JRCA9PSBpZCl7XG5cdFx0XHRcdHRhYmxlID0gdGFibGVUZW1wbGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRhYmxlO1xuXHR9XG5cblx0cHVibGljIGdldFNjZW5lQ291bnQoKTpudW1iZXJ7XG5cdFx0cmV0dXJuIHRoaXMubV9saXN0U2NlbmUubGVuZ3RoO1xuXHR9XG5cblx0Ly89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0cHVibGljIGxvYWRTdG9yeSgpOiB2b2lkIHtcblx0XHR2YXIgdGFibGVUeHQgPSBSRVMuZ2V0UmVzKFwiU3RvcnlfdHh0XCIpO1xuXHRcdHZhciBqc29uRGF0YSA9IEpTT04ucGFyc2UodGFibGVUeHQpO1xuXG5cdFx0Zm9yKHZhciBpID0gMDtpIDwganNvbkRhdGEubGVuZ3RoO2krKykge1xuXHRcdFx0dmFyIGpzRGF0YSA9IGpzb25EYXRhW2ldO1xuXHRcdFx0dmFyIHRhYmxlX1N0b3J5OiBUYWJsZV9TdG9yeSA9IG5ldyBUYWJsZV9TdG9yeSgpO1xuXHRcdFx0dGFibGVfU3RvcnkuaW5pdFRhYmxlKGpzRGF0YSk7XG5cdFx0XHR0aGlzLmFkZFN0b3J5KHRhYmxlX1N0b3J5KTtcblx0XHR9XG5cdH1cblx0XHRcblx0cHJpdmF0ZSBhZGRTdG9yeSh0YWJsZTogVGFibGVfU3RvcnkpOnZvaWR7XG5cdFx0Zm9yKHZhciBpID0gMDtpIDwgdGhpcy5tX2xpc3RTdG9yeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHRhYmxlSXRlbTpUYWJsZV9TdG9yeSA9IHRoaXMubV9saXN0U3RvcnlbaV07XG5cdFx0XHRpZih0YWJsZUl0ZW0ubV9JRCA9PSB0YWJsZS5tX0lEKXtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHR0aGlzLm1fbGlzdFN0b3J5LnB1c2godGFibGUpO1xuXHR9XG5cblx0cHVibGljIGdldFN0b3J5KGluZGV4Om51bWJlcik6VGFibGVfU3Rvcnl7XG5cdFx0dmFyIHRhYmxlOlRhYmxlX1N0b3J5ID0gbnVsbDtcblx0XHRpZiAoaW5kZXggPCB0aGlzLm1fbGlzdFN0b3J5Lmxlbmd0aCl7XG5cdFx0XHR0YWJsZSA9IHRoaXMubV9saXN0U3RvcnlbaW5kZXhdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGFibGU7XG5cdH1cblx0XG5cdHB1YmxpYyBnZXRTdG9yeUJ5SWQoaWQ6bnVtYmVyKTpUYWJsZV9TdG9yeXtcblx0XHR2YXIgdGFibGU6VGFibGVfU3RvcnkgPSBudWxsO1xuXHRcdGZvciAodmFyIGk9MDsgaSA8IHRoaXMubV9saXN0U3RvcnkubGVuZ3RoOyBpKyspe1xuXHRcdFx0dmFyIHRhYmxlVGVtcGxhdGUgPSB0aGlzLm1fbGlzdFN0b3J5W2ldO1xuXHRcdFx0aWYgKHRhYmxlVGVtcGxhdGUubV9JRCA9PSBpZCl7XG5cdFx0XHRcdHRhYmxlID0gdGFibGVUZW1wbGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRhYmxlO1xuXHR9XG5cblx0cHVibGljIGdldFN0b3J5Q291bnQoKTpudW1iZXJ7XG5cdFx0cmV0dXJuIHRoaXMubV9saXN0U3RvcnkubGVuZ3RoO1xuXHR9XG5cblx0XG4gICAgXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
