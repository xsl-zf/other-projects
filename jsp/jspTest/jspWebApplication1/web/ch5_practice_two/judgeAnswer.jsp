<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %> 
<jsp:useBean id="memory" class="sea.water.Memory" scope="session" />
<HTML><body bgcolor = white >
<p style="font-family:宋体;font-size:26;color:blue"> 
<%   memory.setIsGivenTestString(false);
     request.setCharacterEncoding("utf-8"); 
     int n = memory.getGrade(); 
     StringBuffer buffer = new StringBuffer();
     for(int i=1;i<=n;i++){
        buffer.append(request.getParameter("R"+i)); //获取radio提交的值。
        out.print(""+request.getParameter("R"+i));
     }
     String userAnswer = new String(buffer);
     String testString = memory.getTestString();//得到测试的题目。
     if(testString.equals(userAnswer)){
         out.print("您记忆不错");
     }
     else {
         out.print("您没记忆住额!答案是:<br>"+testString);
     }
%>
<br><a href = "giveTest.jsp">返回，继续练习记忆</a>
<br><a href = "choiceGrade.jsp">重新选择级别</a>
</p></body></HTML>
