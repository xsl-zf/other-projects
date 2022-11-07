<%@ page contentType = "text/html" %>  
<%@ page pageEncoding = "utf-8" %>  
<HTML><body>
<p style="font-family:宋体;font-size:36;color:blue">
<%! int count=0;                    //被用户共享的count。
     synchronized void setCount() {  //synchronized修饰的方法。
       count++;
     }
%>
<%  setCount();
    out.println("您是第"+count+"个访问本站的客户");   
%>
</p></body></HTML>
