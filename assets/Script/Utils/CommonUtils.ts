
// import encrypt from "../Plugins/encryptjs";
// 通用常量定义
export class ConstDefine {
    
    public static SCREEN_WIDTH_LOGIC:number = 1920;
    public static SCREEN_HEIGHT_LOGIC:number = 1080;
    // 方向
    public static DIRECTION_LEFT = 0;
    public static DIRECTION_UP = 1;
    public static DIRECTION_RIGHT = 2;
    public static DIRECTION_DOWN = 3;

    // 常量值
    public static INVALIDE_VALUE = -1;
    public static ZERO = 0.0005;

    // 判定大小
    public static EQUAL:number = 0;
    public static BIGGER:number = 1;
    public static SMALLER:number = 2;

    // 状态
    public static INIT_STATE:number = 0;
    public static NORMAL_STATE:number = 1;
    public static DROP_STATE:number = 2;
    public static DEAD_STATE:number = 3;
    public static ESCAPE_STATE:number = 4;

    // 摇杆
    public static TOUCH_TYPE_DEFAULT:number = 0;
    public static TOUCH_TYPE_FOLLOW:number = 1;
    public static DIRECTION_TYPE_FOUR:number = 4;
    public static DIRECTION_TYPE_EIGHT:number = 8;
    public static DIRECTION_TYPE_ALL:number = 0;

    // 设备方向
    public static ORITATION_AUTO:number = 0;
    public static ORITATION_PORTRAIT:number = 1;
    public static ORITATION_LANDSCAPE:number = 2;

    // 特定项目相关宏定义-更换项目时这里的宏定义可以不保留
    public static NULL_TYPE:number = -1;
    public static DUCK_TYPE:number = 0;
    public static BOOM_TYPE:number = 1;
    public static GRENADE_TYPE:number = 2;
    public static MAOMAOCHONG_TYPE:number = 3;
    public static CLOUD_TYPE:number = 4;
    public static BULL_TYPE:number = 5;
    public static SNAIL_TYPE:number = 6;
    public static SHEEP_TYPE:number = 7;

    public static DUCK_DEAD:string = "DUCK_DEAD";
    public static DUCK_ESCAPE:string = "DUCK_ESCAPE";
    public static DUCK_DROP_PROP:string = "DUCK_DROP_PROP";
    public static MAOMAOCHONG_ESCAPE:string = "MAOMAOCHONG_ESCAPE";
    public static MAOMAOCHONG_DEAD:string = "MAOMAOCHONG_DEAD";

    public static LEVEL_SCENE_MODEL:number = 1;         // 关卡模式
    public static TIME_SCENE_MODEL:number = 2;          // 倒计时模式

    // 数据存储KEY值
    public static CURRENT_LEVEL_NUMBER:string = "CURRENT_LEVEL_NUMBER";                 // 当前关卡
    public static PRE_PERLEVEL_STAR_COUNT:string = "PRE_PERLEVEL_STAR_COUNT";           // 每关得星数 
    public static SHARE_FRIEND_HOUSE_1:string = "SHARE_FRIEND_HOUSE_1";                 // 前2 3关分享
    public static SHARE_FRIEND_HOUSE_2:string = "SHARE_FRIEND_HOUSE_2";                 // 前4 5关分享
    public static SHARE_FRIEND_HOUSE_3:string = "SHARE_FRIEND_HOUSE_3";                 // 前5关分享
    public static LEFT_SPEED_COUNT:string = "LEFT_SPEED_COUNT";                         // 剩余加速道具数
    public static LEFT_TIME_COUNT:string = "LEFT_TIME_COUNT";                           // 剩余加时间道具数
    public static AUDIO_FLAG:string = "AUDIO_FLAG";                                     // 背景音乐开关记录，0：关闭，1：打开
    public static LEVEL_INFO_SHCEDULE:string = "LEVEL_INFO_SHCEDULE";                   // 场景发送消息

    // 道具类型
    public static PROP_ADD_SPEED:number = 1;
    public static PROP_ADD_TIME:number = 2;
    public static PROP_ADD_CANNON:number = 3;
    public static PROP_CREATE_BOOM:number = 4;                                          // 场景中生成一颗炸弹
    public static PROP_LOSE_TIME:number = 5;
    public static PROP_LOCK_SKILL:number = 8; 
    

    // 按钮开启参数
    public static START_COLA_BTN:number = 200;
    public static START_SPEED_BTN:number = 3;

    // 广告模块
    public static ADMOD_PATH:string = "https://www.5igamedev.com/gameweb/shoot/admod/";
    public static ADMOD_TYPE_TEXT:number = 1;
    public static ADMOD_TYPE_WEBVIEW:number = 2;

    public static PLATFORM_ORIGNAL:number = 0;
    public static PLATFORM_WECHAT:number = 1;
    public static PLATFORM_TIKTOK:number = 2;
    public static PLATFORM_ANDROID:number = 3;
    public static PLATFORM_GOOGLE:number = 4;
    public static PLATFORM_TYPE:number = 4; // 0:原生，1：微信小游戏；2：抖音小游戏；3：Android平台； 4：google平台
}

