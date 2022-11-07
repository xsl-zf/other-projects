<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<HTML><body bgcolor=cyan>
<p style="font-family:宋体;font-size:36;color:blue"> 
<%--通过JSP标记，用户获得一个id是girl的session bean: --%>
<jsp:useBean id="girl" class="tom.jiafei.Circle" scope="session" />
<br>这里是example5_2_a.jsp页面。
<br>圆的半径是<%=girl.getRadius()%>
<br>单击超链接，到其他页面看圆的半径。
<a href="example5_2_b.jsp"><br>example5_2_b.jsp</a>
</p></body></HTML> 
