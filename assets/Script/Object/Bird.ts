// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseObject from "./BaseObject"
import Table_Story from "../Tables/Table_Story";
import TableSystem from "../Tables/TableSystem";
import { DeviceUtils } from "../Utils/CommonUtils";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Bird extends BaseObject{

    @property(cc.Node)
    wordPanel:cc.Node = null;

    @property(cc.Label)
    word:cc.Label = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.talk(-1, ()=>{});
    }

    update (dt) {

    }



    talk (id:number, callback) {
        if (id == -1) {
            this.wordPanel.active = false;
            return;
        }

        let tabStory:Table_Story = TableSystem.getInstance().getStoryById(id);
        if (tabStory != null) {
            this.node.runAction(
                cc.sequence(
                    cc.callFunc(() => {
                        if (tabStory.m_IsCallBack == 1) {
                            this.wordPanel.active = false;
                            this.word.string = "";

                            this.node.stopAllActions();

                            if (typeof callback == "function") {
                                callback(tabStory);
                            }
                        } else {
                            this.wordPanel.active = true;
                            this.word.string = tabStory.m_Word;
                        }
                    }),
                    cc.delayTime(tabStory.m_Time),
                    cc.callFunc(() => {
                        this.wordPanel.active = false;
                        this.word.string = "";
                    }),
                    cc.callFunc(() => {
                        if (tabStory.m_Next == -1) {
                            if (tabStory.m_IsBirdFly == 1){
                                this.node.runAction(
                                    cc.moveTo(5, new cc.Vec2(DeviceUtils.getVisibleSize().width + 200, this.node.position.y+100))
                                )
                            }
                            if (typeof callback == "function") {
                                callback();
                            }
                            return;
                        }

                        this.talk(tabStory.m_Next, callback);
                    })
                )
            )
        }
        
    }
}
