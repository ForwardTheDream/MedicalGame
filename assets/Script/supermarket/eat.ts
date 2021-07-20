// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
declare interface Window {
    property1: number;
}
window["property1"]=1;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    
    @property(cc.Node)
    node:cc.Node=null;

    @property(cc.Button)
    button1:cc.Button=null;
    @property(cc.Button)
    button2:cc.Button=null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.button1.node.active=false;
        this.button2.node.active=false;
        this.label.node.active=false;
        this.node.runAction(cc.sequence(cc.delayTime(3),
        cc.callFunc(()=>{this.label.node.active=true,this.button1.node.active=true,this.button2.node.active=true})));

        this.button1.node.on("click",event=>cc.director.loadScene("Elevator"));
        this.button2.node.on("click",event=>cc.director.loadScene("HomeScene"));
    }

    // update (dt) {}
}
