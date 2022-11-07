<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<%@ page import="java.sql.*" %>
<%@ page import="java.util.LinkedList" %>
<%@ page import="java.util.Random" %>
<%!  public int [] getRandomNumber(int max,int amount){
        LinkedList<Integer> list = new LinkedList<Integer>();
        for(int i=1;i<=max;i++){
            list.add(i);
        }
        int result[] = new int[amount];
        while(amount>0){
           int index = new Random().nextInt(list.size());
           int m = list.remove(index);
           result[amount-1] = m;
           amount--;
        }
        return result;
    }
%>
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
    int count = 3;
    try{
      con = DriverManager.getConnection(url,user,password);//连接数据库。
      sql=con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,
                                    ResultSet.CONCUR_READ_ONLY);
      rs = sql.executeQuery("SELECT * FROM bookList ");
      rs.last();
      int max = rs.getRow();
      out.print("表共有"+max+"条记录,随机抽取"+count+"条记录：");
      int [] a =getRandomNumber(max,count);
      for(int i:a){ // i依次取数组每个单元的值。
         rs.absolute(i);      //游标移动到第i行
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
