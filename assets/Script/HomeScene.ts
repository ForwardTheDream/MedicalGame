import TableSystem from "./Tables/TableSystem";
import { DeviceUtils } from "./Utils/CommonUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HomeScene extends cc.Component {

    @property(cc.Node)
    loginPanel:cc.Node = null;

    @property(cc.EditBox)
    accountEdit:cc.EditBox = null;

    @property(cc.EditBox)
    passwordEdit:cc.EditBox = null;

    isStart:boolean = false;
    start () {
        // let size:cc.Size = DeviceUtils.getVisibleSize();
        TableSystem.getInstance();

        this.loginPanel.runAction(
            cc.sequence(
                cc.delayTime(0.5),
                cc.jumpTo(1, new cc.Vec2(0, 0), 50, 4),
                cc.callFunc(() => {
                    this.isStart = true;
                })
            )
        )
    }

    onRegister() {
        if (!this.isStart) {
            return;
        }

        if (this.accountEdit.string == "" || this.passwordEdit.string == "") {
            cc.log("账号或密码为空！")
            return;
        }

        let url = "";
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                console.log(response);
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }

    onLogin() {
        if (!this.isStart) {
            return;
        }

        cc.director.loadScene("KindergartenScene");
        if (this.accountEdit.string == "" || this.passwordEdit.string == "") {
            cc.log("账号或密码为空！")
            return;
        }

    }
}
