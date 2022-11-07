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
public class PutGoodsToCar extends HttpServlet {
   public void init(ServletConfig config) throws ServletException { 
      super.init(config);
   }
   public  void  service(HttpServletRequest request,
                         HttpServletResponse response) 
                         throws ServletException,IOException {
      request.setCharacterEncoding("utf-8");
      Connection con=null;
      PreparedStatement pre=null; //Ԥ������䡣 
      ResultSet rs;
      String mobileID = request.getParameter("mobileID");
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
        con= ds.getConnection();//ʹ�����ӳ��е����ӡ�
        String queryMobileForm =  
        "select * from mobileForm where mobile_version =?";//��ѯ��Ʒ��
        String queryShoppingForm = 
        "select goodsAmount from shoppingForm where goodsId =?";//���ﳵ��
         String updateSQL = 
        "update shoppingForm set goodsAmount =? where goodsId=?"; //���¹��ﳵ��
         String insertSQL =
        "insert into shoppingForm values(?,?,?,?,?)";//��ӵ����ﳵ��
         pre = con.prepareStatement(queryShoppingForm);
         pre.setString(1,mobileID);
         rs = pre.executeQuery();
         if(rs.next()){ //�û����Ѿ��ڹ��ﳵ�С�
             int amount = rs.getInt(1);
             amount++;
             pre = con.prepareStatement(updateSQL);
             pre.setInt(1,amount);
             pre.setString(2,mobileID);
             pre.executeUpdate(); //���¹��ﳵ�иû����������
         }
         else {  //���ﳵ�����Ʒ��
             pre = con.prepareStatement(queryMobileForm); 
             pre.setString(1,mobileID);
             rs = pre.executeQuery();
             if(rs.next()){
                pre = con.prepareStatement(insertSQL); 
                pre.setString(1,rs.getString("mobile_version"));
                pre.setString(2,loginBean.getLogname());
                pre.setString(3,rs.getString("mobile_name"));
                pre.setFloat(4,rs.getFloat("mobile_price"));
                pre.setInt(5,1);
                pre.executeUpdate(); //���ﳵ����Ӹû��
             }
         }
         con.close();
         response.sendRedirect("lookShoppingCar.jsp");//�鿴���ﳵ��
      }
      catch(SQLException exp){ 
         response.getWriter().print(""+exp);
      }
      catch(NamingException exp){}
      finally{
        try{
             con.close();
        }
        catch(Exception ee){}
      }  
   }
}
