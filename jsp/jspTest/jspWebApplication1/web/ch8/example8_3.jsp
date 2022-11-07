<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<%@ page import="java.sql.*" %>
<style>
   #tom{
      font-family:宋体;font-size:18;color:blue 
   }
</style>
<HTML><body bgcolor=#EEDDFF>
<%  Connection con=null;
    Statement sql; 
    ResultSet rs;
    try{  //加载JDBC-MySQL8.0连接器:
       Class.forName("com.mysql.cj.jdbc.Driver"); 
    }
    catch(Exception e){
       out.print("<h1>"+e);
    }
    String url = "jdbc:mysql://localhost:3306/bookDatabase?"+
    "useSSL=false&serverTimezone=CST&characterEncoding=utf-8";
    String user ="root";
    String password ="";
    out.print("<table border=1>");
    out.print("<tr>");
    out.print("<th id=tom width=100>"+"ISBN");
    out.print("<th id=tom width=100>"+"名称");
    out.print("<th id=tom width=50>"+"价格");
    out.print("<th id=tom width=50>"+"日期");
    out.print("</tr>"); 
    try{
       con = DriverManager.getConnection(url,user,password);//连接数据库。
       sql=con.createStatement(); 
       String updateSQL = 
       "update bookList set publishDate = '2022-12-26' where name='高等数学'";//更新语句。
       String indsertSQL = 
       "insert into bookList values('12306084657','春天',35.8,'2020-3-20'),"+
        "('15777564629','冬日', 29.9,'2019-12-23')"; //插入语句。
       String deleteSQL = 
       "delete from bookList where ISBN = '9352914657'";//删除语句。
       int ok = sql.executeUpdate(updateSQL); // 更新。
       ok = sql.executeUpdate(indsertSQL); // 插入。
       ok = sql.executeUpdate(deleteSQL); // 删除。 
       out.print("<h1>"+ok);
       rs=sql.executeQuery("SELECT * FROM bookList");//查表。
       while(rs.next()) {
           out.print("<tr>");
           out.print("<td id=tom>"+rs.getString(1)+"</td>"); 
           out.print("<td id=tom>"+rs.getString(2)+"</td>");
           out.print("<td id=tom>"+rs.getFloat(3)+"</td>");
           out.print("<td id=tom>"+rs.getDate(4)+"</td>");
           out.print("</tr>") ; 
       }
       out.print("</table>");
       con.close();
    }
    catch(SQLException e) { 
       out.print("<h1>"+e);
    }
%>
</body></HTML>
