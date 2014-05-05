var items = Array(5064000, 5062005, 5450000, 5064200, 2049301,5062300);
var coins = Array(11900, 2500, 560, 9990, 5000, 15900);
var status = 0;

function start() {
    var selStr = "欢迎来到怪物公园，这里可以换取很多有用的东西哦!\r\n你有点卷:"+ cm.getPlayer().getCSPoints(2) +"\r\n\r\n#b";
    for (var i = 0; i < items.length; i++) {
	selStr += "#L" + i + "##i" + items[i] + "# 1个 " + coins[i] + " 点卷 (永久)#l\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < items.length) {
	if (!cm.canHold(items[selection])) {
	    cm.sendOk("你的背包剩余容量不足.");
	} else if (cm.getPlayer().getCSPoints(2)<coins[selection]) {
	    cm.sendOk("你没有足够的点卷.");
	} else {
	    cm.getPlayer().modifyCSPoints(2, -coins[selection]);
	    cm.gainItem(items[selection], 1);
	}
    }
    cm.dispose();
}