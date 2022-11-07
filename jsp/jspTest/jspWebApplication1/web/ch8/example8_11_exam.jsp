<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<style>
   #tom{
      font-family:宋体;font-size:20;color:blue 
   }
</style>
<jsp:useBean id="problem" class="save.data.Problem" scope="session"/>
<jsp:useBean id="paperBean" 
             class="save.data.TestPaperBean" scope="session"/>
<HTML><body bgcolor=#DEEFF9>
<% request.setCharacterEncoding("utf-8");
   problem = paperBean.getCurrentProblem();
%>
<p id = tom><%=problem.index%>.
<%= problem.content %>
</p>
<% if(problem.imageName.length()>0) {
%>   <image src =image/<%=problem.imageName%> width=300 height=260>
     </image>
<% }
%>
<form action="handleMess" id=tom method=post >
    <input type="radio" id=tom name="R" value=A /><%=problem.choiceA%> 
    <input type="radio" id=tom name="R" value=B /><%=problem.choiceB%>
<br><input type="radio" id=tom name="R" value=C /><%=problem.choiceC%>
    <input type="radio" id=tom name="R" value=D /><%=problem.choiceD%>
<br><input type="submit" id=tom value="确认(可反复确认)" name="submit" />
</form>
<form action="handleMess" method=post name=form>
  <input type="submit" id=tom value="上一题" name="submit" />
  <input type="submit" id=tom value="下一题" name="submit" />
</form> 
<form action="giveScore" method=post >
    <input type="submit" id=tom value="交卷" name="submit" />
</form> 
</body></HTML>  
