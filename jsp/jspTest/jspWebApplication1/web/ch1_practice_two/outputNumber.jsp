<%@ page contentType="text/html" %>  
<%@ page pageEncoding = "utf-8" %> 
<HTML><body>
<h3> 乘法表</h3>
<p style="font-family:宋体;font-size:15;color:green">
    <% 
       for(int j=1;j<=9;j++){
          for(int i=1;i<=j;i++) {
             int n=i*j;
             out.print(i+"×"+j+"="+n+" ");
          }
          out.print("<br>");
       } 
    %>
</p></body></HTML>
