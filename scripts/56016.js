var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2000000# x 50��");
			qm.gainItem(2000000, 50);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}