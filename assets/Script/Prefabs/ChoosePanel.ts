// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChoosePanel extends cc.Component {

    @property(cc.Label)
    title: cc.Label = null;

    @property(cc.Label)
    description:cc.Label = null;

    @property(cc.Node)
    btnCancel:cc.Node = null;

    @property(cc.Node)
    btnOK:cc.Node = null;

    okCallbackEvent:Function = null;
    cancelCallbackEvent:Function = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
    show(title:string, description:string, okCallback:Function, cancelCallback:Function) {
        if (this.title != null) {
            this.title.string = title;
        }
        
        if (this.description != null) {
            this.description.string = description;
        }
        
        this.okCallbackEvent = okCallback;
        this.cancelCallbackEvent = cancelCallback;
    }

    onOK(){
        if (typeof this.okCallbackEvent == "function") {
            this.okCallbackEvent();
        }
    }

    onCancel(){
        if (typeof this.cancelCallbackEvent == "function") {
            this.cancelCallbackEvent();
        }
    }
}
