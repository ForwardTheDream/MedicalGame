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
    apple:cc.Button=null;
    @property(cc.Button)
    juice:cc.Button=null;
    @property(cc.Button)
    book:cc.Button=null;
    @property(cc.Button)
    confirm:cc.Button=null;
    @property(cc.Node)
    casher:cc.Node=null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        this.confirm.node.active=false;

        this.casher.active=false;

        this.apple.node.on("click",event=>{this.label.string="是否确定";this.confirm.node.active=true;
       });

        this.book.node.on("click",event=>{this.label.string="是否确定";this.confirm.node.active=true;
        });

        this.juice.node.on("click",event=>{this.label.string="是否确定";this.confirm.node.active=true;
        });

        this.confirm.node.on("click",event=>{this.casher.active=true;
            this.label.string="买完了回家了！！"});

    }

    // update (dt) {}
}
