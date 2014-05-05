var status = -1;
var jiage = 100;
var exchangeItem = 5220040;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
        cm.sendSimple("我是转蛋卷兑换NPC，你目前拥有点卷: "+ cm.getPlayer().getCSPoints(2) + "#b\r\n#L0#用点卷兑换转蛋卷#l");
    } else if (status == 1) {
	if (cm.getPlayer().getCSPoints(2) < jiage) {
	    cm.sendNext("你连一个都换不起，太穷了吧.");
	    cm.dispose();
	} else {
	    cm.sendGetNumber("每个 #i" + exchangeItem + "##t" + exchangeItem + "# 需要"+ jiage +"点卷~! \n 你目前总共有点卷: "+ cm.getPlayer().getCSPoints(2) + ",可以兑换: " + cm.getPlayer().getCSPoints(2)/jiage +"个.", 1,1,99999);
	}
    } else if (status == 2) { 
	if (selection >= 1 && selection <= cm.getPlayer().getCSPoints(2) / jiage) {
	    if (!cm.canHold(5220040, selection)) {
		cm.sendOk("你的背包已经满了，装不下了.");
	    } else {
		cm.gainItem(5220040, selection);
		cm.getPlayer().modifyCSPoints(2, -(selection * jiage));
		cm.sendOk("兑换成功!");
	    }
	}
        cm.dispose();
    }
}