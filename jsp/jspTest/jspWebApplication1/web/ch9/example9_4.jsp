<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<jsp:useBean id="fileBean" class="save.data.Example9_4_Bean" scope="request"/>
<style>
   #tom{
      font-family:宋体;font-size:22;color:blue 
   }
</style>
<HTML><body id =tom bgcolor=#FFBBFF>
 选择要上传的文件：<br>
<form action="upFile" method="post" ENCTYPE="multipart/form-data">
    <input type=FILE name="file" id =tom size="45"><br> 
    <input type="submit" id =tom name ="submit" value="提交">
</form>
上传的文件名字：
  <jsp:getProperty name="fileBean" property="fileName"/> <br> 
   上传反馈：
  <jsp:getProperty name="fileBean" property="mess"/>
<%
    String name=fileBean.getFileName();
    boolean boo =name.endsWith(".jpg");
    boo = boo||name.endsWith(".gif");
    if(boo) {
 %>  <br><image src = "image/<%=name%>" width=280 height =220>
       <%=name %></image>
 <% }
    else {
 %>   <br><%=name %>
 <% }
 %>
</body></HTML>