// 通用辅助接口
export class CommonUtils {
    
    // 判定两个数值是否相等
    // param n1 : 参与比较的数值
    // param n2 : 参与比较的数值
    // param faultRate : 比较大小的容错率
    public static isEqual(n1, n2, faultRate):boolean{
        let equal = Math.abs(n1-n2) <= faultRate ? true : false;
        return equal;
    }

    // 比较数值大小
    // param n1 : 参与比较的数值
    // param n2 : 参与比较的数值
    // param faultRate : 比较大小的容错率，缺省为0.005
    public static comprareTo(n1, n2, faultRate=ConstDefine.ZERO):number{
        if (Math.abs(n1-n2) <= faultRate) {
            return ConstDefine.EQUAL;
        } else {
            if (n1 > n2) {
                return ConstDefine.BIGGER;
            } else {
                return ConstDefine.SMALLER;
            }
        }
    }

    // 计算两个点之间的距离
    // param p1 : 计算点1
    // param p2 : 计算点2
    // PS : 该接口只支持相同父节点下计算
    public static getDistancePoint(p1, p2) {
        return Math.sqrt(Math.pow((p1.x-p2.x),2) + Math.pow((p1.y-p2.y), 2));
    }

    // 计算两个点之间的距离
    // param p1x : 计算点1
    // param p1y : 计算点1
    // param p2x : 计算点2
    // param p2y : 计算点2
    // PS : 该接口只支持相同父节点下计算
    public static getDistancePointXY(p1x, p1y, p2x, p2y) {
        return Math.sqrt(Math.pow((p1x-p2x),2) + Math.pow((p1y-p2y), 2));
    }

    // 计算两个点之间的距离
    // param p1 : 计算点1
    // param p2 : 计算点2
    // PS : 该接口支持相同、不同父节点下计算-谨慎使用，未验证
    public static getNodePositionDiff(p1: cc.Node, p2: cc.Node): cc.Vec2 {
        // @ts-ignore
        const { tx: x1, ty: y1 } = p1.getNodeToWorldTransformAR()
        // @ts-ignore
        const { tx: x2, ty: y2 } = p2.getNodeToWorldTransformAR()
    
        return cc.v2(x2 - x1, y2 - y1)
    }

    // 判定一个点是否包含在矩形区域内
    // param point : 计算点
    // param rectCenter : 计算矩形几何中心点
    // param weight : 计算矩形宽度
    // param height : 计算矩形高度
    // param faultRate : 容错率，缺省为0.005
    public static isPointInRect(point, rectCenter, weight, height, faultRate=ConstDefine.ZERO) {
        if (CommonUtils.comprareTo(point.x, rectCenter.x-weight/2, faultRate) === ConstDefine.BIGGER
        && CommonUtils.comprareTo(point.x, rectCenter.x+weight/2, faultRate) === ConstDefine.SMALLER
        && CommonUtils.comprareTo(point.y, rectCenter.y-height/2, faultRate) === ConstDefine.BIGGER
        && CommonUtils.comprareTo(point.y, rectCenter.y+height/2, faultRate) === ConstDefine.SMALLER) {
            return true;
        }
        return false;
    }

    /**
     * @function 获取随机数
     * @param from 范围起始点
     * @param to 范围结束点
     * @returns 返回随机数
     */
    public static getRandomRange(from, to) {
        let r = Math.floor((Math.random() * to))%(to-from) + from;
        return r;
    }
}

// 操作辅助接口
export class OperationUtils {

    // 给目标节点添加拖拽事件
    // param node : 目标节点
    public static addMoveEvent (node) {
        if (node == null || node == undefined) {
            console.error("Are you sure try to add move event on a nil node?");
            return;
        }

        node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            let delta = event.getDelta();
            let targetNode = node;
            let pos = targetNode.position.add(delta);
            node.position = pos;
        });
    }

    // 添加拖拽后松开事件 与addMoveEnt事件配对使用
    // param node : 计算点
    // param targetNode : 目标节点
    // param condition : 到达目标节点后的附加条件
    // param successCallback : 符合条件的成功回调
    // param failedCallback : 不符合条件的失败回调
    public static addEndEvent (node, targetNode, condition, successCallback, failedCallback) {
        if (node == null || node == undefined) {
            console.error("Are you sure try to add move end event on a nil node?");
            return;
        }

        node.on(cc.Node.EventType.TOUCH_END, (event) => {
            let x = targetNode.x;
            let y = targetNode.y;
            let w = targetNode.width;
            let h = targetNode.height;

            if (node.x > x-w/2 && node.x < x+w/2 && node.y > y-h/2 && node.y < y+h/2) {
                if (condition) {
                    if (typeof successCallback == "function") {
                        successCallback();
                    }
                    node.active = false;
                } else {
                    if (typeof failedCallback == "function") {
                        failedCallback();
                    }
                }
            } else {
                if (typeof failedCallback == "function") {
                    failedCallback();
                }
            }
        });
    }
}

