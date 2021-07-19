const {ccclass, property} = cc._decorator;

@ccclass
export default class HomeScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    start () {
        this.node.runAction(
            cc.sequence(
                cc.delayTime(6),
                cc.callFunc(() => {
                    cc.director.loadScene("ParkScene");
                })
            )
        )
    }

    update () {

    }

    onDestroy() {

    }
}
