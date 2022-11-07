<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<style>
   #tom{
      font-family:宋体;font-size:26;color:blue 
   }
</style>
<HTML><body bgcolor=#ffccff>
<p id=tom>
<form action="handleForward" id =tom  method=post>
<br>输入整数，用逗号或非数字字符分隔:<br>
<textArea name="number" id =tom rows=3 cols=32 ></textArea><br>
<input type=submit name = "submit" id =tom value="提交(看personOne的分析)"/><br>
<input type=submit name = "submit" id=tom  value="提交(看personTwo的分析)"/>
</form>
</p></body></HTML>