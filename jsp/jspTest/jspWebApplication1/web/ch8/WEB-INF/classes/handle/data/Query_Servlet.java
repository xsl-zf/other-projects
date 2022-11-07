package handle.data;
import save.data.Record_Bean;
import java.sql.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class Query_Servlet extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
      try {  Class.forName("com.mysql.cj.jdbc.Driver");//����JDBC-MySQL8.0�������� 
      }
      catch(Exception e){} 
   }
   public void service(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
      request.setCharacterEncoding("utf-8");
      String dataBase= request.getParameter("dataBase");
      String tableName= request.getParameter("tableName");
      String user= request.getParameter("user");
      String password= request.getParameter("password");
      boolean boo =( dataBase==null||dataBase.length()==0);
      boo = boo||( tableName==null||tableName.length()==0);
      boo = boo||( user==null||user.length()==0);
      if(boo) {
         response.sendRedirect("example8_8_input.jsp");
         return;
      }
      HttpSession session=request.getSession(true); 
      Connection con=null; 
      Record_Bean recordBean=null;
      try{ 
         recordBean=(Record_Bean)session.getAttribute("recordBean");
         if(recordBean==null){
            recordBean=new Record_Bean();  //����bean��
            session.setAttribute("recordBean",recordBean);//recordBean��session bean��
         }
      }
      catch(Exception exp){} 
      String url = "jdbc:mysql://127.0.0.1:3306/"+dataBase+"?"+
      "useSSL=false&serverTimezone=CST&characterEncoding=utf-8";
      try{ 
          con=DriverManager.getConnection(url,user,password);
          Statement sql=con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,                                                                                            ResultSet.CONCUR_READ_ONLY);
          ResultSet rs=sql.executeQuery("SELECT * FROM "+tableName);
          ResultSetMetaData metaData = rs.getMetaData();
          int columnCount = metaData.getColumnCount(); //�õ��������������
          String []columnName = new String[columnCount];
          for(int i=0;i<columnName.length;i++) {
             columnName[i] = metaData.getColumnName(i+1); //�õ�������
          }
          recordBean.setColumnName(columnName);   //����bean��
          rs.last();
          int rows=rs.getRow();  //�õ���¼����
          String [][] tableRecord=recordBean.getTableRecord();
          tableRecord = new String[rows][columnCount];
          rs.beforeFirst();
          int i=0;
          while(rs.next()){
            for(int k=0;k<columnCount;k++) 
              tableRecord[i][k] = rs.getString(k+1);
              i++; 
          }
          recordBean.setTableRecord(tableRecord); //����bean��
          con.close();
          response.sendRedirect("example8_8_show.jsp");  //�ض���
     }
     catch(SQLException e){
          response.getWriter().print("<h2>"+e);
          System.out.println(e);
     }  
   }
}
