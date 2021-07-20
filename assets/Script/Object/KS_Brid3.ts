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

    // LIFE-CYCLE CALLBACKS:

    @property(cc.Node)
    TextBox: cc.Node = null;

    @property(cc.Label)
    Text: cc.Label = null;

    // onLoad () {}

    start() {
        this.TextBox.active = false;
        this.node.runAction(
            cc.sequence(
                cc.delayTime(7),

                cc.callFunc(() => {
                    this.Text.string =
                        "这种行为是不对的，\n大家有序排队才能出门。";
                    this.TextBox.active = true;
                }),
                cc.delayTime(3),
                cc.callFunc(() => {
                    cc.director.loadScene("KindergartenScene4");
                })
            )
        );
    }

    // update (dt) {}
}
