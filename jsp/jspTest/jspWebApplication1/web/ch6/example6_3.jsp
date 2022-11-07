<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<style>
   #textStyle{
      font-family:宋体;font-size:36;color:blue 
   }
</style>
<HTML><body bgcolor=#ffccff>
<form action="computeBill?discount=6" id= textStyle method=post>
  输入账单：<br>
<textArea name='billMess' id =textStyle rows=5 cols=30 >
 剁椒鱼头:62.9元,烤鸭:199元,红焖大虾:289.9元。
</textArea>
<br><input type=submit id=textStyle value="提交">
</form>
</body></HTML>
