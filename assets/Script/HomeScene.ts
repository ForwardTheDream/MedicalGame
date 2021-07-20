import TableSystem from "./Tables/TableSystem";
import { DeviceUtils, ConstDefine } from "./Utils/CommonUtils";
import Bird from "./Object/Bird";
import Table_Story from "./Tables/Table_Story";
import ChoosePanel from "./Prefabs/ChoosePanel";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HomeScene extends cc.Component {

    @property(cc.Node)
    loginPanel:cc.Node = null;

    @property(cc.EditBox)
    accountEdit:cc.EditBox = null;

    @property(cc.EditBox)
    passwordEdit:cc.EditBox = null;

    @property(cc.Node)
    bird:cc.Node = null;

    @property(cc.Node)
    showPanel:cc.Node = null;

    isStart:boolean = false;
    isOperate:boolean = false;
    start () {
        // let size:cc.Size = DeviceUtils.getVisibleSize();
        TableSystem.getInstance();

        this.runBirdLogic();
    }

    onRegister() {
        if (!this.isStart || !this.isOperate) {
            return;
        }

        if (this.accountEdit.string == "" || this.passwordEdit.string == "") {
            cc.log("账号或密码为空！")
            return;
        }

        let that = this;
        let url = ConstDefine.SERVER_IP + ConstDefine.LOGIN_SERVER_LET;
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                console.log(response);

                let loginResult = JSON.parse(response);
                if (loginResult.state == "true") {
                    that.loginFinish();
                }
            }
        };

        let data = {
            operationCode:1,
            userName:this.accountEdit.string,
            password:this.passwordEdit.string
        }
        xhr.open("POST", url, true);
        xhr.send(JSON.stringify(data));
    }

    onLogin() {
        if (!this.isStart || !this.isOperate) {
            return;
        }

        // cc.director.loadScene("KindergartenScene");
        if (this.accountEdit.string == "" || this.passwordEdit.string == "") {
            cc.log("账号或密码为空！")
            return;
        }
        
        let that = this;
        let url = ConstDefine.SERVER_IP + ConstDefine.LOGIN_SERVER_LET;
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                console.log(response);

                let loginResult = JSON.parse(response);
                if (loginResult.state == "true") {
                    that.loginFinish();
                }
            }
        };

        let data = {
            operationCode:3,
            userName:this.accountEdit.string,
            password:this.passwordEdit.string
        }
        xhr.open("POST", url, true);
        xhr.send(JSON.stringify(data));
    }

    loginFinish() {
        this.isOperate = false;
        this.loginPanel.runAction(
            cc.sequence(
                cc.delayTime(0.5),
                cc.jumpTo(1, new cc.Vec2(DeviceUtils.getVisibleSize().width + 500, 0), 50, 4),
                cc.callFunc(() => {
                    this.bird.getComponent(Bird).talk(3, this.showChooseScene);
                })
            )
        )
    }

    runBirdLogic () {
        this.bird.runAction(
            cc.sequence(
                cc.delayTime(2),
                cc.moveTo(3, new cc.Vec2(200, 200)),
                cc.delayTime(1),
                cc.callFunc(() => {
                    this.bird.getComponent(Bird).talk(1, this.showChoosePanel);
                })
            )
        );
    }

    showLoginLogic () {
        this.loginPanel.runAction(
            cc.sequence(
                cc.delayTime(0.5),
                cc.jumpTo(1, new cc.Vec2(0, 0), 50, 4),
                cc.callFunc(() => {
                    this.isStart = true;
                    this.isOperate = true;
                })
            )
        )
    }

    showChoosePanel (tabStory:Table_Story) {
        let showPanel = cc.find("Canvas/ChoosePanel");
        let bird = cc.find("Bird")
        let canvas = cc.find("Canvas");

        let that = null;
        if (canvas != null && canvas != undefined) {
            that = canvas.getComponent(HomeScene);
        }
        
        showPanel.runAction(
            cc.sequence(
                cc.moveTo(1, new cc.Vec2(0, 0)),
                cc.callFunc(() => {
                    showPanel.getComponent(ChoosePanel).show(
                        tabStory.m_Title, 
                        tabStory.m_Word, 
                        ()=>{
                            showPanel.runAction(
                                cc.moveTo(0.3, new cc.Vec2(0, 625))
                            )

                            if (tabStory.m_IsBirdFly == 1){
                                bird.runAction(
                                    cc.moveTo(5, new cc.Vec2(DeviceUtils.getVisibleSize().width + 200, that.node.position.y+100))
                                )
                            }

                            that.showLoginLogic();
                        },
                        ()=>{
                            showPanel.runAction(
                                cc.moveTo(0.3, new cc.Vec2(0, 625))
                            )

                            if (tabStory.m_IsBirdFly == 1){
                                bird.runAction(
                                    cc.moveTo(5, new cc.Vec2(DeviceUtils.getVisibleSize().width + 200, that.node.position.y+100))
                                )
                            }

                            // 点击取消
                            that.showLoginLogic();
                        });
                })
            )
        )
    }

    showChooseScene (tabStory:Table_Story) {

        let ChooseScenePanel = cc.find("Canvas/ChooseScenePanel");
        let bird = cc.find("Bird")
        let canvas = cc.find("Canvas");

        let that = null;
        if (canvas != null && canvas != undefined) {
            that = canvas.getComponent(HomeScene);
        }
        
        ChooseScenePanel.runAction(
            cc.sequence(
                cc.moveTo(1, new cc.Vec2(0, 0)),
                cc.callFunc(() => {
                    ChooseScenePanel.getComponent(ChoosePanel).show(
                        tabStory.m_Title, 
                        tabStory.m_Word, 
                        ()=>{
                            ChooseScenePanel.runAction(
                                cc.moveTo(0.3, new cc.Vec2(0, 625))
                            )

                            if (tabStory.m_IsBirdFly == 1){
                                bird.runAction(
                                    cc.moveTo(5, new cc.Vec2(DeviceUtils.getVisibleSize().width + 200, that.node.position.y+100))
                                )
                            }
                        },
                        ()=>{
                            ChooseScenePanel.runAction(
                                cc.moveTo(0.3, new cc.Vec2(0, 625))
                            )

                            if (tabStory.m_IsBirdFly == 1){
                                bird.runAction(
                                    cc.moveTo(5, new cc.Vec2(DeviceUtils.getVisibleSize().width + 200, that.node.position.y+100))
                                )
                            }
                        });
                })
            )
        )
    }

    changeScene (event,coustom) {
        switch(coustom) {
            case "1":
                cc.director.loadScene("SuperMarketScene");
                break;
            case "2":
                cc.director.loadScene("KindergartenScene");
                break;
            case "3":
                cc.director.loadScene("ParkScene");
                break;
        }
    }
}
