package moon.sun;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
public class Example6_7_Servlet_Sum extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void  doPost(HttpServletRequest request,HttpServletResponse response)
                throws ServletException,IOException{
      request.setCharacterEncoding("utf-8");
      response.setContentType("text/html;charset=utf-8");
      PrintWriter out=response.getWriter();
      String digitData = request.getParameter("digitData");
      double sum = getPriceSum(digitData);
      out.println("<html><body bgcolor=cyan>");
      out.println("<h1>数字的代数和:"+sum);
      out.println("</h1></body></html>");
   } 
   public  void  doGet(HttpServletRequest request,HttpServletResponse response) 
                        throws ServletException,IOException{
       doPost(request,response);
   }
    public double getPriceSum(String input){  // 定义方法
      Pattern pattern;          //模式对象。
      Matcher matcher;          //匹配对象。
      String regex="-?[0-9][0-9]*[.]?[0-9]*" ;//匹配数字的正则表达式。
      pattern = Pattern.compile(regex);  //初试化模式对象。
      matcher = pattern.matcher(input);  //初始化匹配对象,用于检索input。
      double sum = 0;
      while(matcher.find()) {
         String str = matcher.group(); 
         sum += Double.parseDouble(str);
      } 
      return sum;
   }
}
