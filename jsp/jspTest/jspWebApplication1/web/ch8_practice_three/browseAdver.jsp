<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<%@ page import="java.sql.*" %>
<%@ page import="javax.sql.DataSource" %>
<%@ page import="javax.naming.Context" %>
<%@ page import="javax.naming.InitialContext" %>
<HEAD><%@ include file="head.txt" %></HEAD>
<title>浏览广告页面</title>
<style>
   #tom{
      font-family:宋体;font-size:26;color:black; 
   }
</style>
<HTML><body id=tom bgcolor=#EEDDFF>
 <% 
    Context  context = new InitialContext();
    Context  contextNeeded = (Context)context.lookup("java:comp/env");
    DataSource  ds = (DataSource)contextNeeded.lookup("adverConn");//连接池。
    Connection con =null;
    Statement sql; 
    ResultSet rs;
    try{
       con = ds.getConnection();//使用连接池中的连接。
       sql=con.createStatement(); 
       String SQL = "SELECT logname FROM user";//SQL语句。
       rs=sql.executeQuery(SQL);//查表。
       while(rs.next()) {
           String logname = rs.getString(1);
           out.print("<br><a href = showAdver.jsp?logname="+logname+
           ">浏览"+logname+"发布的广告</a>"); 
       }
       con.close() ;//连接返回连接池。
    }
    catch(SQLException e) { 
       out.print("<h1>"+e);
    }
    finally{
        try{
          con.close();
        }
        catch(Exception ee){}
   } 
%>
</body></HTML>
