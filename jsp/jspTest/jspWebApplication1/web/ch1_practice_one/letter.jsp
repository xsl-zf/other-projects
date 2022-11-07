<%@ page contentType="text/html" %>  
<%@ page pageEncoding = "utf-8" %>  
<HTML>
<BODY background = "image/java.jpg" >
<p style="font-family:黑体;font-size:36">
<br> 英文字母表：</br>
</p>
<p style="font-family:宋体;font-size:25;color:blue">
<% char upperCase ; //存放大写字母
   char lowerCase ; 
   for(upperCase ='A';upperCase <= 'Z';upperCase++) {
       lowerCase = (char)(upperCase+32);
       out.print(upperCase+"("+lowerCase+")"+" ");
       if(upperCase == 'M')
           out.print("<br>");
   }
%>
</p>
</BODY></HTML>
