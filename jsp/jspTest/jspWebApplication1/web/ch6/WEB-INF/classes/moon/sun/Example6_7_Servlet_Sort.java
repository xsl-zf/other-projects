package moon.sun;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
import java.util.TreeSet;
import java.util.Iterator;
public class Example6_7_Servlet_Sort extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void  doPost(HttpServletRequest request,HttpServletResponse response)
                throws ServletException,IOException{
      TreeSet<Double> treeSet = new TreeSet<Double>();//排序数字。
      request.setCharacterEncoding("utf-8");
      response.setContentType("text/html;charset=utf-8");
      PrintWriter out=response.getWriter();
      String digitData = request.getParameter("digitData");
      sort(digitData,treeSet);
      Iterator<Double> iterator =treeSet.iterator();
      out.println("<html><body bgcolor=cyan>");
      out.println("<h1>排序后的数字:<br>");
      while(iterator.hasNext()) {
          out.println(iterator.next()+",");
      }
      out.println("</h1></body></html>");
   } 
   public  void  doGet(HttpServletRequest request,HttpServletResponse response) 
                        throws ServletException,IOException{
       doPost(request,response);
   }
   public void sort(String input,TreeSet<Double> treeSet){  
      Pattern pattern;          //模式对象。
      Matcher matcher;          //匹配对象。
      String regex="-?[0-9][0-9]*[.]?[0-9]*" ;//匹配数字的正则表达式。
      pattern = Pattern.compile(regex);  //初试化模式对象。
      matcher = pattern.matcher(input);  //初始化匹配对象,用于检索input。
      double sum = 0;
      while(matcher.find()) {
         String str = matcher.group(); 
         treeSet.add(Double.parseDouble(str));
      } 
   }
}
