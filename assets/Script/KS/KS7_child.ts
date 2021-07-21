// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    textbox: cc.Node = null;

    @property(cc.Label)
    txt: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.node.runAction(
            cc.sequence(
                cc.callFunc(() => { this.textbox.active = false; }),
                cc.moveTo(3, new cc.Vec2(375, 155)),
                cc.delayTime(1),
                cc.callFunc(() => { this.textbox.active = true; }),
                cc.delayTime(1),
                cc.callFunc(() => { this.txt.string = "叔叔早上好。"; }),
                cc.delayTime(1),
                cc.callFunc(() => { console.log("执行挥手动作") })
            )
        )
    }

    // update (dt) {}
}
