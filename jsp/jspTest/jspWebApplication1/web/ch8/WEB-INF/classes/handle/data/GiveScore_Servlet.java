package handle.data;
import save.data.TestPaperBean; //����bean��
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
           response.sendRedirect("example8_11.exam.jsp");//���򵽴���ҳ�档
           return;
      }
      request.setCharacterEncoding("utf-8");
      String mess=request.getParameter("submit");
      if(mess.length()==0) {
         response.sendRedirect("example8_11.exam.jsp");//���򵽴���ҳ�档
         return;
      }
      if(mess.contains("����")) {
         ArrayList<Problem> problemList = paperBean.problemList;
         for(int i=0;i<problemList.size();i++){
             Problem p =problemList.get(i);
             boolean b = compare(p.userAnswer,p.correctAnswer);
             if(b) {
                paperBean.score++;
             }
         } 
         session.invalidate();//�����û��ĻỰ��
         response.setContentType("text/html;charset=gb2312");
         response.getWriter().print("<h1>�÷֣�"+paperBean.score); 
         response.getWriter().print
         ("<a href ='example8_11_start.jsp'>����������Ŀ����</a>"); 
      }
    }
    private boolean compare(String s,String t) {//�Ƚ������ַ����������ַ��Ƿ���ͬ��
        char a[] = s.toCharArray();
        char b[] = t.toCharArray();
        Arrays.sort(a); 
        Arrays.sort(b);
        return Arrays.equals(a,b);
    }
}
