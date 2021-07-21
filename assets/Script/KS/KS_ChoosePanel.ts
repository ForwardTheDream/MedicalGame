import { Vec2 } from "./../../../creator.d";
import KindergartenScene from "./KindergartenScene";
import Lights from "./KS_Lights";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class ChoosePanel extends cc.Component {
    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    @property(cc.Node)
    thisScene: cc.Node = null;

    @property(cc.Node)
    main: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {}

    show(x: number, y: number, time: number) {
        this.node.runAction(
            cc.sequence(
                cc.jumpTo(time, new cc.Vec2(x, y), 50, 4),
                cc.delayTime(time)
            )
        );
    }

    scene_1_OK() {
        this.thisScene.active = false;
        this.main.getComponent(KindergartenScene).runScene_2();
    }

    scene_1_Cancel() {
        cc.director.loadScene("HomeScene");
    }

    scene_2_Right() {
        this.thisScene.active = false;
        this.main.getComponent(KindergartenScene).runScene_3();
    }

    scene_2_Wrong() {}

    scene_3_Check(event, customEventData) {
        let light = cc.find("KindergartenScene/Scene4/Lights");
        if (light.getComponent(Lights).btnCheck(event, customEventData))
            this.main.getComponent(KindergartenScene).runScene_5();
    }

    // update (dt) {}
}
