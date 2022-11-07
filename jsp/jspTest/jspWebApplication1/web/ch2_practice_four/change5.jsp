<%@ page contentType="text/html" %>  
<%@ page pageEncoding = "utf-8" %>  
<HTML><body bgcolor=cyan>
<%  request.setCharacterEncoding("gb2312");
    String backMoneyStr=request.getParameter("number");
    String mess=request.getParameter("mess");
    int backMoney = 0;
    int count = 0;
    int coin = 5;
    backMoney = Integer.parseInt(backMoneyStr);
    while(true){
       count ++;
       if(count*coin>backMoney)
         break;
    }
    backMoney =backMoney-(count-1)*coin;
    mess = mess+"<br>找赎"+(count-1)+"张面值"+coin+"元的钱币钱";
   if(backMoney>0) {
%>    <jsp:forward page="change2.jsp" >
        <jsp:param name="number" value="<%= backMoney %>" />
         <jsp:param name="mess" value="<%= mess %>" />
      </jsp:forward> 
<%  }
    else {
       out.print("<br>"+mess);
%>     <br><embed src = "movie/movie.mp4" width = 300 height = 270 autostart = false>
         看电影
       </embed>
<%  }
%>  
</body></HTML>
 