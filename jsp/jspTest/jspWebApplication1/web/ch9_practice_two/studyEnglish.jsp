<%@ page import = "java.io.*" %>
<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<jsp:useBean id="english" class ="save.data.EnglishBean" scope="request"/>
<style>
   #tom{
      font-family:宋体;font-size:22;color:blue 
   }
</style>
<HTML><body id =tom bgcolor=#ffccff>
<form action="readFile" id= tom method=post>
选择一篇课文：<br>
<%  File f = new File(".");//文件f被认为在Tomcat安装目录的\bin中。
    String jspPage=request.getServletPath(); 
    String webDir = request.getContextPath();//获取当前Web服务目录的名称。
    jspPage =jspPage.substring(1); //去掉名称前面的目录符号/。
    webDir = webDir.substring(1); //去掉名称前面的目录符号/。
    String path = f.getAbsolutePath();
    int index = path.indexOf("bin");
    String tomcatDir = path.substring(0,index);
    String filePath =tomcatDir+"/webapps/"+webDir+"/englishText";
    File fileDir=new File(filePath);
    String name [] = fileDir.list();//返回englishText中全部文本文件的名字。
%>  <select id= tom name="fileName" size =1>
<%  for(int i=0;i<name.length;i++){
%>    <option selected value='<%=name[i]%>'/><%=name[i]%>
<%  }
%>  </select> 
    <input type=hidden name='filePath' value='<%=filePath%>' />
<br><input type=submit id=tom value="学习" /><br>
<textArea id=tom rows=15 cols =80 ><%=english.getFileContent()%>
</textArea><br>
<% if(english.getFileName().length()>0) {
%><br>
  <%=english.getFileAudio()%>:<br>
  <embed src ='englishAudio/<%=english.getFileAudio()%>' height =56 autostart='false'>
  </embed>
<%}
%>
</form>
</body></HTML>
