<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<style>
   #textStyle{
      font-family:宋体;font-size:36;color:blue 
   }
</style>
<HTML><body bgcolor=#ffccff>
<% double r = 100.8;
%>
<p id=textStyle>
<a href ="circle?mess=area&radius=<%= r %>">看半径<%=r%>圆的面积。</a><br>
<a href ="circle?mess=geometry&radius=<%=r%>">看半径<%=r%>圆的图形。</a>
</p></body></HTML>
