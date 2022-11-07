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
      RequestDispatcher dispatcher = null; //负责转发的对象。
      request.setCharacterEncoding("utf-8");
      response.setContentType("text/html;charset=utf-8");
      String mess = request.getParameter("submit");
      String digitData = request.getParameter("digitData");
      if(digitData == null ||digitData.length()==0) {
          response.sendRedirect("example6_7.jsp");//重定向到输入数据页面。
          return;
      }
      if(mess.contains("sort")) {
         dispatcher = request.getRequestDispatcher("sort");//转发给负责排序的servlet
         dispatcher.forward(request,response);
      }
      else if(mess.contains("sum")){
         dispatcher = request.getRequestDispatcher("sum");//转发给负责排序的servlet
         dispatcher.forward(request,response);
      }
   } 
   public  void  doGet(HttpServletRequest request,HttpServletResponse response) 
                        throws ServletException,IOException{
       doPost(request,response);
   }
}
