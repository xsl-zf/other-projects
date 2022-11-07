<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %> 
<%@ page import="java.sql.*" %>
<%@ page import="javax.sql.DataSource" %>
<%@ page import="javax.naming.Context" %>
<%@ page import="javax.naming.InitialContext" %>
<style>
   #tom{
      font-family:宋体;font-size:28;color:black 
   }
</style>
<%  request.setCharacterEncoding("utf-8");
    Connection con=null;
    PreparedStatement pre=null; //预处理语句。 
    ResultSet rs;
    Context  context =new InitialContext();
    Context  contextNeeded=(Context)context.lookup("java:comp/env");
    DataSource ds=
    (DataSource)contextNeeded.lookup("studentConn");//连接池。
    try{ 
      con = ds.getConnection();//使用连接池中的连接。
    }
    catch(Exception exp){ }
    String updateSQL = 
   "update scoreReport set name =?,mathScore=?,englishScore=? where id=?";
    String insertSQL ="insert into scoreReport values(?,?,?,?)";
    String deleteSQL ="delete from scoreReport where id =?";
    String querySQL = "select * from scoreReport where id =?";
    String mess = request.getParameter("submit");
    if(mess == null) mess ="";
    String id = request.getParameter("id");
    String name = request.getParameter("name");
    String math = request.getParameter("mathScore");
    String english = request.getParameter("englishScore");
    try{
      if(mess.contains("查看")){
         pre = con.prepareStatement(querySQL);
         pre.setString(1,id);
         rs = pre.executeQuery();
         if(rs.next()){
           id = rs.getString(1);
           name = rs.getString(2); 
           math = rs.getString(3);
           english = rs.getString(4);
         }
      }
      else if(mess.contains("更新")){
         pre = con.prepareStatement(updateSQL);
         pre.setString(1,name);
         pre.setInt(2,Integer.parseInt(math));
         pre.setInt(3,Integer.parseInt(english));
         pre.setString(4,id);
         pre.executeUpdate();
         out.print("<h3>更新成功</h3>");
      }
      else if(mess.contains("添加")){
         pre = con.prepareStatement(insertSQL);
         pre.setString(1,id);
         pre.setString(2,name);
         pre.setInt(3,Integer.parseInt(math));
         pre.setInt(4,Integer.parseInt(english));
         pre.executeUpdate();
         out.print("<h3>添加成功</h3>");
      }
       else if(mess.contains("删除")){
         pre = con.prepareStatement(deleteSQL); 
         pre.setString(1,id);
         pre.executeUpdate();
         out.print("<h3>删除成功</h3>");
      }
      con.close();//连接放回连接池。
    }
    catch(SQLException e) { 
       out.print("<h1>学号不能重复");
       try{
         con.close();//连接放回连接池。
       }
       catch(SQLException exp){}
    }
%>
<HTML><body bgcolor = #ffccff> 
<form action="" id=tom method=post >
输入学号查看或删除（信息）：<br>
  <input type="text"   id=tom name="id" size=10 /><br>
  <input type="submit" id=tom name="submit" value="查看"/>
  <input type="submit" id=tom name="submit" value="删除"/>
</form>
<form action="" id=tom method=post>
更新（或添加）
<input type="text" id=tom name="id" value =<%=id%> size=9 />
学号的信息：
<br>姓名:
<input type="text" id=tom name="name" value ='<%=name%>'size=11/>
<br>数学成绩:
<input type="text" id=tom name="mathScore" value ='<%=math%>'size=7 />
<br>英语成绩:
<input type="text" id=tom name="englishScore" value ='<%=english%>'size=7/>
<br><input type="submit" id=tom name="submit" value="更新"/>
    <input type="submit" id=tom name="submit" value="添加"/>
</form> 
</body></HTML>