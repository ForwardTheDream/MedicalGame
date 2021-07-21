import { Vec2 } from "./../../../creator.d";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseObject from "../Object/BaseObject";
import Table_Story from "../Tables/Table_Story";
import TableSystem from "../Tables/TableSystem";
import { DeviceUtils } from "../Utils/CommonUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Bird extends BaseObject {
    // @property(cc.Label)
    // label: cc.Label = null;

    @property(cc.Node)
    wordPanel: cc.Node = null;

    @property(cc.Label)
    word: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    //onLoad() {}

    start() {}

    fly(x: number, y: number, time: number) {
        this.node.runAction(cc.moveTo(time, new cc.Vec2(x, y)));
    }

    distalk() {
        this.wordPanel.active = false;
    }

    talk(str: string = "") {
        this.word.string = str;
        this.wordPanel.active = true;
    }

    // update (dt) {}
}
