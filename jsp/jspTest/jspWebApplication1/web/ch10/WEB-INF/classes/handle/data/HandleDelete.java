package handle.data;
import save.data.Login;
import javax.sql.DataSource;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class HandleDelete extends HttpServlet {
   public void init(ServletConfig config) throws ServletException { 
      super.init(config);
   }
   public  void  service(HttpServletRequest request,
                         HttpServletResponse response) 
                         throws ServletException,IOException {
      request.setCharacterEncoding("utf-8");
      String goodsId = request.getParameter("goodsId");
      Connection con=null;
      PreparedStatement pre=null; //Ԥ������䡣 
      Login loginBean=null;
      HttpSession session=request.getSession(true);
      try{ 
         loginBean = (Login)session.getAttribute("loginBean");
         if(loginBean==null){
           response.sendRedirect("login.jsp");//�ض��򵽵�¼ҳ�档
           return;
         }
         else {
           boolean b =loginBean.getLogname()==null||
                   loginBean.getLogname().length()==0;
           if(b){
              response.sendRedirect("login.jsp");//�ض��򵽵�¼ҳ�档
              return;
           }
         }
      }
      catch(Exception exp){
           response.sendRedirect("login.jsp");//�ض��򵽵�¼ҳ�档
           return;
      }
      try {
        Context  context = new InitialContext();
        Context  contextNeeded=(Context)context.lookup("java:comp/env");
        DataSource ds=
        (DataSource)contextNeeded.lookup("mobileConn");//������ӳء�
        con = ds.getConnection();//ʹ�����ӳ��е����ӡ�
        String deleteSQL = 
        "delete  from shoppingForm where goodsId=?"; //�ӹ��ﳵ��ɾ�����
         pre = con.prepareStatement(deleteSQL);
         pre.setString(1,goodsId);
         pre.executeUpdate();
         con.close();//���ӷŻ����ӳء�
         response.sendRedirect("lookShoppingCar.jsp");//�鿴���ﳵ��
      }
      catch(SQLException e) {
         response.getWriter().print(""+e); 
      }
      catch(NamingException exp){
         response.getWriter().print(""+exp);
      }
      finally{
        try{
             con.close();
        }
        catch(Exception ee){}
      } 
   }
}
