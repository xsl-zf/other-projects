<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<jsp:useBean id="count" class="red.star.ComputerCount" scope="application"/>
<HTML><body bgcolor = #ffccff>
<% if(session.isNew()) {
       count.addCount();
   }
%>
<h1>这是网站的example5_10_b.jsp页面
<br>网站访问量:
<jsp:getProperty name="count" property="number"/>             
<br>
<a href="example5_10_a.jsp">欢迎去example5_10_a.jsp参观</a>
</body></HTML>
