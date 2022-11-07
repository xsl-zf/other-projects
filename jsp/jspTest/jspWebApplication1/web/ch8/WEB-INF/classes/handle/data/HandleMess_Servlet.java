package handle.data;
import save.data.TestPaperBean; //引入bean。
import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
public class HandleMess_Servlet extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void service(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
      TestPaperBean paperBean=null;
      HttpSession session=request.getSession(true);
      paperBean=(TestPaperBean)session.getAttribute("paperBean");
      if(paperBean==null){
           response.sendRedirect("example8_11_start.jsp");
           return;
      }
      request.setCharacterEncoding("utf-8");
      String mess=request.getParameter("submit");
      String userAnswer=request.getParameter("R");//用户给出的选择。
      if(mess.length()==0) {
         response.sendRedirect("example8_11_exam.jsp");//定向到答题页面。
         return;
      }
      if(mess.contains("确认")) {
         paperBean.getCurrentProblem().userAnswer = userAnswer;
      }
      else if(mess.contains("下一题")){
         paperBean.nextProblem();
      }
      else if(mess.contains("上一题")){
         paperBean.previousProblem();
      }
      response.sendRedirect("example8_11_exam.jsp");
   }
}
