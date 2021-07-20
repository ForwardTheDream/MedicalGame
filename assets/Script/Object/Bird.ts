// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseObject from "./BaseObject"
import Table_Story from "../Tables/Table_Story";
import TableSystem from "../Tables/TableSystem";
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
        this.talk(-1);

        // let tabStory:Table_Story = TableSystem.getInstance().getStoryById(1);
        // if (tabStory != null) {
        //     console.log("小鸟说的话：" + tabStory.m_Word);
        // } else {
        //     console.log("文件读取失败！" );
        // }
        console.log("小鸟开始运动");
        this.node.runAction(
            cc.sequence(
                cc.moveTo(3, new cc.Vec2(200, 400)),
                cc.delayTime(2),
                cc.callFunc(() => {
                    // ...
                    console.log("小鸟开始说话");
                    this.talk(1);
                })
            )
        );
    }

    update (dt) {

    }

    talk (id:number) {
        if (id == -1) {
            this.wordPanel.active = false;
            return;
        }

        let tabStory:Table_Story = TableSystem.getInstance().getStoryById(id);
        if (tabStory != null) {
            this.node.runAction(
                cc.sequence(
                    cc.callFunc(() => {
                        this.wordPanel.active = true;
                        this.word.string = tabStory.m_Word;
                    }),
                    cc.delayTime(tabStory.m_Time),
                    cc.callFunc(() => {
                        this.wordPanel.active = false;
                        this.word.string = "";
                    }),
                    cc.callFunc(() => {
                        if (tabStory.m_Next == -1) {
                            return;
                        }

                        this.talk(tabStory.m_Next);
                    })
                )
            )
        }
        
    }
}
