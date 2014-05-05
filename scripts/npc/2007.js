importPackage(Packages.client);
importPackage(Packages.tools);
var status = -1;

function action(mode, type, selection) {
    if (cm.getPlayer().getLevel() != 1 || cm.getPlayer().getMapId() != 10000) {
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
		cm.sendSimple("初生牛犊不怕虎的骚男，你可以实现你一个愿望，你愿意嫁给我吗?\r\n好吧，我错了。我可以让你重新选择你的职业。   \r\n#L5#火炮手#l\r\n#L6#双弩精灵#l\r\n#L7#恶魔猎手#l\r\n#L8#暗影双刀#l \r\n#L9#铁胆火车侠#l\r\n#b#L3# 我并不想选择，也不想嫁给你，再见！#l");
    } else if (status == 1) {
if (selection == 5) {
cm.changeJob(501); //火炮手
 cm.gainItem(4032055, 1);
 cm.gainItem(1532000 ,1);
		cm.gainExp(1000); 
				cm.gainExp(1000); 
						cm.gainExp(1000); 
								cm.gainExp(1000); 
										cm.gainExp(1000); 
												cm.gainExp(1000); 
														cm.gainExp(1000); 
																cm.gainExp(1000); 
																		cm.gainExp(248);     
      cm.resetStats(4, 4, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
      cm.c.getPlayer().setRemainingAp((cm.getPlayer().getLevel() - 1) * 5 + 8);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.c.getPlayer().getRemainingAp());
		cm.warp(104000000);
    }
if (selection == 6) {
cm.changeJob(2300); //双弩精灵
 cm.gainItem(4032055, 1);
 cm.gainItem(1522038, 1); 
 cm.gainItem(1352005, 1);
		cm.gainExp(1000); 
				cm.gainExp(1000); 
						cm.gainExp(1000); 
								cm.gainExp(1000); 
										cm.gainExp(1000); 
												cm.gainExp(1000); 
														cm.gainExp(1000); 
																cm.gainExp(1000); 
																		cm.gainExp(248);   
      cm.resetStats(4, 4, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
      cm.c.getPlayer().setRemainingAp((cm.getPlayer().getLevel() - 1) * 5 + 8);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.c.getPlayer().getRemainingAp());
	    cm.warp(104000000);
	}
if (selection == 7) {
cm.changeJob(3100);//恶魔猎手
 cm.gainItem(4032055, 1);
 cm.gainItem(1322123, 1);
 cm.gainItem(1099000, 1);
		cm.gainExp(1000); 
				cm.gainExp(1000); 
						cm.gainExp(1000); 
								cm.gainExp(1000); 
										cm.gainExp(1000); 
												cm.gainExp(1000); 
														cm.gainExp(1000); 
																cm.gainExp(1000); 
																		cm.gainExp(248);  
      cm.resetStats(4, 4, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
      cm.c.getPlayer().setRemainingAp((cm.getPlayer().getLevel() - 1) * 5 + 8);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.c.getPlayer().getRemainingAp());
		cm.warp(104000000);
	}
	if (selection == 8) {
cm.changeJob(430);//暗影双刀 
 cm.gainItem(4032055, 1);
 cm.gainItem(1342047, 1);
 cm.gainItem(1332007, 1);
		cm.gainExp(1000); 
				cm.gainExp(1000); 
						cm.gainExp(1000); 
								cm.gainExp(1000); 
										cm.gainExp(1000); 
												cm.gainExp(1000); 
														cm.gainExp(1000); 
																cm.gainExp(1000); 
																		cm.gainExp(248);    
      cm.resetStats(4, 4, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
      cm.c.getPlayer().setRemainingAp((cm.getPlayer().getLevel() - 1) * 5 + 8);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.c.getPlayer().getRemainingAp());
		cm.warp(104000000);
	}
		if (selection == 9) {
cm.changeJob(508); //铁胆火车侠
 cm.gainItem(1492000, 1);
 //cm.gainItem(1352300, 1);
		cm.gainExp(1000); 
				cm.gainExp(1000); 
						cm.gainExp(1000); 
								cm.gainExp(1000); 
										cm.gainExp(1000); 
												cm.gainExp(1000); 
														cm.gainExp(1000); 
																cm.gainExp(1000); 
																		cm.gainExp(248); 
      cm.resetStats(4, 4, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
      cm.c.getPlayer().setRemainingAp((cm.getPlayer().getLevel() - 1) * 5 + 8);
	    cm.c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.c.getPlayer().getRemainingAp());
		cm.warp(104000000);
	}
	cm.dispose();
    }
}