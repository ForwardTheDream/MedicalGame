// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChoosePanel extends cc.Component {

    @property(cc.Label)
    title: cc.Label = null;

    @property(cc.Label)
    description:cc.Label = null;

    @property(cc.Node)
    btnCancel:cc.Node = null;

    @property(cc.Node)
    btnOK:cc.Node = null;

    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.node.opacity=0;

        this.node.runAction(cc.sequence(cc.delayTime(3),
        cc.callFunc(()=>this.node.opacity=255)));
    }

    // update (dt) {}
   
    onOK(){
        
            cc.director.loadScene("Elevator");
        
    }

    onCancel(){
         
        cc.director.loadScene("HomeScene");
        
    }
}
