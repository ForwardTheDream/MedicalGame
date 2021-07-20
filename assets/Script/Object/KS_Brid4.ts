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

    @property(cc.Node)
    Choice: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.node.runAction(
            cc.sequence(
                cc.callFunc(() => {
                    this.TextBox.active = false;
                }),
                cc.delayTime(1),
                cc.callFunc(() => {
                    this.Text.string = "那现在我们该怎么走呀？";
                    this.TextBox.active = true;
                })
            )
        );
        this.Choice.runAction(
            cc.sequence(
                cc.delayTime(2),

                cc.jumpTo(1, new cc.Vec2(304, 70), 50, 4)
            )
        );
    }

    // update (dt) {}
}
