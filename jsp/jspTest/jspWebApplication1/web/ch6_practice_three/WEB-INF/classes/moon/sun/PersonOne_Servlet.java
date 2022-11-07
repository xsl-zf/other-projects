package moon.sun;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
public class PersonOne_Servlet extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void  service(HttpServletRequest request,HttpServletResponse response)
                       throws ServletException,IOException{
      request.setCharacterEncoding("utf-8");
      response.setContentType("text/html;charset=utf-8");
      PrintWriter out=response.getWriter();
      String integers = request.getParameter("number");
      String backMess = analysisIntegers(integers); 
      out.print("<html><body><h1>"+backMess+"</body></html>");
   } 
   public String analysisIntegers(String input){  
      Pattern pattern;          //模式对象。
      Matcher matcher;          //匹配对象。
      String regex="-?[0-9][0-9]*" ;//匹配整数的正则表达式。
      pattern = Pattern.compile(regex);  //初试化模式对象。
      matcher = pattern.matcher(input);  //初始化匹配对象,用于检索input。
      StringBuffer evenNumbers = new StringBuffer("<br>偶数:");
      StringBuffer oddNumbers  = new StringBuffer("<br>奇数:");
      while(matcher.find()) {
         String str = matcher.group(); 
         if(Integer.parseInt(str)%2==0){
              evenNumbers.append(str+",");
         }
         else {
              oddNumbers.append(str+",");
         }
      } 
      StringBuffer buffer = evenNumbers.append(oddNumbers);
      return new String(buffer);
   }
}
