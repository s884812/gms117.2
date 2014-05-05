@echo off
@title Global MapleStory Ver.117.1
set CLASSPATH=.;dist\*
java -client -Dnet.sf.odinms.wzpath=wz server.Start
pause