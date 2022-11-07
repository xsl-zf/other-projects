<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<jsp:useBean id="userBean" class="save.data.Register" scope="request"/>
<HEAD><%@ include file="head.txt" %></HEAD>
<title>注册页面</title>
<style>
   #ok{
      font-family:宋体;font-size:26;color:black; 
   }
</style>
<HTML><body id=ok bgcolor =cyan>
<form action="registerServlet" id=ok method="post">
用户名由字母、数字、下划线构成，*注释的项必须填写。<br>
*用户名称:<input type=text id=ok name="logname" /><br>
*用户密码:<input type=password id=ok name="password"/><br>
*重复密码:<input type=password id=ok name="again_password"/><br>
<input type=submit  id=ok value="提交"><tr>
</form>
注册反馈：
<jsp:getProperty name="userBean" property="logname"/>
<jsp:getProperty name="userBean"  property="backNews" /> 
</body></HTML>
