package handle.data;
import save.data.Login;
import javax.sql.DataSource;
import javax.naming.Context;
import javax.naming.InitialContext;
import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class HandleBuyGoods extends HttpServlet {
   public void init(ServletConfig config) throws ServletException { 
      super.init(config);
   }
   public  void  service(HttpServletRequest request,
                         HttpServletResponse response) 
                         throws ServletException,IOException {
      request.setCharacterEncoding("utf-8");
      String logname = request.getParameter("logname");
      Connection con=null;
      PreparedStatement pre=null; //Ԥ������䡣 
      ResultSet rs;
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
        String querySQL = 
        "select * from shoppingForm where logname = ?"; //���ﳵ��
         String insertSQL ="insert into orderForm values(?,?,?)";//������
         String deleteSQL ="delete from shoppingForm where logname =?";
         pre = con.prepareStatement(querySQL);
         pre.setString(1,logname);
         rs = pre.executeQuery();//��ѯ���ﳵ��
         StringBuffer buffer = new StringBuffer();
         float sum = 0;
         boolean canCreateForm = false;//�Ƿ���Բ���������
         while(rs.next()){
            canCreateForm = true;
            String  goodsId = rs.getString(1);
            logname = rs.getString(2);
            String  goodsName = rs.getString(3);
            float price = rs.getFloat(4); 
            int amount = rs.getInt(5);
            sum +=  price*amount;
            buffer.append("<br>��Ʒid:"+goodsId+",����:"+goodsName+
            "����"+price+"����"+amount);
         }
         if(canCreateForm == false){
             response.setContentType("text/html;charset=utf-8");
             PrintWriter out=response.getWriter();
             out.println("<html><body>");
             out.println("<h2>"+logname+"����ѡ����Ʒ��ӵ����ﳵ") ;
             out.println("<br><a href =index.jsp>��ҳ</a></h2>");
             out.println("</body></html>");
             return;
         }
         String strSum = String.format("%10.2f",sum);
         buffer.append("<br>"+logname+"<br>���ﳵ����Ʒ�ܼ�:"+strSum);
         pre = con.prepareStatement(insertSQL); 
         pre.setInt(1,0);  //�����Ż��Զ����ӡ�
         pre.setString(2,logname);
         pre.setString(3,new String(buffer));
         pre.executeUpdate();//��ӵ�������
         pre = con.prepareStatement(deleteSQL);
         pre.setString(1,logname);
         pre.executeUpdate(); //ɾ��logname�Ĺ��ﳵ�л��
         con.close();//���ӷŻ����ӳء�
         response.sendRedirect("lookOrderForm.jsp");//�鿴������
      }
      catch(Exception e) { 
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
