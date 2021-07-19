
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUYWJsZXNcXFRhYmxlU3RydWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztHQVFHO0FBRUY7SUFFQSw0QkFBNEI7SUFFNUI7SUFFQSxDQUFDO0lBR00sK0JBQVMsR0FBaEIsVUFBaUIsUUFBWTtRQUM1QiwwQkFBMEI7SUFFM0IsQ0FBQztJQUVELGtCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICpcclxuICogQGF1dGhvciA6IGx1ZGluZ2d1b1xyXG4gKiBcclxuICogQHRpbWUgOiAyMDIxLTA3LTE1XHJcbiAqIFxyXG4gKiBAZnVuY3Rpb24gOiAgVGFibGVTdHJ1Y3QgY2xhc3MgZGVmaW5lXHJcbiAqXHJcbiAqL1xyXG4gXHJcbiBjbGFzcyBUYWJsZVN0cnVjdCB7XHJcbiBcclxuXHQvLyBkZWZpbmUgbWVtYmVyIHZhbHVlcyBoZXJlXHJcblx0XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCl7XHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0XHJcblx0cHVibGljIGluaXRUYWJsZShqc29uRGF0YTphbnkpOnZvaWR7XHJcblx0XHQvLyBpbml0IG1lbWJlciB2YWx1ZXMgaGVyZVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG4gfSJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIb21lU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFRQztRQUxHLFdBQUssR0FBYSxJQUFJLENBQUM7O0lBSzNCLENBQUM7SUFIRywwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ0k7SUFITixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBUTlCO0lBQUQsaUJBQUM7Q0FSRCxBQVFDLENBUnVDLEVBQUUsQ0FBQyxTQUFTLEdBUW5EO2tCQVJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxsb3dvcmxkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUYWJsZXNcXFRhYmxlU3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztHQVFHO0FBQ0g7SUFpQkk7UUFJQSxpR0FBaUc7UUFDekYsb0JBQWUsR0FBMkIsSUFBSSxLQUFLLEVBQW1CLENBQUM7UUFDMUUsZ0JBQVcsR0FBdUIsSUFBSSxLQUFLLEVBQWUsQ0FBQztRQUMzRCxnQkFBVyxHQUF1QixJQUFJLEtBQUssRUFBZSxDQUFDO0lBTmhFLENBQUM7SUFmYSx1QkFBVyxHQUF6QjtRQUNJLElBQUcsV0FBVyxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDOUIsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzFDLHFEQUFxRDtZQUNyRCxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQy9DLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUV6QixxREFBcUQ7U0FDeEQ7UUFFRCxPQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQVlELHNGQUFzRjtJQUNsRixtQ0FBYSxHQUFwQjtRQUNDLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDM0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxlQUFlLEdBQW9CLElBQUksZUFBZSxFQUFFLENBQUM7WUFDN0QsZUFBZSxDQUFDLFNBQVMs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RCxrQkFBQztDQTNLRCxBQTJLQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqXHJcbiAqIEBhdXRob3IgOiBsdWRpbmdndW9cclxuICogXHJcbiAqIEB0aW1lIDogMjAyMS0wNy0xNVxyXG4gKiBcclxuICogQGZ1bmN0aW9uIDogVGFibGUgc3RydWN0IG1hbmFnZXJcclxuICpcclxuICovXHJcbmNsYXNzIFRhYmxlU3lzdGVtIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIF9pbnN0YW5jZTogVGFibGVTeXN0ZW0gPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBUYWJsZVN5c3RlbSB7XHJcbiAgICAgICAgaWYoVGFibGVTeXN0ZW0uX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgVGFibGVTeXN0ZW0uX2luc3RhbmNlID0gbmV3IFRhYmxlU3lzdGVtKCk7XHJcbiAgICAgICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIFRhYmxlU3lzdGVtLl9pbnN0YW5jZS5sb2FkRXJyb3JDb2RlKCk7XHJcblx0XHRcdFRhYmxlU3lzdGVtLl9pbnN0YW5jZS5sb2FkU2NlbmUoKTtcclxuXHRcdFx0VGFibGVTeXN0ZW0uX2luc3RhbmNlLmxvYWRTdG9yeSgpO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBUYWJsZVN5c3RlbS5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcHJpdmF0ZSBtX2xpc3RFcnJvckNvZGU6IEFycmF5PFRhYmxlX0Vycm9yQ29kZT4gPSBuZXcgQXJyYXk8VGFibGVfRXJyb3JDb2RlPigpO1xyXG5cdHByaXZhdGUgbV9saXN0U2NlbmU6IEFycmF5PFRhYmxlX1NjZW5lPiA9IG5ldyBBcnJheTxUYWJsZV9TY2VuZT4oKTtcclxuXHRwcml2YXRlIG1fbGlzdFN0b3J5OiBBcnJheTxUYWJsZV9TdG9yeT4gPSBuZXcgQXJyYXk8VGFibGVfU3Rvcnk+KCk7XHJcblx0XHJcbiAgICBcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0cHVibGljIGxvYWRFcnJvckNvZGUoKTogdm9pZCB7XHJcblx0XHR2YXIgdGFibGVUeHQgPSBSRVMuZ2V0UmVzKFwiRXJyb3JDb2RlX3R4dFwiKTtcclxuXHRcdHZhciBqc29uRGF0YSA9IEpTT04ucGFyc2UodGFibGVUeHQpO1xyXG5cclxuXHRcdGZvcih2YXIgaSA9IDA7aSA8IGpzb25EYXRhLmxlbmd0aDtpKyspIHtcclxuXHRcdFx0dmFyIGpzRGF0YSA9IGpzb25EYXRhW2ldO1xyXG5cdFx0XHR2YXIgdGFibGVfRXJyb3JDb2RlOiBUYWJsZV9FcnJvckNvZGUgPSBuZXcgVGFibGVfRXJyb3JDb2RlKCk7XHJcblx0XHRcdHRhYmxlX0Vycm9yQ29kZS5pbml0VGFibGUoanNEYXRhKTtcclxuXHRcdFx0dGhpcy5hZGRFcnJvckNvZGUodGFibGVfRXJyb3JDb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHRcclxuXHRwcml2YXRlIGFkZEVycm9yQ29kZSh0YWJsZTogVGFibGVfRXJyb3JDb2RlKTp2b2lke1xyXG5cdFx0Zm9yKHZhciBpID0gMDtpIDwgdGhpcy5tX2xpc3RFcnJvckNvZGUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIHRhYmxlSXRlbTpUYWJsZV9FcnJvckNvZGUgPSB0aGlzLm1fbGlzdEVycm9yQ29kZVtpXTtcclxuXHRcdFx0aWYodGFibGVJdGVtLm1fSUQgPT0gdGFibGUubV9JRCl7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMubV9saXN0RXJyb3JDb2RlLnB1c2godGFibGUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEVycm9yQ29kZShpbmRleDpudW1iZXIpOlRhYmxlX0Vycm9yQ29kZXtcclxuXHRcdHZhciB0YWJsZTpUYWJsZV9FcnJvckNvZGUgPSBudWxsO1xyXG5cdFx0aWYgKGluZGV4IDwgdGhpcy5tX2xpc3RFcnJvckNvZGUubGVuZ3RoKXtcclxuXHRcdFx0dGFibGUgPSB0aGlzLm1fbGlzdEVycm9yQ29kZVtpbmRleF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGFibGU7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBnZXRFcnJvckNvZGVCeUlkKGlkOm51bWJlcik6VGFibGVfRXJyb3JDb2Rle1xyXG5cdFx0dmFyIHRhYmxlOlRhYmxlX0Vycm9yQ29kZSA9IG51bGw7XHJcblx0XHRmb3IgKHZhciBpPTA7IGkgPCB0aGlzLm1fbGlzdEVycm9yQ29kZS5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdHZhciB0YWJsZVRlbXBsYXRlID0gdGhpcy5tX2xpc3RFcnJvckNvZGVbaV07XHJcblx0XHRcdGlmICh0YWJsZVRlbXBsYXRlLm1fSUQgPT0gaWQpe1xyXG5cdFx0XHRcdHRhYmxlID0gdGFibGVUZW1wbGF0ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRhYmxlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEVycm9yQ29kZUNvdW50KCk6bnVtYmVye1xyXG5cdFx0cmV0dXJuIHRoaXMubV9saXN0RXJyb3JDb2RlLmxlbmd0aDtcclxuXHR9XHJcblxyXG5cdC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0cHVibGljIGxvYWRTY2VuZSgpOiB2b2lkIHtcclxuXHRcdHZhciB0YWJsZVR4dCA9IFJFUy5nZXRSZXMoXCJTY2VuZV90eHRcIik7XHJcblx0XHR2YXIganNvbkRhdGEgPSBKU09OLnBhcnNlKHRhYmxlVHh0KTtcclxuXHJcblx0XHRmb3IodmFyIGkgPSAwO2kgPCBqc29uRGF0YS5sZW5ndGg7aSsrKSB7XHJcblx0XHRcdHZhciBqc0RhdGEgPSBqc29uRGF0YVtpXTtcclxuXHRcdFx0dmFyIHRhYmxlX1NjZW5lOiBUYWJsZV9TY2VuZSA9IG5ldyBUYWJsZV9TY2VuZSgpO1xyXG5cdFx0XHR0YWJsZV9TY2VuZS5pbml0VGFibGUoanNEYXRhKTtcclxuXHRcdFx0dGhpcy5hZGRTY2VuZSh0YWJsZV9TY2VuZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFx0XHJcblx0cHJpdmF0ZSBhZGRTY2VuZSh0YWJsZTogVGFibGVfU2NlbmUpOnZvaWR7XHJcblx0XHRmb3IodmFyIGkgPSAwO2kgPCB0aGlzLm1fbGlzdFNjZW5lLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciB0YWJsZUl0ZW06VGFibGVfU2NlbmUgPSB0aGlzLm1fbGlzdFNjZW5lW2ldO1xyXG5cdFx0XHRpZih0YWJsZUl0ZW0ubV9JRCA9PSB0YWJsZS5tX0lEKXtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy5tX2xpc3RTY2VuZS5wdXNoKHRhYmxlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRTY2VuZShpbmRleDpudW1iZXIpOlRhYmxlX1NjZW5le1xyXG5cdFx0dmFyIHRhYmxlOlRhYmxlX1NjZW5lID0gbnVsbDtcclxuXHRcdGlmIChpbmRleCA8IHRoaXMubV9saXN0U2NlbmUubGVuZ3RoKXtcclxuXHRcdFx0dGFibGUgPSB0aGlzLm1fbGlzdFNjZW5lW2luZGV4XTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0YWJsZTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGdldFNjZW5lQnlJZChpZDpudW1iZXIpOlRhYmxlX1NjZW5le1xyXG5cdFx0dmFyIHRhYmxlOlRhYmxlX1NjZW5lID0gbnVsbDtcclxuXHRcdGZvciAodmFyIGk9MDsgaSA8IHRoaXMubV9saXN0U2NlbmUubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHR2YXIgdGFibGVUZW1wbGF0ZSA9IHRoaXMubV9saXN0U2NlbmVbaV07XHJcblx0XHRcdGlmICh0YWJsZVRlbXBsYXRlLm1fSUQgPT0gaWQpe1xyXG5cdFx0XHRcdHRhYmxlID0gdGFibGVUZW1wbGF0ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRhYmxlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFNjZW5lQ291bnQoKTpudW1iZXJ7XHJcblx0XHRyZXR1cm4gdGhpcy5tX2xpc3RTY2VuZS5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHQvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdHB1YmxpYyBsb2FkU3RvcnkoKTogdm9pZCB7XHJcblx0XHR2YXIgdGFibGVUeHQgPSBSRVMuZ2V0UmVzKFwiU3RvcnlfdHh0XCIpO1xyXG5cdFx0dmFyIGpzb25EYXRhID0gSlNPTi5wYXJzZSh0YWJsZVR4dCk7XHJcblxyXG5cdFx0Zm9yKHZhciBpID0gMDtpIDwganNvbkRhdGEubGVuZ3RoO2krKykge1xyXG5cdFx0XHR2YXIganNEYXRhID0ganNvbkRhdGFbaV07XHJcblx0XHRcdHZhciB0YWJsZV9TdG9yeTogVGFibGVfU3RvcnkgPSBuZXcgVGFibGVfU3RvcnkoKTtcclxuXHRcdFx0dGFibGVfU3RvcnkuaW5pdFRhYmxlKGpzRGF0YSk7XHJcblx0XHRcdHRoaXMuYWRkU3RvcnkodGFibGVfU3RvcnkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcdFxyXG5cdHByaXZhdGUgYWRkU3RvcnkodGFibGU6IFRhYmxlX1N0b3J5KTp2b2lke1xyXG5cdFx0Zm9yKHZhciBpID0gMDtpIDwgdGhpcy5tX2xpc3RTdG9yeS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgdGFibGVJdGVtOlRhYmxlX1N0b3J5ID0gdGhpcy5tX2xpc3RTdG9yeVtpXTtcclxuXHRcdFx0aWYodGFibGVJdGVtLm1fSUQgPT0gdGFibGUubV9JRCl7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMubV9saXN0U3RvcnkucHVzaCh0YWJsZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0U3RvcnkoaW5kZXg6bnVtYmVyKTpUYWJsZV9TdG9yeXtcclxuXHRcdHZhciB0YWJsZTpUYWJsZV9TdG9yeSA9IG51bGw7XHJcblx0XHRpZiAoaW5kZXggPCB0aGlzLm1fbGlzdFN0b3J5Lmxlbmd0aCl7XHJcblx0XHRcdHRhYmxlID0gdGhpcy5tX2xpc3RTdG9yeVtpbmRleF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGFibGU7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBnZXRTdG9yeUJ5SWQoaWQ6bnVtYmVyKTpUYWJsZV9TdG9yeXtcclxuXHRcdHZhciB0YWJsZTpUYWJsZV9TdG9yeSA9IG51bGw7XHJcblx0XHRmb3IgKHZhciBpPTA7IGkgPCB0aGlzLm1fbGlzdFN0b3J5Lmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0dmFyIHRhYmxlVGVtcGxhdGUgPSB0aGlzLm1fbGlzdFN0b3J5W2ldO1xyXG5cdFx0XHRpZiAodGFibGVUZW1wbGF0ZS5tX0lEID09IGlkKXtcclxuXHRcdFx0XHR0YWJsZSA9IHRhYmxlVGVtcGxhdGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0YWJsZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRTdG9yeUNvdW50KCk6bnVtYmVye1xyXG5cdFx0cmV0dXJuIHRoaXMubV9saXN0U3RvcnkubGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0XHJcbiAgICBcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxufSJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMS0yLjIuMV9jYy5Ub2dnbGVfZXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJUb2dnbGUiLCJfdHJpZ2dlckV2ZW50SW5TY3JpcHRfaXNDaGVja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVlBLElBQUlBLEVBQUUsQ0FBQ0MsTUFBUCxFQUFlO0FBQ1g7QUFDQTtBQUNBRCxFQUFBQSxFQUFFLENBQUNDLE1BQUgsQ0FBVUMsK0JBQVYsR0FBNEMsSUFBNUM7QUFDSCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdGhlIHYyLjEuMCDvvZ4gMi4yLjEgdmVyc2lvbi5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCB+IDIuMi4xIOeJiOacrOeahOW3peeoi++8jFxyXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5Lit5rKh55So5YiwIFRvZ2dsZe+8jOWPr+ebtOaOpeWIoOmZpOivpeiEmuacrOOAglxyXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxyXG4gKi9cclxuXHJcbmlmIChjYy5Ub2dnbGUpIHtcclxuICAgIC8vIFdoZXRoZXIgdG8gdHJpZ2dlciAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgd2hlbiBtb2RpZnlpbmcgJ3RvZ2dsZS5pc0NoZWNrZWQnIGluIHRoZSBjb2RlXHJcbiAgICAvLyDlnKjku6PnoIHkuK3kv67mlLkgJ3RvZ2dsZS5pc0NoZWNrZWQnIOaXtuaYr+WQpuinpuWPkSAndG9nZ2xlJyDkuI4gJ2NoZWNrRXZlbnRzJyDkuovku7ZcclxuICAgIGNjLlRvZ2dsZS5fdHJpZ2dlckV2ZW50SW5TY3JpcHRfaXNDaGVja2VkID0gdHJ1ZTtcclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUYWJsZXNcXFRhYmxlX1N0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztHQVFHOzs7Ozs7Ozs7Ozs7OztBQUVGO0lBQTBCLCtCQUFXO0lBUXJDO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBUkQsNEJBQTRCO1FBQ3JCLFVBQUksR0FBVSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3ZCLFlBQU0sR0FBVSxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7UUFDNUMsZ0JBQVUsR0FBVSxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7UUFDMUMsWUFBTSxHQUFVLEVBQUUsQ0FBQyxDQUFDLGdDQUFnQzs7SUFJM0QsQ0FBQztJQUdNLCtCQUFTLEdBQWhCLFVBQWlCLFFBQVk7UUFDNUIsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztJQUU3QixDQUFDO0lBRUQsa0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxDQXRCeUIsV0FBVyxHQXNCcEMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICpcclxuICogQGF1dGhvciA6IGx1ZGluZ2d1b1xyXG4gKiBcclxuICogQHRpbWUgOiAyMDIxLTA3LTE1XHJcbiAqIFxyXG4gKiBAZnVuY3Rpb24gOiAgVGFibGVfU3RvcnkgY2xhc3MgZGVmaW5lXHJcbiAqXHJcbiAqL1xyXG4gXHJcbiBjbGFzcyBUYWJsZV9TdG9yeSBleHRlbmRzIFRhYmxlU3RydWN0e1xyXG4gXHJcblx0Ly8gZGVmaW5lIG1lbWJlciB2YWx1ZXMgaGVyZVxyXG5cdHB1YmxpYyBtX0lEOm51bWJlciA9IDA7XHQvL+WJp+aDhUlEXHJcblx0cHVibGljIG1fVHlwZTpudW1iZXIgPSAwO1x0Ly/lvJXlr7zor63nsbvlnovvvIgx77yaTlBD6K+06K+d77yMMu+8muW8leWvvOeUqOaIt+ivtOivne+8iVxyXG5cdHB1YmxpYyBtX1RhbGtlcklEOm51bWJlciA9IDA7XHQvL+W9k+WJjeivtOivneiAheeahOe8luWPt++8jDDvvJrooajnpLrnlKjmiLfor7Tor51cclxuXHRwdWJsaWMgbV9Xb3JkOnN0cmluZyA9IFwiXCI7XHQvL+WmguaenOaYr05QQ++8jOWImeWxleekuuivpeivreWPpe+8jOWmguaenOaYr+eUqOaIt++8jOWImeWvueavlOaYr+WQpuivtOS6hui/meWPpeivnVxyXG5cdFxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0cHVibGljIGluaXRUYWJsZShqc29uRGF0YTphbnkpOnZvaWR7XHJcblx0XHQvLyBpbml0IG1lbWJlciB2YWx1ZXMgaGVyZVxyXG5cdFx0dGhpcy5tX0lEID0ganNvbkRhdGEuSUQ7XHJcblx0XHR0aGlzLm1fVHlwZSA9IGpzb25EYXRhLlR5cGU7XHJcblx0XHR0aGlzLm1fVGFsa2VySUQgPSBqc29uRGF0YS5UYWxrZXJJRDtcclxuXHRcdHRoaXMubV9Xb3JkID0ganNvbkRhdGEuV29yZDtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuIH0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUYWJsZXNcXFRhYmxlX1NjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztHQVFHOzs7Ozs7Ozs7Ozs7OztBQUVGO0lBQTBCLCtCQUFXO0lBTXJDO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBTkQsNEJBQTRCO1FBQ3JCLFVBQUksR0FBVSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3ZCLGFBQU8sR0FBVSxFQUFFLENBQUMsQ0FBQyxZQUFZOztJQUl4QyxDQUFDO0lBR00sK0JBQVMsR0FBaEIsVUFBaUIsUUFBWTtRQUM1QiwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUUvQixDQUFDO0lBRUQsa0JBQUM7QUFBRCxDQWxCQSxBQWtCQyxDQWxCeUIsV0FBVyxHQWtCcEMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICpcclxuICogQGF1dGhvciA6IGx1ZGluZ2d1b1xyXG4gKiBcclxuICogQHRpbWUgOiAyMDIxLTA3LTE1XHJcbiAqIFxyXG4gKiBAZnVuY3Rpb24gOiAgVGFibGVfU2NlbmUgY2xhc3MgZGVmaW5lXHJcbiAqXHJcbiAqL1xyXG4gXHJcbiBjbGFzcyBUYWJsZV9TY2VuZSBleHRlbmRzIFRhYmxlU3RydWN0e1xyXG4gXHJcblx0Ly8gZGVmaW5lIG1lbWJlciB2YWx1ZXMgaGVyZVxyXG5cdHB1YmxpYyBtX0lEOm51bWJlciA9IDA7XHQvL+WcuuaZr+e8luWPt1xyXG5cdHB1YmxpYyBtX1N0b3J5OnN0cmluZyA9IFwiXCI7XHQvL+WvueW6lOWJp+aDheaVheS6i+ihqOagvElEXHJcblx0XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHRwdWJsaWMgaW5pdFRhYmxlKGpzb25EYXRhOmFueSk6dm9pZHtcclxuXHRcdC8vIGluaXQgbWVtYmVyIHZhbHVlcyBoZXJlXHJcblx0XHR0aGlzLm1fSUQgPSBqc29uRGF0YS5JRDtcclxuXHRcdHRoaXMubV9TdG9yeSA9IGpzb25EYXRhLlN0b3J5O1xyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG4gfSJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUYWJsZXNcXFRhYmxlX0Vycm9yQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7R0FRRzs7Ozs7Ozs7Ozs7Ozs7QUFFRjtJQUE4QixtQ0FBVztJQU96QztRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQVBELDRCQUE0QjtRQUNyQixVQUFJLEdBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUN2QixpQkFBVyxHQUFVLEVBQUUsQ0FBQyxDQUFDLE1BQU07UUFDL0IsY0FBUSxHQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU07O0lBSWxDLENBQUM7SUFHTSxtQ0FBUyxHQUFoQixVQUFpQixRQUFZO1FBQzVCLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUVqQyxDQUFDO0lBRUQsc0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxDQXBCNkIsV0FBVyxHQW9CeEMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICpcclxuICogQGF1dGhvciA6IGx1ZGluZ2d1b1xyXG4gKiBcclxuICogQHRpbWUgOiAyMDIxLTA3LTE1XHJcbiAqIFxyXG4gKiBAZnVuY3Rpb24gOiAgVGFibGVfRXJyb3JDb2RlIGNsYXNzIGRlZmluZVxyXG4gKlxyXG4gKi9cclxuIFxyXG4gY2xhc3MgVGFibGVfRXJyb3JDb2RlIGV4dGVuZHMgVGFibGVTdHJ1Y3R7XHJcbiBcclxuXHQvLyBkZWZpbmUgbWVtYmVyIHZhbHVlcyBoZXJlXHJcblx0cHVibGljIG1fSUQ6bnVtYmVyID0gMDtcdC8v6ZSZ6K+vSURcclxuXHRwdWJsaWMgbV9FcnJvckluZm86c3RyaW5nID0gXCJcIjtcdC8v6ZSZ6K+v5L+h5oGvXHJcblx0cHVibGljIG1fVGlwc0lkOm51bWJlciA9IDA7XHQvL+aPkOekuuS/oeaBr1xyXG5cdFxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0cHVibGljIGluaXRUYWJsZShqc29uRGF0YTphbnkpOnZvaWR7XHJcblx0XHQvLyBpbml0IG1lbWJlciB2YWx1ZXMgaGVyZVxyXG5cdFx0dGhpcy5tX0lEID0ganNvbkRhdGEuSUQ7XHJcblx0XHR0aGlzLm1fRXJyb3JJbmZvID0ganNvbkRhdGEuRXJyb3JJbmZvO1xyXG5cdFx0dGhpcy5tX1RpcHNJZCA9IGpzb25EYXRhLlRpcHNJZDtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuIH0iXX0=
//------QC-SOURCE-SPLIT------
