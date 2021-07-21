// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {
    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {}

    walk(x: number, y: number, time: number) {
        this.node.runAction(
            cc.sequence(
                cc.moveTo(time, new cc.Vec2(x, y)),

                cc.delayTime(time)
            )
        );
    }

    eating() {
        console.log("播放吃饭动画，持续3s。");
    }

    // update (dt) {}
}
