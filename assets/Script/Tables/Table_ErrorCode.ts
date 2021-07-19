/**
 *
 * @author : ludingguo
 * 
 * @time : 2021-07-19
 * 
 * @function :  Table_ErrorCode class define
 *
 */
import TableStruct from "./TableStruct";
  
export default class Table_ErrorCode extends TableStruct{
 
	// define member values here
	public m_ID:number = 0;	//错误ID
	public m_ErrorInfo:string = "";	//错误信息
	public m_TipsId:number = 0;	//提示信息
	
	public constructor(){
		super();
	}
	
	
	public initTable(jsonData:any):void{
		// init member values here
		this.m_ID = jsonData.ID;
		this.m_ErrorInfo = jsonData.ErrorInfo;
		this.m_TipsId = jsonData.TipsId;
		
	}
	
 }