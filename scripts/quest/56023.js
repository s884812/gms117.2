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
			qm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v5211047# x 1��");
			qm.gainItem(5211047,1,1);			
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}