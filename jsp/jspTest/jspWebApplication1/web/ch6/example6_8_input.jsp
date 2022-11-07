<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<style>
   #tom{
      font-family:宋体;font-size:26;color:blue 
   }
</style>
<%  String message=(String)session.getAttribute("message"); //获取会话中的信息
%>
<HTML><body bgcolor=#ffccff>
<table border=1>
<form action="guess" method=post>
 <tr><td id =tom> 输入您的猜测（a~z之间的字母）:</td>
 <td><input type=text name=clientGuessLetter id =tom size=10/>
     <input type=submit id =tom value="提交"/></td>
 </tr><td id =tom> 提示信息:</td>
      <td id =tom> <%= message%></td>
</form>
<form action="example6_8.jsp" method=post>
  <tr><td id =tom>单击按钮重新开始: </td>
  <td id =tom><input type=submit id =tom value="随机得到一个字母"/></td>
  </tr>
</form>
</body></HTML>
