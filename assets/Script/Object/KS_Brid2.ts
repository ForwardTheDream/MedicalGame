// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseObject from "./BaseObject";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends BaseObject {
    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    @property(cc.Node)
    TextBox: cc.Node = null;

    @property(cc.Label)
    Text: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.TextBox.active = false;
    }

    checkRight() {
        this.TextBox.active = true;
        this.Text.string = "你真棒，谢谢你帮咱们按了电梯。";
        this.node.runAction(
            cc.sequence(
                cc.delayTime(2),
                cc.callFunc(() => {
                    cc.director.loadScene("KindergartenScene3");
                })
            )
        );
    }

    checkWrong() {}

    // update (dt) {}
}