// 动画辅助接口
export class AnimationUtils {
    /**
     * @function 按钮点击后缩小再放大效果
     * @param node : 按钮节点
     * @param scaleSize : 缩放尺寸
     * @param scaleTime : 缩放动画执行时间
     * @param callback : 动画执行完成回调
     * @returns : void
     * */
    public static clickScale (node, scaleSize, scaleTime, callback=null) {
        if (node == null || node == undefined) {
            if (typeof callback == "function") {
                callback();
            }

            return;
        }

        node.runAction(
            cc.sequence(
                cc.scaleTo(scaleTime/2, scaleSize, scaleSize),
                cc.scaleTo(scaleTime/2, 1, 1),
                cc.callFunc(() => {
                    if (typeof callback == "function") {
                        callback();
                    }
                })
            )
        )
    }


    /**
     * @function 在node节点上播放序列帧动画，资源名下标从1开始
     * @param node 播放节点
     * @param preName 资源图片名称前缀
     * @param resCount 资源图片个数
     * @param intervalTime 单帧之间的时间间隔
     * @param callback 帧动画执行完回调
     */
    public static sequenceAnimation(node, preName, resCount, intervalTime=0.05, callback) {
        if (node == null || node == undefined) {
            if (typeof callback == "function") {
                callback();
            }

            return;
        }

        let index = 0;
        node.runAction(
            cc.repeat(
                cc.sequence(
                    cc.callFunc(() => {
                        index++;
                        if (index <= resCount) {
                            let resName = preName + "_" + index;
                            let sprite = node.getComponent(cc.Sprite);
                            sprite.spriteFrame = resName;
                        } else {
                            if (typeof callback == "function") {
                                callback();
                            }
                        }
                    }),
                    cc.delayTime(intervalTime)
                ), resCount+1
            )
        );
    }
}

// 系统辅助接口
export class SystemUtils {
    // 获取系统信息
    public static showSystemInfo () {
        if (ConstDefine.PLATFORM_TYPE == ConstDefine.PLATFORM_WECHAT){
            cc.sys.dump();
        }
    }

    public static startDynamicDrawcallBatch(){
        if (ConstDefine.PLATFORM_TYPE == ConstDefine.PLATFORM_WECHAT){
            cc.macro.CLEANUP_IMAGE_CACHE = false;
            cc.dynamicAtlasManager.enabled = true;
            cc.dynamicAtlasManager.maxFrameSize = 1024;
        }
    }
}

// 设备辅助接口
export class DeviceUtils {
    // 获取设备分辨率
    public static getResolutionSize () {
        return cc.view.getFrameSize();
    }

    public static getVisibleSize () {
        // console.log("View size width : " + cc.view.getVisibleSize().width + ", height : " + cc.view.getVisibleSize().height);
        return cc.view.getVisibleSize();
    }

    public static setOritation(oritation) {
        switch (oritation) {
            case ConstDefine.ORITATION_PORTRAIT:
                cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
                break;
            case ConstDefine.ORITATION_LANDSCAPE:
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
                break;
            case ConstDefine.ORITATION_AUTO:
                cc.view.setOrientation(cc.macro.ORIENTATION_AUTO);
                break;
            default:
                cc.view.setOrientation(cc.macro.ORIENTATION_AUTO);
                break;
        }
    }
}

// 调试辅助接口
export class DebugUtils {
    // 是否开启调试
    public static IS_DEBUG:boolean = false;
}

// 时间辅助接口
export class TimeUtils {
    // 获取当前时间距离1970年1月1日的毫秒数
    public static getCurrentStamp () {
        return cc.sys.now();
    }
}

export class EncryptUtils {
    // 加密
    public static encrypt (data) {
        let secretkey= 'open_sesame'; // 加密密钥
        // let dataString = JSON.stringify(data);
        let encrypted = data;//encrypt.encrypt(dataString,secretkey,256);

        return encrypted;
    }

    // 解密
    public static decrypt (encrypted) {
        let secretkey= 'open_sesame'; // 加密密钥
        var userData=encrypted;//JSON.parse(encrypt.decrypt(encrypted,secretkey,256));
        return userData;
    }
}

export class DataStorageUtils {
    // 存储数据
    public static write (key, user_data) {
        // let user_data = JSON.stringify(user_data);
        let encrypt_data = user_data; //EncryptUtils.encrypt(user_data);
        cc.sys.localStorage.setItem(key, encrypt_data);
    }

    // 读取数据
    public static read (key) {
        let encrypt_data = cc.sys.localStorage.getItem(key);
        let user_data = encrypt_data;//EncryptUtils.decrypt(encrypt_data);
        // user_data = JSON.parse(user_data);
        return user_data;
    }
} 