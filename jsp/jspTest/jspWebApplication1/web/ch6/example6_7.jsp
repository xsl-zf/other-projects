<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<style>
   #textStyle{
      font-family:宋体;font-size:36;color:blue 
   }
</style>
<HTML><body bgcolor=#ffccff>
<p id=textStyle>
<form action="handleForward" id= textStyle method=post>
  输入数字（用逗号空格或其他非数字字符分隔）：<br>
<textArea name='digitData' id =textStyle rows=5 cols=30 >
</textArea>
<br><input type=submit id=textStyle name = submit value="提交(排序数字sort)"/>
<br><input type=submit id=textStyle name = submit value="提交(求数字代数和sum)"/>
</form>
</p></body></HTML>
