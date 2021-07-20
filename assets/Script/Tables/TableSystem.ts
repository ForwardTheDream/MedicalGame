/**
 *
 * @author : ludingguo
 * 
 * @time : 2021-07-20
 * 
 * @function : Table struct manager
 *
 */
import Table_ErrorCode from "./Table_ErrorCode";
import Table_Scene from "./Table_Scene";
import Table_Story from "./Table_Story";


export default class TableSystem {

    public static _instance: TableSystem = null;
    public static getInstance(): TableSystem {
        if(TableSystem._instance == null) {
            TableSystem._instance = new TableSystem();
            //===================================================
            TableSystem._instance.loadErrorCode();
			TableSystem._instance.loadScene();
			TableSystem._instance.loadStory();
			
            //===================================================
        }

        return TableSystem._instance;
    }
    
    public constructor() {
    }


    //===============================================================================================
    private m_listErrorCode: Array<Table_ErrorCode> = new Array<Table_ErrorCode>();
	private m_listScene: Array<Table_Scene> = new Array<Table_Scene>();
	private m_listStory: Array<Table_Story> = new Array<Table_Story>();
	
    
    //====================================================================================
	public loadErrorCode(): void {
		cc.loader.loadRes("Tables/ErrorCode", (error, tableTxt)=>{
			if (error) {
				cc.error(error.message);
				return;
			}

			var jsonData = JSON.parse(tableTxt);

			for(var i = 0;i < jsonData.length;i++) {
				var jsData = jsonData[i];
				var table_ErrorCode: Table_ErrorCode = new Table_ErrorCode();
				table_ErrorCode.initTable(jsData);
				this.addErrorCode(table_ErrorCode);
			}
		});
		
	}
		
	private addErrorCode(table: Table_ErrorCode):void{
		for(var i = 0;i < this.m_listErrorCode.length; i++) {
			var tableItem:Table_ErrorCode = this.m_listErrorCode[i];
			if(tableItem.m_ID == table.m_ID){
				return;
			}
		}
		
		this.m_listErrorCode.push(table);
	}

	public getErrorCode(index:number):Table_ErrorCode{
		var table:Table_ErrorCode = null;
		if (index < this.m_listErrorCode.length){
			table = this.m_listErrorCode[index];
		}
		return table;
	}
	
	public getErrorCodeById(id:number):Table_ErrorCode{
		var table:Table_ErrorCode = null;
		for (var i=0; i < this.m_listErrorCode.length; i++){
			var tableTemplate = this.m_listErrorCode[i];
			if (tableTemplate.m_ID == id){
				table = tableTemplate;
			}
		}
		return table;
	}

	public getErrorCodeCount():number{
		return this.m_listErrorCode.length;
	}

	//====================================================================================
	public loadScene(): void {
		cc.loader.loadRes("Tables/Scene", (error, tableTxt) => {
			if (error) {
				cc.error(error.message);
				return;
			}
			var jsonData = JSON.parse(tableTxt);

			for(var i = 0;i < jsonData.length;i++) {
				var jsData = jsonData[i];
				var table_Scene: Table_Scene = new Table_Scene();
				table_Scene.initTable(jsData);
				this.addScene(table_Scene);
			}
		});
	}
		
	private addScene(table: Table_Scene):void{
		for(var i = 0;i < this.m_listScene.length; i++) {
			var tableItem:Table_Scene = this.m_listScene[i];
			if(tableItem.m_ID == table.m_ID){
				return;
			}
		}
		
		this.m_listScene.push(table);
	}

	public getScene(index:number):Table_Scene{
		var table:Table_Scene = null;
		if (index < this.m_listScene.length){
			table = this.m_listScene[index];
		}
		return table;
	}
	
	public getSceneById(id:number):Table_Scene{
		var table:Table_Scene = null;
		for (var i=0; i < this.m_listScene.length; i++){
			var tableTemplate = this.m_listScene[i];
			if (tableTemplate.m_ID == id){
				table = tableTemplate;
			}
		}
		return table;
	}

	public getSceneCount():number{
		return this.m_listScene.length;
	}

	//====================================================================================
	public loadStory(): void {
		cc.loader.loadRes("Tables/Story", (error, tableTxt) => {
			if (error) {
				cc.error(error.message);
				return;
			}
			var jsonData = JSON.parse(tableTxt);

			for(var i = 0;i < jsonData.length;i++) {
				var jsData = jsonData[i];
				var table_Story: Table_Story = new Table_Story();
				table_Story.initTable(jsData);
				this.addStory(table_Story);
			}
		});
	}
		
	private addStory(table: Table_Story):void{
		for(var i = 0;i < this.m_listStory.length; i++) {
			var tableItem:Table_Story = this.m_listStory[i];
			if(tableItem.m_ID == table.m_ID){
				return;
			}
		}
		
		this.m_listStory.push(table);
	}

	public getStory(index:number):Table_Story{
		var table:Table_Story = null;
		if (index < this.m_listStory.length){
			table = this.m_listStory[index];
		}
		return table;
	}
	
	public getStoryById(id:number):Table_Story{
		var table:Table_Story = null;
		for (var i=0; i < this.m_listStory.length; i++){
			var tableTemplate = this.m_listStory[i];
			if (tableTemplate.m_ID == id){
				table = tableTemplate;
			}
		}
		return table;
	}

	public getStoryCount():number{
		return this.m_listStory.length;
	}

	
    
    //===============================================================================================
}