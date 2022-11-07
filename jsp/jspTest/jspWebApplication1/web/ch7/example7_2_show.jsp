<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<jsp:useBean id="wishWallBean" class ="save.data.ExpressWish_Bean" scope="application"/>
<style>
   #tom{
      font-family:宋体;font-size:26;color:blue 
   }
</style>
<HTML><body bgcolor=white>
<table border=1> 
   <tr><th id=tom>id</th><th id=tom>表白人</th><th id=tom>标题</th>
       <th id=tom>时间</th><th id=tom>表白内容</th>
<%  for(int i=0;i<wishWallBean.size();i++){
        out.print("<tr>");
        out.print("<td id=tom>"+wishWallBean.getId(i)+"</td>");
        out.print("<td id=tom>"+wishWallBean.getPeopleName(i)+"</td>");
        out.print("<td id=tom>"+wishWallBean.getTitle(i)+"</td>");
        out.print("<td id=tom>"+wishWallBean.getDateTime(i)+"</td>");
        out.print("<td ><textArea rows=5 cols=20 id=tom>"+wishWallBean.getContent(i)+
                  "</textArea></td>");
        out.print("</tr>");
    } 
%> </table>  
<a id =tom href="example7_2.jsp">去表白</a>
</body></HTML>