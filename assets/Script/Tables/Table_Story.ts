/**
 *
 * @author : ludingguo
 * 
 * @time : 2021-07-15
 * 
 * @function :  Table_Story class define
 *
 */
 
 class Table_Story extends TableStruct{
 
	// define member values here
	public m_ID:number = 0;	//剧情ID
	public m_Type:number = 0;	//引导语类型（1：NPC说话，2：引导用户说话）
	public m_TalkerID:number = 0;	//当前说话者的编号，0：表示用户说话
	public m_Word:string = "";	//如果是NPC，则展示该语句，如果是用户，则对比是否说了这句话
	
	public constructor(){
		super();
	}
	
	
	public initTable(jsonData:any):void{
		// init member values here
		this.m_ID = jsonData.ID;
		this.m_Type = jsonData.Type;
		this.m_TalkerID = jsonData.TalkerID;
		this.m_Word = jsonData.Word;
		
	}
	
 }