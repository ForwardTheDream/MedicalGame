
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVGFibGVzL1RhYmxlU3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztHQVFHO0FBQ0g7SUFpQkk7UUFJQSxpR0FBaUc7UUFDekYsb0JBQWUsR0FBMkIsSUFBSSxLQUFLLEVBQW1CLENBQUM7UUFDMUUsZ0JBQVcsR0FBdUIsSUFBSSxLQUFLLEVBQWUsQ0FBQztRQUMzRCxnQkFBVyxHQUF1QixJQUFJLEtBQUssRUFBZSxDQUFDO0lBTmhFLENBQUM7SUFmYSx1QkFBVyxHQUF6QjtRQUNJLElBQUcsV0FBVyxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDOUIsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzFDLHFEQUFxRDtZQUNyRCxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQy9DLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUV6QixxREFBcUQ7U0FDeEQ7UUFFRCxPQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQVlELHNGQUFzRjtJQUNsRixtQ0FBYSxHQUFwQjtRQUNDLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDM0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxlQUFlLEdBQW9CLElBQUksZUFBZSxFQUFFLENBQUM7WUFDN0QsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ25DO0lBQ0YsQ0FBQztJQUVPLGtDQUFZLEdBQXBCLFVBQXFCLEtBQXNCO1FBQzFDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRCxJQUFJLFNBQVMsR0FBbUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFHLFNBQVMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksRUFBQztnQkFDL0IsT0FBTzthQUNQO1NBQ0Q7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sa0NBQVksR0FBbkIsVUFBb0IsS0FBWTtRQUMvQixJQUFJLEtBQUssR0FBbUIsSUFBSSxDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFDO1lBQ3ZDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRU0sc0NBQWdCLEdBQXZCLFVBQXdCLEVBQVM7UUFDaEMsSUFBSSxLQUFLLEdBQW1CLElBQUksQ0FBQztRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDbEQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLGFBQWEsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFDO2dCQUM1QixLQUFLLEdBQUcsYUFBYSxDQUFDO2FBQ3RCO1NBQ0Q7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFTSx1Q0FBaUIsR0FBeEI7UUFDQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzRkFBc0Y7SUFDL0UsK0JBQVMsR0FBaEI7UUFDQyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksV0FBVyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQ2pELFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzQjtJQUNGLENBQUM7SUFFTyw4QkFBUSxHQUFoQixVQUFpQixLQUFrQjtRQUNsQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxTQUFTLEdBQWUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFHLFNBQVMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksRUFBQztnQkFDL0IsT0FBTzthQUNQO1NBQ0Q7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sOEJBQVEsR0FBZixVQUFnQixLQUFZO1FBQzNCLElBQUksS0FBSyxHQUFlLElBQUksQ0FBQztRQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBQztZQUNuQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVNLGtDQUFZLEdBQW5CLFVBQW9CLEVBQVM7UUFDNUIsSUFBSSxLQUFLLEdBQWUsSUFBSSxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUM5QyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksYUFBYSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUM7Z0JBQzVCLEtBQUssR0FBRyxhQUFhLENBQUM7YUFDdEI7U0FDRDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVNLG1DQUFhLEdBQXBCO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0ZBQXNGO0lBQy9FLCtCQUFTLEdBQWhCO1FBQ0MsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXBDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLFdBQVcsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNqRCxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0I7SUFDRixDQUFDO0lBRU8sOEJBQVEsR0FBaEIsVUFBaUIsS0FBa0I7UUFDbEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9DLElBQUksU0FBUyxHQUFlLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBRyxTQUFTLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUM7Z0JBQy9CLE9BQU87YUFDUDtTQUNEO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLDhCQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUMzQixJQUFJLEtBQUssR0FBZSxJQUFJLENBQUM7UUFDN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUM7WUFDbkMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFTSxrQ0FBWSxHQUFuQixVQUFvQixFQUFTO1FBQzVCLElBQUksS0FBSyxHQUFlLElBQUksQ0FBQztRQUM3QixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDOUMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLGFBQWEsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFDO2dCQUM1QixLQUFLLEdBQUcsYUFBYSxDQUFDO2FBQ3RCO1NBQ0Q7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFTSxtQ0FBYSxHQUFwQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQXBLZ0IscUJBQVMsR0FBZ0IsSUFBSSxDQUFDO0lBeUtoRCxrQkFBQztDQTNLRCxBQTJLQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogQGF1dGhvciA6IGx1ZGluZ2d1b1xuICogXG4gKiBAdGltZSA6IDIwMjEtMDctMTVcbiAqIFxuICogQGZ1bmN0aW9uIDogVGFibGUgc3RydWN0IG1hbmFnZXJcbiAqXG4gKi9cbmNsYXNzIFRhYmxlU3lzdGVtIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlOiBUYWJsZVN5c3RlbSA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBUYWJsZVN5c3RlbSB7XG4gICAgICAgIGlmKFRhYmxlU3lzdGVtLl9pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBUYWJsZVN5c3RlbS5faW5zdGFuY2UgPSBuZXcgVGFibGVTeXN0ZW0oKTtcbiAgICAgICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICBUYWJsZVN5c3RlbS5faW5zdGFuY2UubG9hZEVycm9yQ29kZSgpO1xuXHRcdFx0VGFibGVTeXN0ZW0uX2luc3RhbmNlLmxvYWRTY2VuZSgpO1xuXHRcdFx0VGFibGVTeXN0ZW0uX2luc3RhbmNlLmxvYWRTdG9yeSgpO1xuXHRcdFx0XG4gICAgICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFRhYmxlU3lzdGVtLl9pbnN0YW5jZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHByaXZhdGUgbV9saXN0RXJyb3JDb2RlOiBBcnJheTxUYWJsZV9FcnJvckNvZGU+ID0gbmV3IEFycmF5PFRhYmxlX0Vycm9yQ29kZT4oKTtcblx0cHJpdmF0ZSBtX2xpc3RTY2VuZTogQXJyYXk8VGFibGVfU2NlbmU+ID0gbmV3IEFycmF5PFRhYmxlX1NjZW5lPigpO1xuXHRwcml2YXRlIG1fbGlzdFN0b3J5OiBBcnJheTxUYWJsZV9TdG9yeT4gPSBuZXcgQXJyYXk8VGFibGVfU3Rvcnk+KCk7XG5cdFxuICAgIFxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdHB1YmxpYyBsb2FkRXJyb3JDb2RlKCk6IHZvaWQge1xuXHRcdHZhciB0YWJsZVR4dCA9IFJFUy5nZXRSZXMoXCJFcnJvckNvZGVfdHh0XCIpO1xuXHRcdHZhciBqc29uRGF0YSA9IEpTT04ucGFyc2UodGFibGVUeHQpO1xuXG5cdFx0Zm9yKHZhciBpID0gMDtpIDwganNvbkRhdGEubGVuZ3RoO2krKykge1xuXHRcdFx0dmFyIGpzRGF0YSA9IGpzb25EYXRhW2ldO1xuXHRcdFx0dmFyIHRhYmxlX0Vycm9yQ29kZTogVGFibGVfRXJyb3JDb2RlID0gbmV3IFRhYmxlX0Vycm9yQ29kZSgpO1xuXHRcdFx0dGFibGVfRXJyb3JDb2RlLmluaXRUYWJsZShqc0RhdGEpO1xuXHRcdFx0dGhpcy5hZGRFcnJvckNvZGUodGFibGVfRXJyb3JDb2RlKTtcblx0XHR9XG5cdH1cblx0XHRcblx0cHJpdmF0ZSBhZGRFcnJvckNvZGUodGFibGU6IFRhYmxlX0Vycm9yQ29kZSk6dm9pZHtcblx0XHRmb3IodmFyIGkgPSAwO2kgPCB0aGlzLm1fbGlzdEVycm9yQ29kZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHRhYmxlSXRlbTpUYWJsZV9FcnJvckNvZGUgPSB0aGlzLm1fbGlzdEVycm9yQ29kZVtpXTtcblx0XHRcdGlmKHRhYmxlSXRlbS5tX0lEID09IHRhYmxlLm1fSUQpe1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMubV9saXN0RXJyb3JDb2RlLnB1c2godGFibGUpO1xuXHR9XG5cblx0cHVibGljIGdldEVycm9yQ29kZShpbmRleDpudW1iZXIpOlRhYmxlX0Vycm9yQ29kZXtcblx0XHR2YXIgdGFibGU6VGFibGVfRXJyb3JDb2RlID0gbnVsbDtcblx0XHRpZiAoaW5kZXggPCB0aGlzLm1fbGlzdEVycm9yQ29kZS5sZW5ndGgpe1xuXHRcdFx0dGFibGUgPSB0aGlzLm1fbGlzdEVycm9yQ29kZVtpbmRleF07XG5cdFx0fVxuXHRcdHJldHVybiB0YWJsZTtcblx0fVxuXHRcblx0cHVibGljIGdldEVycm9yQ29kZUJ5SWQoaWQ6bnVtYmVyKTpUYWJsZV9FcnJvckNvZGV7XG5cdFx0dmFyIHRhYmxlOlRhYmxlX0Vycm9yQ29kZSA9IG51bGw7XG5cdFx0Zm9yICh2YXIgaT0wOyBpIDwgdGhpcy5tX2xpc3RFcnJvckNvZGUubGVuZ3RoOyBpKyspe1xuXHRcdFx0dmFyIHRhYmxlVGVtcGxhdGUgPSB0aGlzLm1fbGlzdEVycm9yQ29kZVtpXTtcblx0XHRcdGlmICh0YWJsZVRlbXBsYXRlLm1fSUQgPT0gaWQpe1xuXHRcdFx0XHR0YWJsZSA9IHRhYmxlVGVtcGxhdGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0YWJsZTtcblx0fVxuXG5cdHB1YmxpYyBnZXRFcnJvckNvZGVDb3VudCgpOm51bWJlcntcblx0XHRyZXR1cm4gdGhpcy5tX2xpc3RFcnJvckNvZGUubGVuZ3RoO1xuXHR9XG5cblx0Ly89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0cHVibGljIGxvYWRTY2VuZSgpOiB2b2lkIHtcblx0XHR2YXIgdGFibGVUeHQgPSBSRVMuZ2V0UmVzKFwiU2NlbmVfdHh0XCIpO1xuXHRcdHZhciBqc29uRGF0YSA9IEpTT04ucGFyc2UodGFibGVUeHQpO1xuXG5cdFx0Zm9yKHZhciBpID0gMDtpIDwganNvbkRhdGEubGVuZ3RoO2krKykge1xuXHRcdFx0dmFyIGpzRGF0YSA9IGpzb25EYXRhW2ldO1xuXHRcdFx0dmFyIHRhYmxlX1NjZW5lOiBUYWJsZV9TY2VuZSA9IG5ldyBUYWJsZV9TY2VuZSgpO1xuXHRcdFx0dGFibGVfU2NlbmUuaW5pdFRhYmxlKGpzRGF0YSk7XG5cdFx0XHR0aGlzLmFkZFNjZW5lKHRhYmxlX1NjZW5lKTtcblx0XHR9XG5cdH1cblx0XHRcblx0cHJpdmF0ZSBhZGRTY2VuZSh0YWJsZTogVGFibGVfU2NlbmUpOnZvaWR7XG5cdFx0Zm9yKHZhciBpID0gMDtpIDwgdGhpcy5tX2xpc3RTY2VuZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHRhYmxlSXRlbTpUYWJsZV9TY2VuZSA9IHRoaXMubV9saXN0U2NlbmVbaV07XG5cdFx0XHRpZih0YWJsZUl0ZW0ubV9JRCA9PSB0YWJsZS5tX0lEKXtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHR0aGlzLm1fbGlzdFNjZW5lLnB1c2godGFibGUpO1xuXHR9XG5cblx0cHVibGljIGdldFNjZW5lKGluZGV4Om51bWJlcik6VGFibGVfU2NlbmV7XG5cdFx0dmFyIHRhYmxlOlRhYmxlX1NjZW5lID0gbnVsbDtcblx0XHRpZiAoaW5kZXggPCB0aGlzLm1fbGlzdFNjZW5lLmxlbmd0aCl7XG5cdFx0XHR0YWJsZSA9IHRoaXMubV9saXN0U2NlbmVbaW5kZXhdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGFibGU7XG5cdH1cblx0XG5cdHB1YmxpYyBnZXRTY2VuZUJ5SWQoaWQ6bnVtYmVyKTpUYWJsZV9TY2VuZXtcblx0XHR2YXIgdGFibGU6VGFibGVfU2NlbmUgPSBudWxsO1xuXHRcdGZvciAodmFyIGk9MDsgaSA8IHRoaXMubV9saXN0U2NlbmUubGVuZ3RoOyBpKyspe1xuXHRcdFx0dmFyIHRhYmxlVGVtcGxhdGUgPSB0aGlzLm1fbGlzdFNjZW5lW2ldO1xuXHRcdFx0aWYgKHRhYmxlVGVtcGxhdGUubV9JRCA9PSBpZCl7XG5cdFx0XHRcdHRhYmxlID0gdGFibGVUZW1wbGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRhYmxlO1xuXHR9XG5cblx0cHVibGljIGdldFNjZW5lQ291bnQoKTpudW1iZXJ7XG5cdFx0cmV0dXJuIHRoaXMubV9saXN0U2NlbmUubGVuZ3RoO1xuXHR9XG5cblx0Ly89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0cHVibGljIGxvYWRTdG9yeSgpOiB2b2lkIHtcblx0XHR2YXIgdGFibGVUeHQgPSBSRVMuZ2V0UmVzKFwiU3RvcnlfdHh0XCIpO1xuXHRcdHZhciBqc29uRGF0YSA9IEpTT04ucGFyc2UodGFibGVUeHQpO1xuXG5cdFx0Zm9yKHZhciBpID0gMDtpIDwganNvbkRhdGEubGVuZ3RoO2krKykge1xuXHRcdFx0dmFyIGpzRGF0YSA9IGpzb25EYXRhW2ldO1xuXHRcdFx0dmFyIHRhYmxlX1N0b3J5OiBUYWJsZV9TdG9yeSA9IG5ldyBUYWJsZV9TdG9yeSgpO1xuXHRcdFx0dGFibGVfU3RvcnkuaW5pdFRhYmxlKGpzRGF0YSk7XG5cdFx0XHR0aGlzLmFkZFN0b3J5KHRhYmxlX1N0b3J5KTtcblx0XHR9XG5cdH1cblx0XHRcblx0cHJpdmF0ZSBhZGRTdG9yeSh0YWJsZTogVGFibGVfU3RvcnkpOnZvaWR7XG5cdFx0Zm9yKHZhciBpID0gMDtpIDwgdGhpcy5tX2xpc3RTdG9yeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHRhYmxlSXRlbTpUYWJsZV9TdG9yeSA9IHRoaXMubV9saXN0U3RvcnlbaV07XG5cdFx0XHRpZih0YWJsZUl0ZW0ubV9JRCA9PSB0YWJsZS5tX0lEKXtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHR0aGlzLm1fbGlzdFN0b3J5LnB1c2godGFibGUpO1xuXHR9XG5cblx0cHVibGljIGdldFN0b3J5KGluZGV4Om51bWJlcik6VGFibGVfU3Rvcnl7XG5cdFx0dmFyIHRhYmxlOlRhYmxlX1N0b3J5ID0gbnVsbDtcblx0XHRpZiAoaW5kZXggPCB0aGlzLm1fbGlzdFN0b3J5Lmxlbmd0aCl7XG5cdFx0XHR0YWJsZSA9IHRoaXMubV9saXN0U3RvcnlbaW5kZXhdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGFibGU7XG5cdH1cblx0XG5cdHB1YmxpYyBnZXRTdG9yeUJ5SWQoaWQ6bnVtYmVyKTpUYWJsZV9TdG9yeXtcblx0XHR2YXIgdGFibGU6VGFibGVfU3RvcnkgPSBudWxsO1xuXHRcdGZvciAodmFyIGk9MDsgaSA8IHRoaXMubV9saXN0U3RvcnkubGVuZ3RoOyBpKyspe1xuXHRcdFx0dmFyIHRhYmxlVGVtcGxhdGUgPSB0aGlzLm1fbGlzdFN0b3J5W2ldO1xuXHRcdFx0aWYgKHRhYmxlVGVtcGxhdGUubV9JRCA9PSBpZCl7XG5cdFx0XHRcdHRhYmxlID0gdGFibGVUZW1wbGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRhYmxlO1xuXHR9XG5cblx0cHVibGljIGdldFN0b3J5Q291bnQoKTpudW1iZXJ7XG5cdFx0cmV0dXJuIHRoaXMubV9saXN0U3RvcnkubGVuZ3RoO1xuXHR9XG5cblx0XG4gICAgXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxufSJdfQ==