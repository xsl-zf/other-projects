<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %> 
<% request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="phone" class="tom.jiafei.Goods" scope="request"/>
<HTML><body bgcolor = #ffccff>
<style>
   #textStyle{
      font-family:宋体;font-size:20;color:blue 
   }
</style>
<p id = "textStyle">
<form action="" Method="post" >
手机名称:<input type=text id=textStyle name="name">
<br>手机价格:<input type=text id=textStyle name="price"/>
<br><input type=submit id=textStyle value="提交给本页面"/>
</form>
<form action="example5_4_b.jsp" Method="post" >
手机名称:<input type= text name="name" id=textStyle>
<br>手机价格:<input type=text name="price" id=textStyle>
<br><input type=submit id=textStyle value="提交给example5_4_b.jsp页面">
</form>
<jsp:setProperty name="phone" property="name" param ="name" />
<jsp:setProperty name="phone" property="price" param ="price"/>
<br><b>名称：<jsp:getProperty name="phone" property="name"/>
<br><b>名称：<%= phone.getName()%><br>
<br><b>价格：<jsp:getProperty name="phone" property="price"/>
<br><b>价格：<%=phone.getPrice()%>
</p></body></HTML>
