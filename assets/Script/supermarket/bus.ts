// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    @property(cc.Button)
    card: cc.Button=null;
    @property(cc.Button)
    coin: cc.Button=null;
    @property(cc.Button)
    cash: cc.Button=null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.card.node.active=false;
        this.coin.node.active=false;
        this.cash.node.active=false;
        this.node.runAction(cc.sequence(cc.delayTime(3),cc.callFunc(()=>{this.label.string="上车了,要刷卡或投硬币或纸币";
        this.card.node.active=true;
        this.coin.node.active=true;
        this.cash.node.active=true;})));

        this.card.node.on("click",event=>cc.director.loadScene("BusSeats"));
        this.coin.node.on("click",event=>cc.director.loadScene("BusSeats"));
        this.cash.node.on("click",event=>cc.director.loadScene("BusSeats"));
    }

    // update (dt) {}
}
