<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<%@ page import="java.io.*"%> 
<style>
   #tom{
      font-family:宋体;font-size:28;color:black 
   }
</style>
<HTML><body id =tom bgcolor=#FFBBFF>
<form action="handleFile" method="post" >
输入文件的路径(如:d:/2000):<br>
 <input type="text" id =tom name="filePath" size=12>
 <br>输入文件的名字(如:Hello.java):<br>
 <input type="text" id =tom name="fileName" size=18><br>
文件的编码类型：<br>
  <input type="radio" name="R" value="yes" />是utf-8 
  <input type="radio" name="R" value="no" checked="default"/>不是utf-8 
 <br><input type="submit" id =tom value="读取" name="submit">
</form>
</body></HTML>
