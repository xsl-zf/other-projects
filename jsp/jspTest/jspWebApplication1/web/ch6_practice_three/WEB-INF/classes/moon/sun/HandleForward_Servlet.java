package moon.sun;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class HandleForward_Servlet extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void  service(HttpServletRequest request,HttpServletResponse response) 
                       throws ServletException,IOException{
      RequestDispatcher dispatcher = null; //����ת���Ķ���
      request.setCharacterEncoding("utf-8");
      response.setContentType("text/html;charset=utf-8");
      String mess = request.getParameter("submit");
      String integers = request.getParameter("number");
      if(integers == null ||integers.length()==0) {
          response.sendRedirect("inputIntegers.jsp");//�ض�����������ҳ�档
          return;
      }
      if(mess.contains("personOne")) {
          dispatcher = request.getRequestDispatcher("personOne");//ת����
          dispatcher.forward(request,response);
      }
      else if(mess.contains("personTwo")){
          dispatcher = request.getRequestDispatcher("personTwo");//ת����
          dispatcher.forward(request,response);
      }
   } 
} 
