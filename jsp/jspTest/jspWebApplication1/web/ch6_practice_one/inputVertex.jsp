<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<style>
   #tom{
      font-family:宋体;font-size:26;color:blue 
   }
</style>
<%
String s ="(20,220)(220,20)(420,220)(220,420)";
%>
<HTML><body bgcolor=#ffccff>
<p id=tom>
<form action="drawPolygon" id= tom method=post>
输入多边形的顶点,格式是（m,n）<br>m,n为整数 0<=m<=800,0<=n<=600<br>
<textArea name="polygonVertex" id =tom rows=5 cols=30 >
<%= s %>
</textArea>
<br><input type=submit id=tom value="提交"/>
</form>
</p></body></HTML>
