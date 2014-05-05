var status = -1;
var chance = Math.floor(Math.random()*3+2);
importPackage(Packages.tools.packet);
var a;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
        cm.sendSimple("您好我这里是豆豆赌博机，可以使你腰缠万贯，也可以使你一夜回到解放前。");
    } else if (status == 1) {
	if (cm.getMeso() < 1) {
	    cm.sendNext("你连一毛钱都没，太穷了吧.");
	    cm.dispose();
	} else {
	    cm.sendGetNumber("请下注金币：", 1000,1,210000000);
	}
    } else if (status == 2) {
    	if(cm.getMeso() < selection) {
		cm.sendNext("你的钱不够?");
		cm.dispose();
	    } else {
	    cm.gainMeso(-selection);
	    }
    a = selection;
    cm.sendSimple("请选择你要猜的数字。\r\n#L0#2#l\r\n#L1#3#l\r\n#L2#4#l\r\n#L3#5#l");
    } else if (status == 3) {
    if(selection == 0){
    if (chance == 2) {
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "大家恭喜 " + cm.getPlayer().getName() + "中奖啦. 获得了 "+ a * 2 +" 的金币."));
    cm.sendOk("恭喜你！中奖啦. 您获得了 "+ a * 2 +" 的金币.");
    cm.gainMeso(a * 2);
    cm.dispose();
    } else {
    cm.sendOk("悲剧啊. 数字为:"+ chance +"");
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "大家默哀 " + cm.getPlayer().getName() + "中奖失败. 失去了 "+ a +" 的金币."));
    cm.dispose();
    }
    } else if(selection == 1){
    if (chance == 3) {
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "大家恭喜 " + cm.getPlayer().getName() + "中奖啦. 获得了 "+ a * 3 +" 的金币."));
    cm.sendOk("恭喜你！中奖啦. 您获得了 "+ a * 3 +" 的金币.");
    cm.gainMeso(a * 3);
    cm.dispose();
    } else {
    cm.sendOk("悲剧啊. 数字为:"+ chance +"");
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "大家默哀 " + cm.getPlayer().getName() + "中奖失败. 失去了 "+ a +" 的金币."));
    cm.dispose();
    }
    } else if(selection == 2){
    if (chance == 4) {
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "大家恭喜 " + cm.getPlayer().getName() + "中奖啦. 获得了 "+ a * 4 +" 的金币."));
    cm.sendOk("恭喜你！中奖啦. 您获得了 "+ a * 4 +" 的金币.");
    cm.gainMeso(a * 4);
    cm.dispose();
    } else {
    cm.sendOk("悲剧啊. 数字为:"+ chance +"");
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "大家默哀 " + cm.getPlayer().getName() + "中奖失败. 失去了 "+ a +" 的金币."));
    cm.dispose();
    }
    } else if(selection == 3){
    if (chance == 5) {
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "大家恭喜 " + cm.getPlayer().getName() + "中奖啦. 获得了 "+ a * 5 +" 的金币."));
    cm.sendOk("恭喜你！中奖啦. 您获得了 "+ a * 5 +" 的金币.");
    cm.gainMeso(a * 5);
    cm.dispose();
    } else {
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "大家默哀 " + cm.getPlayer().getName() + "中奖失败. 失去了 "+ a +" 的金币."));
    cm.sendOk("悲剧啊. 数字为:"+ chance +"");
    cm.dispose();
    }
    }
    }
    }