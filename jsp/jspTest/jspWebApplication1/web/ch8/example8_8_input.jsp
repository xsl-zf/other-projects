<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<style>
   #tom{
      font-family:宋体;font-size:26;color:blue 
   }
</style>
<HTML><body bgcolor=#ffccff>
<form action="query" id=tom method=post>
<b>数据库<input type='text' id=tom name='dataBase' value ='bookDatabase'/>
<br>表名<input type='text' id=tom name='tableName' value='bookList'/>
<br>用户名(默认root)<input type='text' id=tom name='user' value='root'/>
<br>用户密码(默认空)<input type='text'id=tom name='password'/>
<br><input type='submit' name='submit' id=tom value='提交'>
</form>
</body></HTML>  
