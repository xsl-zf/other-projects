<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %> 
<HTML><body bgcolor = #ffccff>
<style>
   #textStyle{
      font-family:宋体;font-size:26;color:blue 
   }
</style>
<form action="giveTest.jsp" id ="textStyle" method=post >
 <input type=radio name="grade"  value="5" />初级
 <input type=radio name="grade"  value="7" checked="ok" />中级
 <input type=radio name="grade"  value="10" />高级
<br><input type="submit" id ="textStyle" value="提交"/>
<input type="reset" id ="textStyle" value="重置" />
</form> 
</body></HTML>
