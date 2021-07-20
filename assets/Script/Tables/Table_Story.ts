/**
 *
 * @author : ludingguo
 * 
 * @time : 2021-07-20
 * 
 * @function :  Table_Story class define
 *
 */
import TableStruct from "./TableStruct";

export default class Table_Story extends TableStruct{
 
	// define member values here
	public m_ID:number = 0;	//剧情ID
	public m_Next:number = 0;	//下一个ID
	public m_TalkerID:number = 0;	//当前说话者的编号，0：表示用户说话
	public m_Word:string = "";	//如果是NPC，则展示该语句，如果是用户，则对比是否说了这句话
	public m_Time:number = 0;	//该对话框持续时间
	public m_IsOK:number = 0;	//是否出现“确认”按钮
	public m_IsCancel:string = "";	//是否出现“取消”按钮
	
	public constructor(){
		super();
	}
	
	
	public initTable(jsonData:any):void{
		// init member values here
		this.m_ID = jsonData.ID;
		this.m_Next = jsonData.Next;
		this.m_TalkerID = jsonData.TalkerID;
		this.m_Word = jsonData.Word;
		this.m_Time = jsonData.Time;
		this.m_IsOK = jsonData.IsOK;
		this.m_IsCancel = jsonData.IsCancel;
		
	}
	
 }