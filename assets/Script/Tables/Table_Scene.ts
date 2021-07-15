/**
 *
 * @author : ludingguo
 * 
 * @time : 2021-07-15
 * 
 * @function :  Table_Scene class define
 *
 */
 
 class Table_Scene extends TableStruct{
 
	// define member values here
	public m_ID:number = 0;	//场景编号
	public m_Story:string = "";	//对应剧情故事表格ID
	
	public constructor(){
		super();
	}
	
	
	public initTable(jsonData:any):void{
		// init member values here
		this.m_ID = jsonData.ID;
		this.m_Story = jsonData.Story;
		
	}
	
 }