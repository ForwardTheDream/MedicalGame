// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseObject from "./BaseObject"
const {ccclass, property} = cc._decorator;

@ccclass
export default class Bird extends BaseObject{

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.node.runAction(
            cc.sequence(
                cc.moveTo(3, new cc.Vec2(200, 400)),
                cc.delayTime(2),
                cc.callFunc(() => {
                    // ...
                    this.talk();
                })
            )
        );
    }

    update (dt) {

    }

    talk () {
        console.log("小鸟开始说话了");
    }
}
