import { GradientRange } from "./../../../creator.d";
import { CommonUtils } from "../Utils/CommonUtils";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Lights extends cc.Component {
    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = "hello";

    @property(cc.Node)
    red: cc.Node = null;

    @property(cc.Node)
    yellow: cc.Node = null;

    @property(cc.Node)
    green: cc.Node = null;

    @property(cc.Node)
    TextBox: cc.Node = null;

    @property(cc.Label)
    Text: cc.Label = null;

    private type;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.red.active = false;
        this.yellow.active = false;
        this.green.active = false;
    }

    light() {
        this.type = CommonUtils.getRandomRange(1, 4);
        switch (this.type) {
            case 1:
                this.red.active = true;
                this.Text.string = "看，红灯，不能过马路。";
                break;
            case 2:
                this.yellow.active = true;
                this.Text.string = "这是黄灯，等一等。";
                break;
            case 3:
                this.green.active = true;
                this.Text.string = "绿灯了，可以过马路了。";
                break;
        }
    }

    btnCheck(event, customEventData) {
        switch (this.type) {
            case 1:
                if (customEventData == 2) return this.checkSuccess();
                else return this.checkFalse("现在是红灯哦，不可以过！");
            case 2:
                if (customEventData == 4) return this.checkSuccess();
                else return this.checkFalse("现在是黄灯，需要再等等！");
            case 3:
                if (customEventData == 5) return this.checkSuccess();
                else return this.checkFalse("现在是绿灯，是可以过的！");
        }
    }

    checkSuccess() {
        this.node.runAction(
            cc.sequence(
                cc.callFunc(() => {
                    this.Text.string = "答对啦，你真棒！";
                }),
                cc.delayTime(2)
            )
        );
        return true;
    }

    checkFalse(str) {
        let temp = this.Text.string;
        this.node.runAction(
            cc.sequence(
                cc.callFunc(() => {
                    this.Text.string = str;
                }),
                cc.delayTime(2),
                cc.callFunc(() => {
                    this.Text.string = temp;
                })
            )
        );
        return false;
    }
    // update (dt) {}
}
