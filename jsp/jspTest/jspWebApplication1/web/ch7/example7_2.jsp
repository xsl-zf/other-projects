<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<HTML>
<style>
   #tom{
      font-family:宋体;font-size:18;color:blue 
   }
</style>
<body bgcolor = #ffccff>
<form action="handleExpress" id="tom" method="post" >
表白者：<input type="text" id = "tom" name="peopleName" size = 28/>
<br>标题：<input type="text" id = "tom" name="title" size = 30/>
<br>内容：<br>
<textArea name="contents" id = "tom" rows="10" cols=36 >
</textArea>
<br><input type="submit" id="tom" value="提交表白" name="submit"/>
</form>
<p id="tom">
<a href="example7_2_show.jsp">查看表白墙</a>
</p></body></HTML> 
