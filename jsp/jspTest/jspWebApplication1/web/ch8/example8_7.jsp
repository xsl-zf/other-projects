<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<%@ page import="java.sql.*" %>
<HTML><body bgcolor=#EEDDFF>
<%  Connection con;
    PreparedStatement pre=null; //预处理语句。
    ResultSet rs;
    try{  //加载JDBC-MySQL8.0连接器:
       Class.forName("com.mysql.cj.jdbc.Driver"); 
    }
    catch(Exception e){
       out.print("<h1>"+e);
    }
    String url = "jdbc:mysql://localhost:3306/bank?"+
    "useSSL=false&serverTimezone=CST&characterEncoding=utf-8";
    String user ="root";
    String password ="";
    try {
       con = DriverManager.getConnection(url,user,password);//连接数据库。
    }
    catch(SQLException exp){
       return;
    }
    try{
       String querySQL ="select * from user where id=?";
       pre=con.prepareStatement(querySQL);
       pre.setString(1,"0001");
       rs = pre.executeQuery();
       rs.next();
       double userOne = rs.getDouble(3);
       out.print("转帐前:"+rs.getString(1)+","+rs.getString(2)+","+userOne);
       pre.setString(1,"0002");
       rs = pre.executeQuery();
       rs.next();
       double userTwo = rs.getDouble(3);
       out.print("<br>转帐前:"+rs.getString(1)+","+rs.getString(2)+","+userTwo);
       String updateSQL = "update user set userMoney =? where id =?";
       con.setAutoCommit(false);       //关闭自动提交模式
       pre=con.prepareStatement(updateSQL);
       int n = 50;
       pre.setDouble(1,userOne-n);   //减少50。
       pre.setString(2,"0001");   
       pre.execute(); //执行更新（但不立刻生效）。
       pre.setDouble(1,userTwo+n);
       pre.setString(2,"0002");
       pre.execute(); //执行更新（但不立刻生效）。
       con.commit(); //开始事务处理,如果发生异常直接执行catch块
       con.setAutoCommit(true); //恢复自动提交模式
       querySQL ="select * from user where id = ? or id = ?";
       pre=con.prepareStatement(querySQL);
       pre.setString(1,"0001");
       pre.setString(2,"0002");
       rs = pre.executeQuery();
       while(rs.next()) {
          out.print("<br>");
          out.print("转帐后:"+rs.getString(1)+","+rs.getString(2)+","+
                     rs.getString(3));
       }
       con.close();
    }
    catch(SQLException e) { 
       try{  con.rollback(); //撤消事务所做的操作
       }
       catch(SQLException exp){}
    }
%>
</body></HTML> 
