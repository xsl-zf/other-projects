<%@ page contentType="text/html" %>  
<%@ page pageEncoding = "utf-8" %>  
<HTML><body bgcolor=yellow>
<h1> 用一张10元购买票价是2元的电影票一张。
<%  int backMoney = 0;
    backMoney = 10-2;
%>     
<jsp:forward page="change5.jsp" >
    <jsp:param name="number" value="<%= backMoney %>" />
    <jsp:param name="mess" value="" />
</jsp:forward> 
</body></HTML>

