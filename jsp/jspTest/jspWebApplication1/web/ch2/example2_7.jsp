<%@ page contentType = "text/html" %>  
<%@ page pageEncoding = "utf-8" %>  
<HTML><body>
<%-- 下面是Java程序片 --%>
<%  String str = "C:\\jspfile\\example2_7.jsp"; 
    int index = str.lastIndexOf("\\"); 
    str = str.substring(index+1);
%>
<!-- 以下字体的颜色为蓝色 -->
<p style="font-family:黑体;font-size:20;color:blue"> 
抽取字符串<%= str %>中的JSP文件名字. 
<!-- 以下字体的颜色为红色 -->
<font size="6" color="red"><br>
<%-- 下面是Java表达式 --%> 
<%= str %>
</font>
</p>
</body></HTML>  
