package handle.data;
import save.data.TestPaperBean; //引入bean。
import save.data.Problem;
import java.util.ArrayList;
import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
public class GiveScore_Servlet extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void service(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
      TestPaperBean paperBean=null;
      HttpSession session=request.getSession(true);
      paperBean=(TestPaperBean)session.getAttribute("paperBean");
      if(paperBean==null){
           response.sendRedirect("example8_11.exam.jsp");//定向到答题页面。
           return;
      }
      request.setCharacterEncoding("utf-8");
      String mess=request.getParameter("submit");
      if(mess.length()==0) {
         response.sendRedirect("example8_11.exam.jsp");//定向到答题页面。
         return;
      }
      if(mess.contains("交卷")) {
         ArrayList<Problem> problemList = paperBean.problemList;
         for(int i=0;i<problemList.size();i++){
             Problem p =problemList.get(i);
             boolean b = compare(p.userAnswer,p.correctAnswer);
             if(b) {
                paperBean.score++;
             }
         } 
         session.invalidate();//销毁用户的会话。
         response.setContentType("text/html;charset=gb2312");
         response.getWriter().print("<h1>得分："+paperBean.score); 
         response.getWriter().print
         ("<a href ='example8_11_start.jsp'>重新输入题目数量</a>"); 
      }
    }
    private boolean compare(String s,String t) {//比较两个字符串包含的字符是否相同。
        char a[] = s.toCharArray();
        char b[] = t.toCharArray();
        Arrays.sort(a); 
        Arrays.sort(b);
        return Arrays.equals(a,b);
    }
}
