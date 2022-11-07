<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<%@ page import="java.io.*"%> 
<style>
   #tom{
      font-family:宋体;font-size:28;color:blue 
   }
</style>
<HTML><body id =tom bgcolor=#FFBBFF>
<%  String jspPage=request.getServletPath(); //请求的页面的名称。
    out.print(jspPage+"<br>");
    String webDir = request.getContextPath();//获取当前Web服务目录的名称。
    out.print(webDir+"<br>");
    jspPage =jspPage.substring(1); //去掉名称前面的目录符号/。
    webDir = webDir.substring(1); //去掉名称前面的目录符号/。
    out.print(jspPage+"<br>");
     out.print(webDir+"<br>");
    File f= new File("");//文件f被认为在Tomcat安装目录的\bin中。
    String path = f.getAbsolutePath();
    out.print(path+"<br>");
    int index = path.indexOf("bin");
    String tomcatDir = path.substring(0,index);//tomcat的安装目录
    File file=new File(tomcatDir+"/webapps/"+webDir,jspPage);
%>
<b>
文件<%=file.getName()%>是可读的吗？<%=file.canRead()%>
<br>文件<%=file.getName()%>的长度：<%=file.length()%>字节。
<br><%=file.getName()%>的父目录（即所在目录）是:<br><%=file.getParent()%>
<br> <%=file.getName()%>的绝对路径是：<br><%=file.getAbsolutePath()%>
</b></body></HTML>
