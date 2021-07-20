// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;
  
    @property(cc.Label)
    label1: cc.Label = null;
    @property
    text: string = 'hello';

    @property(cc.Button)
    red:cc.Button=null;
    @property(cc.Button)
    yellow:cc.Button=null;
    @property(cc.Button)
    green:cc.Button=null;

    // LIFE-CYCLE CALLBACKS:

     
 
    start () {
        var rnumber=Math.floor(Math.random()*3);
   

        if (rnumber==1)
        {
         this.label.string=" 看，红灯，不能过马路。";
         this.red.node.on("click",event=>
         {this.label1.string="选对了,过马路要走斑马线，慢慢走，不能跑！";
         this.schedule(function(){cc.director.loadScene("Bus")},5)});
         this.yellow.node.on("click",event=>{this.label1.string="选错了，再选一次";});
         this.green.node.on("click",event=>{this.label1.string="选错了，再选一次";});
        }
        else if(rnumber==2)
        {this.label.string="这是黄灯，等一等。";
        this.yellow.node.on("click",event=>
        {this.label1.string="选对了,过马路要走斑马线，慢慢走，不能跑！";
        this.schedule(function(){cc.director.loadScene("Bus")},5)});
         this.red.node.on("click",event=>{this.label1.string="选错了，再选一次";});
         this.green.node.on("click",event=>{this.label1.string="选错了，再选一次";});
    }
        else if(rnumber==0)
        {this.label.string="绿灯了，可以过马路了。";
        this.green.node.on("click",event=>
        {this.label1.string="选对了,过马路要走斑马线，慢慢走，不能跑！";
        this.schedule(function(){cc.director.loadScene("Bus");},5)});
         this.yellow.node.on("click",event=>{this.label1.string="选错了，再选一次";});
         this.red.node.on("click",event=>{this.label1.string="选错了，再选一次";});
    }
    
    } 
}
