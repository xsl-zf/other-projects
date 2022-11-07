<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<style>
   #textStyle{
      font-family:宋体;font-size:36;color:blue 
   }
</style>
<HTML><body bgcolor=#ffccff>
<form action="sumORproduct" id =textStyle method=post>
  输入数字，用逗号分隔提交给servlet(post方式)：
  <br><input type=text id =textStyle name="number"/>
  <input type=submit id =textStyle value="提交">
</form>
<form action="sumORproduct" id =textStyle method=get>
   输入数字，用逗号分隔提交给servlet(get方式)：
  <br><input type=text id =textStyle name="number"/>
  <input type=submit id =textStyle value="提交"/>
</form>
</body></HTML>
