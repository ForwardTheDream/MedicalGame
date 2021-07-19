"use strict";
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