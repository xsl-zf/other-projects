<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<jsp:useBean id="play" class="save.data.Play" scope="session" />
<HEAD><%@ include file="head.txt" %></HEAD>
<title>浏览广告图</title>
<style>
   #textStyle{
      font-family:宋体;font-size:16;color:blue 
   }
</style>
<% request.setCharacterEncoding("utf-8");
%>
<%
   String logname = request.getParameter("logname");//获取用户名。
   String webDir = request.getContextPath();//获取当前Web服务目录的名称。
   webDir = webDir.substring(1); //去掉名称前面的目录符号：/。
%>
<jsp:setProperty  name="play" property="logname" value="<%= logname %>"/>
<jsp:setProperty  name="play" property="webDir" value="<%= webDir %>"/> 
<jsp:setProperty  name="play" property="index"  param = "index" /> 
<HTML><center><body bgcolor=pink><p id=textStyle>
</p><br><%=play.logname%>的广告：<br>
<image src = 
 image/<jsp:getProperty name="play" 
       property="showImage"/> width =300 height =200></image><br> 
<a href ="?index=<%=play.getIndex()+1 %>&logname=<%= play.logname %>">下一张</a>
<a href ="?index=<%=play.getIndex()-1 %>&logname=<%= play.logname %>">上一张</a>
</body><center></HTML>