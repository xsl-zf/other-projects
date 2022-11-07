<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %> 
<style>
   #tom{
      font-family:宋体;font-size:28;color:black 
   }
</style>
<HTML><body bgcolor = #ffccff> 
<form action="queryShow.jsp" id=tom method=post >
输入学号或姓名查询成绩：<br>
  <input type="text" id=tom name="mess" /><br>
  <input type="submit" id=tom name="submit" value="按姓名查询"/>
  <input type="submit" id=tom name="submit" value="按学号查询"/>
</form> 
</body></HTML>