<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<HTML><body bgcolor= #ffccff>
<p style="font-family:黑体;font-size:36;color:blue"> 
<%--用户的id是girl的session bean: --%>
<jsp:useBean id="girl" class="tom.jiafei.Circle" scope="session"/>
<i><br>这里是example5_2_b.jsp页面
<br>当前圆的半径是： <%=girl.getRadius()%>
<% girl.setRadius(1.618);
%>
<br>修改后的圆的半径是<%=girl.getRadius()%></i>
<br>单击超链接，到其他页面看圆的半径。
<a href="example5_2_a.jsp"><br>example5_2_a.jsp</a>
</p></body></HTML>  
