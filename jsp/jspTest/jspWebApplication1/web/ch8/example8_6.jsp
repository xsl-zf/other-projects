<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<%@ page import="java.sql.*" %>
<style>
   #tom{
      font-family:宋体;font-size:18;color:blue 
   }
</style>
<HTML><body bgcolor=#EEDDFF>
 <% Connection con;
    PreparedStatement pre=null; //预处理语句。
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
       String querySQL ="select * from booklist";
       //带?的SQL语句:
       String updateSQL = "update bookList set publishDate = ? where name=?";
       String insertSQL ="insert into bookList values(?,?,?,?)";
       pre=con.prepareStatement(updateSQL);//进行预处理返回预处理语句sql。
       pre.setString(1,"2000-10-10");
       pre.setString(2,"四月天");
       boolean boo =pre.execute(); //执行更新。
       pre.setString(1,"2021-6-20");
       pre.setString(2,"高等数学");
       boo =pre.execute(); //执行更新。
       pre=con.prepareStatement(insertSQL);//进行预处理返回预处理语句sql。
       pre.setString(1,"192306084659");
       pre.setString(2,"数据库原理");
       pre.setFloat(3,56.9f);
       pre.setString(4,"2019-2-10");
       int ok=pre.executeUpdate();; //插入新记录。
       pre.setString(1,"182306884758");
       pre.setString(2,"计算机组成原理");
       pre.setFloat(3,66.7f);
       pre.setString(4,"2020-8-10");
       ok =pre.executeUpdate(); //插入新记录。
       out.print("<h1>"+ok+" "+boo);
       pre = con.prepareStatement(querySQL);
       rs = pre.executeQuery();
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
