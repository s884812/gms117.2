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
        cm.sendSimple("�����������Ƕ����Ĳ���������ʹ��������ᣬҲ����ʹ��һҹ�ص����ǰ��");
    } else if (status == 1) {
	if (cm.getMeso() < 1) {
	    cm.sendNext("����һëǮ��û��̫���˰�.");
	    cm.dispose();
	} else {
	    cm.sendGetNumber("����ע��ң�", 1000,1,210000000);
	}
    } else if (status == 2) {
    	if(cm.getMeso() < selection) {
		cm.sendNext("���Ǯ����?");
		cm.dispose();
	    } else {
	    cm.gainMeso(-selection);
	    }
    a = selection;
    cm.sendSimple("��ѡ����Ҫ�µ����֡�\r\n#L0#2#l\r\n#L1#3#l\r\n#L2#4#l\r\n#L3#5#l");
    } else if (status == 3) {
    if(selection == 0){
    if (chance == 2) {
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "��ҹ�ϲ " + cm.getPlayer().getName() + "�н���. ����� "+ a * 2 +" �Ľ��."));
    cm.sendOk("��ϲ�㣡�н���. ������� "+ a * 2 +" �Ľ��.");
    cm.gainMeso(a * 2);
    cm.dispose();
    } else {
    cm.sendOk("���簡. ����Ϊ:"+ chance +"");
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "���Ĭ�� " + cm.getPlayer().getName() + "�н�ʧ��. ʧȥ�� "+ a +" �Ľ��."));
    cm.dispose();
    }
    } else if(selection == 1){
    if (chance == 3) {
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "��ҹ�ϲ " + cm.getPlayer().getName() + "�н���. ����� "+ a * 3 +" �Ľ��."));
    cm.sendOk("��ϲ�㣡�н���. ������� "+ a * 3 +" �Ľ��.");
    cm.gainMeso(a * 3);
    cm.dispose();
    } else {
    cm.sendOk("���簡. ����Ϊ:"+ chance +"");
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "���Ĭ�� " + cm.getPlayer().getName() + "�н�ʧ��. ʧȥ�� "+ a +" �Ľ��."));
    cm.dispose();
    }
    } else if(selection == 2){
    if (chance == 4) {
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "��ҹ�ϲ " + cm.getPlayer().getName() + "�н���. ����� "+ a * 4 +" �Ľ��."));
    cm.sendOk("��ϲ�㣡�н���. ������� "+ a * 4 +" �Ľ��.");
    cm.gainMeso(a * 4);
    cm.dispose();
    } else {
    cm.sendOk("���簡. ����Ϊ:"+ chance +"");
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "���Ĭ�� " + cm.getPlayer().getName() + "�н�ʧ��. ʧȥ�� "+ a +" �Ľ��."));
    cm.dispose();
    }
    } else if(selection == 3){
    if (chance == 5) {
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "��ҹ�ϲ " + cm.getPlayer().getName() + "�н���. ����� "+ a * 5 +" �Ľ��."));
    cm.sendOk("��ϲ�㣡�н���. ������� "+ a * 5 +" �Ľ��.");
    cm.gainMeso(a * 5);
    cm.dispose();
    } else {
    cm.getClient().getChannelServer().broadcastPacket(CWvsContext.serverNotice(6, "���Ĭ�� " + cm.getPlayer().getName() + "�н�ʧ��. ʧȥ�� "+ a +" �Ľ��."));
    cm.sendOk("���簡. ����Ϊ:"+ chance +"");
    cm.dispose();
    }
    }
    }
    }