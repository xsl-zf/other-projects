<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %> 
<% request.setCharacterEncoding("utf-8");
%>
<style>
   #textStyle{
      font-family:宋体;font-size:36;color:blue 
   }
</style>
<jsp:useBean id="file" class="tom.jiafei.ListFile" scope="request"/>
<HTML><body id=textStyle bgcolor = #ffccff>
<form action="" Method="post">
输入目录名(例如D:/2000)<input type=text name="dir" id=textStyle size=15/><br>
输入文件的扩展名(例如java)<input type=text name="extendsName" id=textStyle size=6>
<input type=submit id=textStyle value="提交"/>
</form>
<jsp:setProperty name="file" property="dir" param="dir"/>
<jsp:setProperty name="file" property="extendsName" param="extendsName"/>
<br><b>目录 <jsp:getProperty name="file" property="dir"/>中
 扩展名是 <jsp:getProperty name="file" property="extendsName"/> 的文件有：
<% String [] fileName = file.getAllFileName();
     if(fileName!=null) {
       for(int i=0;i<fileName.length;i++) {
          out.print("<br>"+fileName[i]); 
       } 
     }
%>
</body></HTML>
