package server;

import client.SkillFactory;
import client.inventory.MapleInventoryIdentifier;
import constants.BattleConstants;
import constants.ServerConstants;
import handling.MapleServerHandler;
import handling.channel.ChannelServer;
import handling.channel.MapleGuildRanking;
import handling.login.LoginServer;
import handling.cashshop.CashShopServer;
import handling.login.LoginInformationProvider;
import handling.world.World;
import java.sql.SQLException;
import database.DatabaseConnection;
import handling.world.family.MapleFamily;
import handling.world.guild.MapleGuild;
import java.sql.PreparedStatement;
import server.Timer.*;
import server.events.MapleOxQuizFactory;
import server.life.MapleLifeFactory;
import server.life.MapleMonsterInformationProvider;
import server.life.MobSkillFactory;
import server.life.PlayerNPC;
import server.quest.MapleQuest;
import java.util.concurrent.atomic.AtomicInteger;
import server.maps.MapleMapFactory;

public class Start {

    public static long startTime = System.currentTimeMillis();
    public static final Start instance = new Start();
    public static AtomicInteger CompletedLoadingThreads = new AtomicInteger(0);

    public void run() throws InterruptedException {

        if (Boolean.parseBoolean(ServerProperties.getProperty("net.sf.odinms.world.admin")) || ServerConstants.Use_Localhost) {
            System.out.println("[!!! Admin Only Mode Active !!!]");
        }

        try {
            final PreparedStatement ps = DatabaseConnection.getConnection().prepareStatement("UPDATE accounts SET loggedin = 0");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException ex) {
            throw new RuntimeException("[EXCEPTION] Please check if the SQL server is active.");
        }

       System.out.println("                         [" + ServerProperties.getProperty("net.sf.odinms.login.serverName") + "]");
        World.init();
        WorldTimer.getInstance().start();
        EtcTimer.getInstance().start();
        MapTimer.getInstance().start();
        CloneTimer.getInstance().start();
        EventTimer.getInstance().start();
        BuffTimer.getInstance().start();
        PingTimer.getInstance().start();
        System.out.println("------------------------------【加载服务器信息】------------------------------");
        System.out.println("                 ————————— 家族信息 —————————              ");     
        MapleGuildRanking.getInstance().load();
        MapleGuild.loadAll(); //(this); 
        System.out.println("∑家族信息加载                                                         完毕√");
        System.out.println("                 ————————— 好友信息 —————————              ");     
        MapleFamily.loadAll(); //(this); 
        System.out.println("∑好友信息加载                                                         完毕√");
        System.out.println("                 ————————— 任务信息 —————————              "); 
        MapleLifeFactory.loadQuestCounts();
        MapleQuest.initQuests();
        System.out.println("∑任务信息加载                                                         完毕√");
        System.out.println("                 ————————— 其他信息 —————————              ");       
        MapleItemInformationProvider.getInstance().runEtc(); 
        System.out.println("∑其他信息加载                                                         完毕√");
        System.out.println("                 ————————— 怪物信息 —————————              ");         
        MapleMonsterInformationProvider.getInstance().load(); 
        BattleConstants.init(); 
        System.out.println("∑怪物信息加载                                                         完毕√");
        System.out.println("                 ————————— 物品信息 —————————               ");      
        MapleItemInformationProvider.getInstance().runItems(); 
        System.out.println("∑物品信息加载                                                         完毕√");
        System.out.println("                 ————————— 技能信息 —————————              ");         
        SkillFactory.load();
        System.out.println("∑技能信息加载                                                         完毕√");
        System.out.println("                 ————————— 副本信息 —————————              ");        
        LoginInformationProvider.getInstance();
        RandomRewards.load();
        MapleOxQuizFactory.getInstance();
        MapleCarnivalFactory.getInstance();
		CharacterCardFactory.getInstance().initialize(); 
        MobSkillFactory.getInstance();
        SpeedRunner.loadSpeedRuns();
        MTSStorage.load();
        System.out.println("∑副本信息加载                                                         完毕√");
         System.out.println("                 ————————— 地图信息 —————————              ");
        MapleInventoryIdentifier.getInstance();
        MapleMapFactory.loadCustomLife();
        System.out.println("∑地图信息加载                                                         完毕√");
        CashItemFactory.getInstance().initialize(); 

        MapleServerHandler.initiate();
        System.out.println("                 —————————登陆服务器—————————              ");
        LoginServer.run_startup_configurations();
        System.out.println("∑登陆服务器初始化                                                     完毕√");

        System.out.println("                 —————————频道服务器—————————              ");
        ChannelServer.startChannel_Main();
        System.out.println("∑频道服务器初始化                                                     完毕√");
        System.out.println("                 —————————商城服务器—————————              ");
        CashShopServer.run_startup_configurations();
        System.out.println("∑商城服务器初始化                                                     完毕√");

        //CheatTimer.getInstance().register(AutobanManager.getInstance(), 60000);
        Runtime.getRuntime().addShutdownHook(new Thread(new Shutdown()));
        World.registerRespawn();
        //ChannelServer.getInstance(1).getMapFactory().getMap(910000000).spawnRandDrop(); //start it off
        ShutdownServer.registerMBean();
        //ServerConstants.registerMBean();
        PlayerNPC.loadAll();// touch - so we see database problems early...
        MapleMonsterInformationProvider.getInstance().addExtra();
        LoginServer.setOn(); //now or later
        System.out.println("·游戏服务器加载完毕‖共耗时：" + ((System.currentTimeMillis() - startTime) / 1000) + " 秒");
        RankingWorker.run();
    }

    public static class Shutdown implements Runnable {

        @Override
        public void run() {
            ShutdownServer.getInstance().run();
            ShutdownServer.getInstance().run();
        }
    }

    public static void main(final String args[]) throws InterruptedException {
        instance.run();
    }
}
