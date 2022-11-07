<%@ page contentType = "text/html" %>  
<%@ page pageEncoding = "utf-8" %>  
<HTML><body  bgcolor=pink>
<%  int x=12,y=9;
%>
<p style="font-family:宋体;font-size:36">
  计算表达式x+y+x%y,即<%= x %>+<%= y %>+<%= x %>%<%= y %>的值: 
  <%= x+y+x%y %>
<br>计算表达式x>y即<%= x %> > <%= y %>的值:
  <%= x>y %>
<br>计算表达式sin(<%=  Math.PI %>/2)的值:
    <%= Math.sin(Math.PI/2) %>
<br> 
<%  if(x-y>=0) {
%>    
       如果<%= x %>大于<%= y %>，计算<%= x %> - <%= y %>即
       <%= x-y %>的平方根：
       <%=Math.sqrt(x-y)%>
<%  }
%>
</p></body></HTML>
