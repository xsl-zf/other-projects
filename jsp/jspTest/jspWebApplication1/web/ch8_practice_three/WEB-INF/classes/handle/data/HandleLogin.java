package handle.data;
import save.data.*;
import java.sql.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.sql.DataSource;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
public class HandleLogin extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void service(HttpServletRequest request,
                       HttpServletResponse response) 
                       throws ServletException,IOException{
      request.setCharacterEncoding("utf-8");
      Connection con =null; 
      Statement sql; 
      String logname=request.getParameter("logname").trim(),
      password=request.getParameter("password").trim();
      password = Encrypt.encrypt(password,"javajsp");//���û�������ܡ�
      boolean boo=(logname.length()>0)&&(password.length()>0);  
      try{ 
           Context  context = new InitialContext();
           Context  contextNeeded=
                    (Context)context.lookup("java:comp/env");
           DataSource ds=
           (DataSource)contextNeeded.lookup("adverConn");//���ӳء�
            con= ds.getConnection();//ʹ�����ӳ��е����ӡ�
           String condition="select * from user where logname = '"+
                             logname+"' and password ='"+password+"'";
           sql=con.createStatement();  
           if(boo){
              ResultSet rs=sql.executeQuery(condition);
              boolean m=rs.next();
              if(m==true){ 
                  //���õ�¼�ɹ��ķ���:
                  success(request,response,logname,password); 
                  RequestDispatcher dispatcher=
                  request.getRequestDispatcher("login.jsp");//ת����
                  dispatcher.forward(request,response);
              }
              else{
                  String backNews="��������û��������ڣ������벻����";
                  //���õ�¼ʧ�ܵķ���:
                  fail(request,response,logname,backNews); 
              }
           }
           else{
                  String backNews="�������û���������";
                  fail(request,response,logname,backNews);
           }
           con.close();//���ӷ������ӳء�
      }
      catch(SQLException exp){
          String backNews=""+exp;
          fail(request,response,logname,backNews);
      }
      catch(NamingException exp){
          String backNews="û���������ӳ�"+exp;
          fail(request,response,logname,backNews); 
      }
      finally{
        try{
            con.close();
        }
        catch(Exception ee){}
      } 
   }
   public void success(HttpServletRequest request,
                       HttpServletResponse response,
                       String logname,String password) {
      Login loginBean=null;
      HttpSession session=request.getSession(true);
      try{  loginBean=(Login)session.getAttribute("loginBean");
            if(loginBean==null){
               loginBean=new Login();  //�����µ�����ģ�� ��
               session.setAttribute("loginBean",loginBean);
               loginBean=(Login)session.getAttribute("loginBean");
            }
            String name =loginBean.getLogname();
            if(name.equals(logname)) {
               loginBean.setBackNews(logname+"�Ѿ���¼��");
               loginBean.setLogname(logname);
            }
            else {  //����ģ�ʹ洢�µĵ�¼�û�:
                loginBean.setBackNews(logname+"��¼�ɹ�");
                loginBean.setLogname(logname);
            }
      }
      catch(Exception ee){
            loginBean=new Login();  
            session.setAttribute("loginBean",loginBean);
            loginBean.setBackNews(""+ee);
            loginBean.setLogname(logname);
      }
   }
   public void fail(HttpServletRequest request,
                    HttpServletResponse response,
                    String logname,String backNews) {
        response.setContentType("text/html;charset=utf-8");
        try {
            PrintWriter out=response.getWriter();
            out.println("<html><body>");
            out.println("<h2>"+logname+"��¼�������<br>"+backNews+"</h2>") ;
            out.println("���ص�¼ҳ�����ҳ<br>");
            out.println("<a href =login.jsp>��¼ҳ��</a>");
            out.println("<br><a href =index.jsp>��ҳ</a>");
            out.println("</body></html>");
        }
        catch(IOException exp){}
    }
}
