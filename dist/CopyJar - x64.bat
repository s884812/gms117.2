@echo off
title 
color 5f
xcopy /y /h *.jar* "%ProgramFiles%\Java\jdk1.7.0_51\jre\lib\ext"
xcopy /y /h *.jar* "%ProgramFiles%\Java\jre7\lib\ext"
xcopy /y /h *.jar* "%ProgramFiles%\Java\jdk1.7.0_51\jre\lib\security"
xcopy /y /h *.jar* "%ProgramFiles%\Java\jre7\lib\security"
echo Done.
pause
exit