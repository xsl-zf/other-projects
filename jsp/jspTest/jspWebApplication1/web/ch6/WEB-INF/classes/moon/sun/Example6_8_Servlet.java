package moon.sun;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class Example6_8_Servlet extends HttpServlet {
   public void init(ServletConfig config) throws ServletException {
      super.init(config);
   }
   public  void  doPost(HttpServletRequest request,HttpServletResponse response) 
                        throws ServletException,IOException {
      request.setCharacterEncoding("utf-8");
      response.setContentType("text/html;charset=utf-8");
      HttpSession session=request.getSession(true);  //获取客户的会话对象
      String str=request.getParameter("clientGuessLetter"); 
      Character guessLetter=str.trim().charAt(0);    //获取客户猜测所提交的字母
      //获得曾放入session中的字母：
      String count = (String)session.getAttribute("count");
      int n = Integer.parseInt(count);
      Character savedLetter=(Character)session.getAttribute("savedLetter");
      char realLetter=savedLetter.charValue();
      if(Character.isUpperCase(guessLetter)) {
          guessLetter=Character.toLowerCase(guessLetter);
      } 
      if(guessLetter<realLetter) {
          n++;
          session.setAttribute("message","第"+n+"次，猜小了");
          session.setAttribute("count",""+n);
          response.sendRedirect("example6_8_input.jsp");          
      }
      else if(guessLetter>realLetter) {
          n++;
          session.setAttribute("message","第"+n+"次，猜大了");
          session.setAttribute("count",""+n);
          response.sendRedirect("example6_8_input.jsp");          
      }
      else if(guessLetter==realLetter){
          n++;
          session.setAttribute("message","猜对了,猜的次数:"+n);
          session.setAttribute("count","0");
          response.sendRedirect("example6_8_input.jsp");          
      }
   } 
   public  void  doGet(HttpServletRequest request,HttpServletResponse response) 
                        throws ServletException,IOException {
      doPost(request,response);
   }
}
