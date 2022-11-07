<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<style>
   #tom{
      font-family:宋体;font-size:22;color:blue 
   }
</style>
<HTML><body id=tom bgcolor=#FFBBFE>
<form action="loadFile" method=post >
选择要下载的文件：<br>
  <select name="filePath" id=tom size=1>
     <Option Selected value="d:/2000/E.java">E.java
     <Option value="d:/2000/first.jsp">first.jsp
     <Option value="d:/2000/book.zip">book.zip
     <Option value="d:/2000/B.txt">A.txt
  </select> 
<br><input type="submit" id=tom value="提交" />
</form> 
</body></HTML> 
