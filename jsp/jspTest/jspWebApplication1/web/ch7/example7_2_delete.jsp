<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<jsp:useBean id="wishWallBean" class ="save.data.ExpressWish_Bean" scope="application"/>
<HTML><body bgcolor = pink> 
<p style="font-family:宋体;font-size:18;color:blue">
管理员删除表白的页面。
<form action="" method=post >
输入密码:<input type="password" name="password"  size=12 /><br>
输入表白id:<input type="text" name="peopleId" size=6 /> 
<br><input type="submit" name="submit"  value="删除"/>
</form> 
<%  request.setCharacterEncoding("utf-8");
    String password=request.getParameter("password");
    String id=request.getParameter("peopleId");
    if(password == null ) password = "";
    if(id == null ) id = "";
    if(password.equals("123456")){
      wishWallBean.removeExpressWish(id);
    } 
%>
<a href="example7_2_show.jsp">查看表白墙</a>
</p></body></HTML>
