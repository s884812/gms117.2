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
			qm.sendOk("��ϲ����ϵͳ������\r\n\r\n1,000,000��Һ�200��ת����.");
			qm.gainMeso(1000000);
			qm.gainItem(5220040, 200);
			qm.forceCompleteQuest();
		  qm.dispose();	
		} 
	}
}