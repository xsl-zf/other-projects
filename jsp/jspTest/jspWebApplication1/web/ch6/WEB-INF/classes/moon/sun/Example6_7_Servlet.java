package moon.sun;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class Example6_7_Servlet extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void  doPost(HttpServletRequest request,HttpServletResponse response)
                throws ServletException,IOException{
      RequestDispatcher dispatcher = null; //����ת���Ķ���
      request.setCharacterEncoding("utf-8");
      response.setContentType("text/html;charset=utf-8");
      String mess = request.getParameter("submit");
      String digitData = request.getParameter("digitData");
      if(digitData == null ||digitData.length()==0) {
          response.sendRedirect("example6_7.jsp");//�ض�����������ҳ�档
          return;
      }
      if(mess.contains("sort")) {
         dispatcher = request.getRequestDispatcher("sort");//ת�������������servlet
         dispatcher.forward(request,response);
      }
      else if(mess.contains("sum")){
         dispatcher = request.getRequestDispatcher("sum");//ת�������������servlet
         dispatcher.forward(request,response);
      }
   } 
   public  void  doGet(HttpServletRequest request,HttpServletResponse response) 
                        throws ServletException,IOException{
       doPost(request,response);
   }
}
