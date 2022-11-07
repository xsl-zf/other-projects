package handle.data;
import save.data.Register;
import java.sql.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.sql.DataSource;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
public class HandleRegister extends HttpServlet {
   public void init(ServletConfig config) throws ServletException { 
      super.init(config);
   }
   public  void  service(HttpServletRequest request,
                         HttpServletResponse response) 
                         throws ServletException,IOException {
      request.setCharacterEncoding("utf-8");
      Connection con =null; 
      PreparedStatement sql=null; 
      Register userBean=new Register();  //����bean��
      request.setAttribute("userBean",userBean);
      String logname=request.getParameter("logname").trim();
      String password=request.getParameter("password").trim();
      String again_password=request.getParameter("again_password").trim();
      String phone=request.getParameter("phone").trim();
      String address=request.getParameter("address").trim();
      String realname=request.getParameter("realname").trim();
      if(logname==null)
           logname="";
      if(password==null)
           password="";
      if(!password.equals(again_password)) { 
         userBean.setBackNews("�������벻ͬ��ע��ʧ�ܣ�");
         RequestDispatcher dispatcher= 
         request.getRequestDispatcher("inputRegisterMess.jsp");
         dispatcher.forward(request, response);//ת��
         return;
      }
      boolean isLD=true;
      for(int i=0;i<logname.length();i++){
          char c=logname.charAt(i);
          if(!(Character.isLetterOrDigit(c)||c=='_')) 
             isLD=false;
      } 
      boolean boo=logname.length()>0&&password.length()>0&&isLD;
      String backNews="";
      try{   Context  context = new InitialContext();
             Context  contextNeeded = (Context)context.lookup("java:comp/env");
             DataSource ds=
             (DataSource)contextNeeded.lookup("mobileConn");//������ӳء�
             con= ds.getConnection();//ʹ�����ӳ��е����ӡ�
             String insertCondition="INSERT INTO user VALUES (?,?,?,?,?)";
             sql=con.prepareStatement(insertCondition);
             if(boo){
               sql.setString(1,logname);
               password = 
               Encrypt.encrypt(password,"javajsp");//���û�������ܡ�
               sql.setString(2,password);
               sql.setString(3,phone);
               sql.setString(4,address);
               sql.setString(5,realname);
               int m=sql.executeUpdate();
               if(m!=0){
                  backNews="ע��ɹ�";
                  userBean.setBackNews(backNews);
                  userBean.setLogname(logname);
                  userBean.setPhone(phone);
                  userBean.setAddress(address);
                  userBean.setRealname(realname);
               }
             }
             else {
                 backNews="��Ϣ��д���������������зǷ��ַ�";
                 userBean.setBackNews(backNews);  
             }
             con.close();//���ӷ������ӳء�
      }
      catch(SQLException exp){
             backNews="�û�Ա���ѱ�ʹ�ã�������������"+exp;
             userBean.setBackNews(backNews); 
      }
      catch(NamingException exp){
             backNews="û���������ӳ�"+exp;
             userBean.setBackNews(backNews); 
      }
      finally{
        try{
             con.close();
        }
        catch(Exception ee){}
      } 
      RequestDispatcher dispatcher= 
      request.getRequestDispatcher("inputRegisterMess.jsp");
      dispatcher.forward(request, response);//ת��
   }
}
