// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.node.runAction(
            cc.sequence(
                cc.delayTime(3),
                cc.callFunc(() => {
                    this.talk();
                }),
                cc.delayTime(2)
            )
        );
    }

    talk() {
        console.log("吃完饭，我们就去上幼儿园吧。");
    }

    // update (dt) {}
}