package handle.data;
import save.data.TestPaperBean; //����bean��
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
      String userAnswer=request.getParameter("R");//�û�������ѡ��
      if(mess.length()==0) {
         response.sendRedirect("example8_11_exam.jsp");//���򵽴���ҳ�档
         return;
      }
      if(mess.contains("ȷ��")) {
         paperBean.getCurrentProblem().userAnswer = userAnswer;
      }
      else if(mess.contains("��һ��")){
         paperBean.nextProblem();
      }
      else if(mess.contains("��һ��")){
         paperBean.previousProblem();
      }
      response.sendRedirect("example8_11_exam.jsp");
   }
}
