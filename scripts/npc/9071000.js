var items = Array(5064000, 5062005, 5450000, 5064200, 2049301,5062300);
var coins = Array(11900, 2500, 560, 9990, 5000, 15900);
var status = 0;

function start() {
    var selStr = "��ӭ�������﹫԰��������Ի�ȡ�ܶ����õĶ���Ŷ!\r\n���е��:"+ cm.getPlayer().getCSPoints(2) +"\r\n\r\n#b";
    for (var i = 0; i < items.length; i++) {
	selStr += "#L" + i + "##i" + items[i] + "# 1�� " + coins[i] + " ��� (����)#l\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < items.length) {
	if (!cm.canHold(items[selection])) {
	    cm.sendOk("��ı���ʣ����������.");
	} else if (cm.getPlayer().getCSPoints(2)<coins[selection]) {
	    cm.sendOk("��û���㹻�ĵ��.");
	} else {
	    cm.getPlayer().modifyCSPoints(2, -coins[selection]);
	    cm.gainItem(items[selection], 1);
	}
    }
    cm.dispose();
}