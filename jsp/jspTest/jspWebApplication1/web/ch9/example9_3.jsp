<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<HTML><body>
选择要上传的文件：<br>
<form action=
      "example9_3_accept.jsp" method="post" ENCTYPE="multipart/form-data">
  <input type=FILE  name="file" size="38" /> 
  <br><input type="submit" name ="submit" value="submit" />  
</form>
</body></HTML>
