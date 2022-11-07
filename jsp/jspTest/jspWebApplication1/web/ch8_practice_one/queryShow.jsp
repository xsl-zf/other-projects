<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<%@ page import="java.sql.*" %>
<style>
   #tom{
      font-family:宋体;font-size:18;color:blue 
   }
</style>
<HTML><body bgcolor=#EEDDFF>
<%  request.setCharacterEncoding("utf-8");
    String mess = request.getParameter("mess");
    mess = mess.trim();
    String submit = request.getParameter("submit");
    if(mess.length() == 0){
       response.sendRedirect("inputMess.jsp");
       return;
    }
    Connection con=null;
    Statement sql; 
    ResultSet rs;
    try{  //加载JDBC-MySQL8.0连接器:
       Class.forName("com.mysql.cj.jdbc.Driver"); 
    }
    catch(Exception e){
       out.print("<h1>"+e);
    }
    String url = "jdbc:mysql://localhost:3306/Student?"+
    "useSSL=false&serverTimezone=CST&characterEncoding=utf-8";
    String user ="root";
    String password ="";
    out.print("<table border=1>");
    out.print("<tr>");
    out.print("<th id=tom width=100>"+"学号");
    out.print("<th id=tom width=100>"+"姓名");
    out.print("<th id=tom width=50>"+"数学成绩");
    out.print("<th id=tom width=50>"+"英语成绩");
    out.print("</tr>"); 
    try{
       con = DriverManager.getConnection(url,user,password);//连接数据库。
       sql=con.createStatement(); 
       String SQL = null;
       if(submit.contains("姓名")){
          SQL = "SELECT * FROM scoreReport where name like '%"+mess+"%'";
       }
       else if(submit.contains("学号")){
          SQL = "SELECT * FROM scoreReport where id='"+mess+"'"; 
       }
       rs=sql.executeQuery(SQL);//查表。
       while(rs.next()) {
           out.print("<tr>");
           out.print("<td id=tom>"+rs.getString(1)+"</td>"); 
           out.print("<td id=tom>"+rs.getString(2)+"</td>");
           out.print("<td id=tom>"+rs.getInt(3)+"</td>");
           out.print("<td id=tom>"+rs.getInt(4)+"</td>");
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
