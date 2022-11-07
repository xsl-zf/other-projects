<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<jsp:useBean id="loginBean" class="save.data.Login" scope="session"/>
<HEAD><%@ include file="head.txt" %></HEAD>
<title>登录页面</title>
<style>
   #tom{
      font-family:宋体;font-size:30;color:black 
   }
</style>
<HTML><body id=tom bgcolor =pink>
<form action="loginServlet" method="post">
登录用户:<input type=text id=tom name="logname" size=12><br>
输入密码:<input type=password id=tom name="password" size=12><br>
<input type=submit id=tom value="提交"><br>
登录反馈信息:<br>
登录名称:<br><jsp:getProperty name="loginBean" property="logname"/>
<jsp:getProperty name="loginBean" property="backNews"/>
</body></HTML>
