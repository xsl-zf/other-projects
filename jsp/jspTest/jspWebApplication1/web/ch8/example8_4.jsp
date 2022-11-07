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
       sql=con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,
                               ResultSet.CONCUR_UPDATABLE); //可更新数据库的结果集。
       rs = sql.executeQuery("SELECT * FROM bookList");
       rs.absolute(6);//游标移到第6行，第6行ISBN的值是8302084658。
       rs.updateFloat("price",56);//结果集第6行的price更新为56。
       rs.updateRow();//bookList表中第6行的price更新为56。
       rs.moveToInsertRow();//游标移到第插入行。
       rs.updateString(1,"8306084656");
       rs.updateString(2,"四月天");
       rs.updateFloat(3,39.2f);
       rs.updateString(4,"2020-5-20");//向插入行插入记录。
       rs.insertRow(); // 向bookList表中插入一条记录。
       rs.moveToInsertRow();//游标移到第插入行。
       rs.updateString(1,"6777564622");
       rs.updateString(2,"Java面向对象程序设计第3版（微课版）");
       rs.updateFloat(3,59.9f);
       rs.updateString(4,"2020-1-23");//向插入行插入记录。
       rs.insertRow(); // 向bookList表中插入一条记录。
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
       out.print("<h1>ISBN是主键，主键值不能有相同的");
    }
%>
</body></HTML>
