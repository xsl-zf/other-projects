<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<jsp:useBean id="menu" class ="save.data.MenuBean" scope="session"/>
<style>
   #tom{
      font-family:宋体;font-size:26;color:blue 
   }
</style>
<HTML><body bgcolor=pink>
<table border=1> 
   <tr><th id=tom>序号</th><th id=tom>食物名称</th><th id=tom>价格</th>
<%  request.setCharacterEncoding("utf-8");
    String index = request.getParameter("删除");
    if(index!=null){
       menu.removeFood(Integer.parseInt(index));
    }
    for(int i=0;i<menu.size();i++){
        out.print("<tr>");
        out.print("<td id=tom>"+(i+1)+"</td>");
        out.print("<td id=tom>"+menu.getFoodName(i)+"</td>");
        out.print("<td id=tom>"+menu.getPrice(i)+"</td>");
        out.print("<td ><form action ="+"showMenu.jsp"+" method=post>"); 
        out.print("<input type = hidden name = 删除 value = "+i+" />");
        out.print("<input type = submit  value = 删除该食物 />");
        out.print("</form></td>");
        out.print("</tr>");
    } 
   
%> </table>
<p id = tom>
餐单总额(共有<%=menu.size()%>道食物):  
<jsp:getProperty name="menu" property="totalPrice" /><br>
点餐时间:
<jsp:getProperty  name="menu" property="time" /></p>
<a id =tom href="inputMenu.jsp">继续点餐</a>
</body></HTML>
