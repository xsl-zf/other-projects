package handle.data;
import save.data.Record_Bean;
import java.sql.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.sql.DataSource;
import javax.naming.Context;
import javax.naming.InitialContext;
public class QueryAllRecord extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void service(HttpServletRequest request,
               HttpServletResponse response) 
               throws ServletException,IOException{
      request.setCharacterEncoding("utf-8");
      String idNumber= request.getParameter("fenleiNumber");
      if(idNumber==null) 
          idNumber="1";
      int id = Integer.parseInt(idNumber);
      HttpSession session=request.getSession(true); 
      Connection con=null; 
      Record_Bean dataBean=null;
      try{ 
         dataBean=(Record_Bean)session.getAttribute("dataBean");
         if(dataBean==null){
            dataBean=new Record_Bean();  //����bean��
            session.setAttribute("dataBean",dataBean);//��session bean��
         }
      }
      catch(Exception exp){} 
      try{ 
          Context  context = new InitialContext();
          Context  contextNeeded=(Context)context.lookup("java:comp/env");
          DataSource ds=
          (DataSource)contextNeeded.lookup("mobileConn");//������ӳء�
           con= ds.getConnection();//ʹ�����ӳ��е����ӡ�
          Statement sql=con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,                                                                                             ResultSet.CONCUR_READ_ONLY);
          String query= 
          "SELECT mobile_version,mobile_name,mobile_made,mobile_price "+
           "FROM mobileForm where id="+id;
          ResultSet rs=sql.executeQuery(query);
          ResultSetMetaData metaData = rs.getMetaData();
          int columnCount = metaData.getColumnCount(); //�õ��������������
          rs.last();
          int rows=rs.getRow();  //�õ���¼����
          String [][] tableRecord=dataBean.getTableRecord();
          tableRecord = new String[rows][columnCount];
          rs.beforeFirst();
          int i=0;
          while(rs.next()){
            for(int k=0;k<columnCount;k++) 
              tableRecord[i][k] = rs.getString(k+1);
              i++; 
          }
          dataBean.setTableRecord(tableRecord); //����bean��
          con.close(); //���ӷ������ӳء�
          response.sendRedirect("byPageShow.jsp"); //�ض���
     }
     catch(Exception e){
          response.getWriter().print(""+e);
     } 
     finally{
        try{
             con.close();
        }
        catch(Exception ee){}
     }  
   }
}  
