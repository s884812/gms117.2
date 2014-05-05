var maps = Array(952000000, 952010000, 952020000, 952030000, 952040000, 953000000, 953010000, 953020000, 953030000, 953040000, 953050000, 954000000, 954010000, 954020000, 954030000, 954040000, 954050000);
var minLevel = Array(15, 40, 60, 60, 50, 70, 70, 115, 130, 120, 135, 120, 125, 130, 140, 150, 165);

function start() {
    var selStr = "������Ѿ�������"+cm.getBossLog("guaiwugongyuan")+"�ι��﹫԰��.\r\n���������һ����? \r\n\r\n#b";
    for (var i = 0; i < maps.length; i++) {
	selStr += "#L" + i + "##m" + maps[i] + "# (����ȼ� Lv." + minLevel[i] + ")#l\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < maps.length) {
        if (cm.getParty() == null || !cm.isLeader()) {
	    cm.sendOk("������Ķӳ������ҶԻ�.");
	} else {
	    var party = cm.getParty().getMembers().iterator();
	    var next = true;
	    while (party.hasNext()) {
		var cPlayer = party.next();
		if (cPlayer.getMapid() != cm.getMapId()) {
		    next = false;
		} 
	    }
	    if (!next || cm.getBossLog("guaiwugongyuan") >= 9999) {
		cm.sendOk("��ȷ����Ķ�Աȫ�����ڱ���ͼ��.");
	    } else {
		var em = cm.getEventManager("MonsterPark");
		if (em == null || em.getInstance("MonsterPark" + maps[selection]) != null) {
		    cm.sendOk("�Ѿ������ڹ��﹫԰������.");
		} else {
            cm.setBossLog("guaiwugongyuan");
		    em.startInstance_Party("" + maps[selection], cm.getPlayer());
		}
	    }
	}
    }
    cm.dispose();
}