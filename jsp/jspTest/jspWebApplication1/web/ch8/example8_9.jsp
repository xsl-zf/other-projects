<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<%@ page import="java.sql.*" %>
<style>
   #tom{
      font-family:宋体;font-size:18;color:blue 
   }
</style>
<HTML><body bgcolor=#EEDDFF>
 <% Connection con=null;
    Statement sql; 
    ResultSet rs;
    try{  //加载JDBC-Access连接器:
       Class.forName("com.hxtt.sql.access.AccessDriver"); 
    }
    catch(Exception e){
       out.print("<h1>"+e);
    }
    String path = "./bookDatabase.accdb";
    String loginName ="";
    String password ="";
    out.print("<table border=1>");
    out.print("<tr>");
    out.print("<th id=tom width=100>"+"ISBN");
    out.print("<th id=tom width=100>"+"名称");
    out.print("<th id=tom width=50>"+"价格");
    out.print("<th id=tom width=50>"+"日期");
    out.print("</tr>"); 
    try{
       con = DriverManager.getConnection("jdbc:Access://"+path,loginName, password); //连接数据库。
       sql=con.createStatement(); 
       String SQL = "SELECT * FROM bookList";//SQL语句。
       rs=sql.executeQuery(SQL);//查表。
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
