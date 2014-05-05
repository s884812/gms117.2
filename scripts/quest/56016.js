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
			qm.sendOk("恭喜你获得系统奖励！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2022335# x 100个");
			qm.gainItem(2022335, 100);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}