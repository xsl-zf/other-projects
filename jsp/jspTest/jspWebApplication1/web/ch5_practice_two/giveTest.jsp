<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %> 
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.Random" %>
<jsp:useBean id="memory" class="sea.water.Memory" scope="session" />
<HTML><body bgcolor = #ffccff>
<style>
   #tomStyle{
      font-family:宋体;font-size:36;color:blue 
   }
</style>
<%  String grade = request.getParameter("grade");
    String testString ="";//存放测试题目，例如★■★▲●。
    if(grade == null){
         memory.setGrade(memory.getGrade());
    }
    else {
         memory.setGrade(Integer.parseInt(grade));
    }
    if(memory.getIsGivenTestString()== false) {
         memory.giveTestString();
         testString = memory.getTestString();//得到测试的题目。
         memory.setIsGivenTestString(true);
    }
    else if(memory.getIsGivenTestString()== true){
         response.sendRedirect("answerTest.jsp");//定向到答题页面。
    }
%>
<p id = tomStyle>给5秒种记住您看到的字符序列:<br>
<%= testString %>
<br>5秒种后，将转到答题页。
<%  response.setHeader("refresh","5");
%>
</p></body></HTML>
