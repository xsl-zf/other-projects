<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<HEAD><%@ include file="head.txt" %></HEAD>
<title>发布广告页面</title>
<style>
   #tom{
      font-family:宋体;font-size:26;color:black; 
   }
</style>
<HTML><body id =tom bgcolor=#FFBBFF>
 选择要上传的文件：<br>
<form action="upFile" method="post" ENCTYPE="multipart/form-data">
    <input type=FILE name="file" id =tom size="45"><br> 
    <input type="submit" id =tom name ="submit" value="提交">
</form>
</body></HTML>
