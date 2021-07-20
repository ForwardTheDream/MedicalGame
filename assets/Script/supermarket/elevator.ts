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

    @property
    text: string = 'hello';

    @property(cc.Button)
    button:cc.Button=null;
    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        
        this.button.node.on("click",event=>{(this.label.string="你真棒，谢谢你帮咱们按了电梯。");
        cc.director.loadScene("Road");});

    }

    // update (dt) {}
}
