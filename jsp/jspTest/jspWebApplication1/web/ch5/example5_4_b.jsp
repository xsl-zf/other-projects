<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<% request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="phone" class="tom.jiafei.Goods" scope="page"/>
<HTML><body bgcolor= cyan>
<p style="font-family:黑体;font-size:20;color:red"> 
<jsp:setProperty name="phone" property="name" param ="name" />
<jsp:setProperty name="phone" property="price" param ="price"/>
<br><b>名称：<jsp:getProperty name="phone" property="name"/>
<br><b>名称：<%= phone.getName()%><br>
<br><b>价格：<jsp:getProperty name="phone" property="price"/>
<br><b>价格：<%=phone.getPrice()%>
</p></body></HTML>