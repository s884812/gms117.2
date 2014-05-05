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
			qm.sendOk("恭喜你获得系统奖励！\r\n#v2430191# x 1个");
			qm.gainItem(2430191, 1);
			qm.forceCompleteQuest();
		  qm.dispose();	

		} 
	}
}