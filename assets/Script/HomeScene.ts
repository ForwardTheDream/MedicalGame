import TableSystem from "./Tables/TableSystem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HomeScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    start () {
        TableSystem.getInstance();
        // this.node.runAction(
        //     cc.sequence(
        //         cc.delayTime(6),
        //         cc.callFunc(() => {
        //             cc.director.loadScene("ParkScene");
        //         })
        //     )
        // )
    }

    update () {

    }

    onDestroy() {

    }
}
