<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<%@ page import="java.io.*"%> 
<style>
   #tom{
      font-family:宋体;font-size:28;color:blue 
   }
</style>
<HTML><body id =tom bgcolor=#FFBBFF>
<%  StringBuffer sourceCode=new StringBuffer();//存放JSP文件的源代码。
    request.setCharacterEncoding("utf-8");
    String mess = request.getParameter("submit");
    if(mess==null)
         mess="";
    if(mess.contains("源码")){
       response.setContentType("text/plain");
       String jspPage=request.getServletPath(); 
       String webDir = request.getContextPath();
       jspPage =jspPage.substring(1); 
       webDir = webDir.substring(1); 
       File f= new File("");
       String path = f.getAbsolutePath();
       int index = path.indexOf("bin");
       String tomcatDir = path.substring(0,index);
       File jspFile=new File(tomcatDir+"/webapps/"+webDir,jspPage);
       try{ 
          RandomAccessFile randomAccess = 
          new RandomAccessFile(jspFile,"r");
          String s=null;
          StringBuffer stringbuffer=new StringBuffer();
          while ((s=randomAccess.readLine())!=null){ 
              byte b[] = s.getBytes("iso-8859-1");
              sourceCode.append("\n"+new String(b,"utf-8"));
          }
                  
       }
       catch(Exception exp){
           out.println(exp);
       } 
    }
%>
JSP文件源代码：<br>
<%=sourceCode %>
<br>
<form action="" method=post > 
<input type="submit" id=tom name ="submit" value="看本页面的源码" />
</form> 
</body></HTML>
