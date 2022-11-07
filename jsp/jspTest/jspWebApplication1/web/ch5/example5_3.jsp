<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %> 
<HTML><body bgcolor = #ffccff>
<p style="font-family:宋体;font-size:36;color:blue"> 
<jsp:useBean id="boy" class="tom.jiafei.Circle" scope="application" />
圆的初始半径是:<%=boy.getRadius()%>
<% boy.setRadius(2.718);
%>
<br><b>修改后的圆的半径是:<%=boy.getRadius()%>
</p></body></HTML>     
