<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %> 
<jsp:useBean id="memory" class="sea.water.Memory" scope="session" />
<HTML><body bgcolor = #ffccff>
<style>
   #tomStyle{
      font-family:宋体;font-size:26;color:blue 
   }
</style>
<form action="judgeAnswer.jsp" id = tomStyle method=post>
您记住的字符序列是怎样的，请选择:
<%
  int n = memory.getGrade();
  memory.setIsGivenTestString(false);
  for(int i=1;i<=n;i++){
      out.print("<br>第"+i+"个字符:");
      out.print("<input type=radio id = tomStyle name=R"+i+" value='★'/>★"+
              "<input type=radio id =tomStyle name=R"+i+" value='●' />●"+ 
              "<input type=radio id =tomStyle name=R"+i+" value='▲' />▲"+ 
              "<input type=radio id =tomStyle name=R"+i+" value='■' />■"+ 
              "<input type=radio id =tomStyle name=R"+i+" value='◆' />◆");
  } 
%>
<br><input type="submit"  id=tomStyle value="提交"/>
<input type="reset" id=tomStyle value="重置" />
</form> 
</body></HTML>
