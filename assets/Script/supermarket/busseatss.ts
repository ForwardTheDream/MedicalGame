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

    @property(cc.Node)
old:cc.Node=null;

@property(cc.Node)
young:cc.Node=null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        
        this.old.active=false;
        this.young.active=false;
        
    }

    onOK(){
        this.old.active=true;
            this.young.active=true;
        this.scheduleOnce(function(){cc.director.loadScene("Supermarket")},3);
    
}

onCancel(){
     
   
    
}
    // update (dt) {}
}
