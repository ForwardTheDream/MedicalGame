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

        
        
    }

    
    }

   

        