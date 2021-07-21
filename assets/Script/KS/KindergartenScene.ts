import { Label } from "./../../../creator.d";
import Bird from "../KS/KS_Bird";
import Player from "../KS/KS_Player";
import ChoosePanel from "../KS/KS_ChoosePanel";
import Lights from "../KS/KS_Lights";

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class KindergartenScene extends cc.Component {
    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = "hello";

    // LIFE-CYCLE CALLBACKS:

    @property(cc.Node)
    bird: cc.Node = null;

    @property(cc.Node)
    player: cc.Node = null;

    @property(cc.Node)
    jumpMan: cc.Node = null;

    @property(cc.Node)
    choosePanel_1: cc.Node = null;

    @property(cc.Node)
    choosePanel_4: cc.Node = null;

    @property(cc.Node)
    lights: cc.Node = null;

    @property(cc.Node)
    scene1: cc.Node = null;

    @property(cc.Node)
    scene2: cc.Node = null;

    @property(cc.Node)
    scene3: cc.Node = null;

    @property(cc.Node)
    scene4: cc.Node = null;

    @property(cc.Node)
    scene5: cc.Node = null;

    // onLoad () {}

    start() {
        this.hideAll();
        this.runScene_1();
    }

    hideAll() {
        this.scene1.active = false;
        this.scene2.active = false;
        this.scene3.active = false;
        this.scene4.active = false;
        this.scene5.active = false;
    }

    runScene_1() {
        this.scene1.active = true;
        this.bird.getComponent(Bird).distalk();
        this.node.runAction(
            cc.sequence(
                cc.callFunc(() => {
                    this.bird.getComponent(Bird).fly(440, 400, 3);
                    this.player.getComponent(Player).eating();
                }),
                cc.delayTime(3),
                cc.callFunc(() => {
                    this.bird
                        .getComponent(Bird)
                        .talk("吃完饭，我们就去上幼儿园吧。");
                }),
                cc.delayTime(2),
                cc.callFunc(() => {
                    this.choosePanel_1
                        .getComponent(ChoosePanel)
                        .show(440, 0, 2);
                })
            )
        );
    }

    runScene_2() {
        this.scene2.active = true;
        this.bird.getComponent(Bird).distalk();
        this.node.runAction(
            cc.sequence(
                cc.callFunc(() => {
                    this.bird.getComponent(Bird).fly(-440, 400, 0);
                }),
                cc.delayTime(0.1),
                cc.callFunc(() => {
                    this.bird.getComponent(Bird).fly(440, 400, 3);
                }),
                cc.delayTime(3),
                cc.callFunc(() => {
                    this.bird.getComponent(Bird).talk("按楼层①");
                })
            )
        );
    }

    runScene_3() {
        this.scene3.active = true;
        this.bird.getComponent(Bird).distalk();
        this.node.runAction(
            cc.sequence(
                cc.callFunc(() => {
                    this.bird.getComponent(Bird).fly(-440, 400, 0);
                }),
                cc.delayTime(0.1),
                cc.callFunc(() => {
                    this.bird.getComponent(Bird).fly(440, 400, 3);
                }),
                cc.delayTime(3),
                cc.callFunc(() => {
                    this.jumpMan.runAction(cc.moveTo(5, new cc.Vec2(420, 220)));
                }),
                cc.delayTime(5),
                cc.callFunc(() => {
                    cc.log("大家脸色都不好看");
                }),
                cc.delayTime(1),
                cc.callFunc(() => {
                    this.bird
                        .getComponent(Bird)
                        .talk("这种行为是不对的，大家有序排队才能出门。");
                }),
                cc.delayTime(3),
                cc.callFunc(() => {
                    this.runScene_4();
                })
            )
        );
    }

    runScene_4() {
        this.scene4.active = true;
        this.bird.getComponent(Bird).distalk();
        this.node.runAction(
            cc.sequence(
                cc.callFunc(() => {
                    this.bird.getComponent(Bird).fly(-440, 400, 0);
                }),
                cc.delayTime(0.1),
                cc.callFunc(() => {
                    this.lights.getComponent(Lights).light();
                    this.bird.getComponent(Bird).fly(440, 400, 3);
                }),
                cc.delayTime(3),
                cc.callFunc(() => {
                    this.choosePanel_4
                        .getComponent(ChoosePanel)
                        .show(440, 0, 2);
                })
            )
        );
        //this.node.runAction();
    }

    runScene_5() {}

    // update (dt) {}
}
