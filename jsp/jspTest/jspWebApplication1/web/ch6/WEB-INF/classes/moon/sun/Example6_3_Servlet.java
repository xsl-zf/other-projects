package moon.sun;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
public class Example6_3_Servlet extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void service(HttpServletRequest request,HttpServletResponse response)
                       throws IOException{
      request.setCharacterEncoding("utf-8");
      response.setContentType("text/html;charset=utf-8");
      PrintWriter out=response.getWriter();
      out.println("<html><body bgcolor=yellow>");
      String discountMess=request.getParameter("discount");
      double discount = Double.parseDouble(discountMess);
      String billMess=request.getParameter("billMess");
      if(billMess == null) {
         out.print("没有账单");  
         return;
      }
      double bill = getPriceSum(billMess); //账单金额。
      double billDiscount = bill*(discount/10); //优惠后的金额。
      out.print("<h2>"+billMess+"<br>消费:"+bill+"圆"); 
      out.print("优惠"+discount+"折<br>后的金额:"+billDiscount+"圆");       
      out.print("</h2></body></html>");
   } 
   public double getPriceSum(String input){  // 定义方法
      Pattern pattern;          //模式对象
      Matcher matcher;          //匹配对象
      String regex="-?[0-9][0-9]*[.]?[0-9]*" ;//匹配数字的正则表达式
      pattern = Pattern.compile(regex);  //初试化模式对象
      matcher = pattern.matcher(input);  //初始化匹配对象,用于检索input
      double sum = 0;
      while(matcher.find()) {
         String str = matcher.group(); 
         sum += Double.parseDouble(str);
      } 
      return sum;
   }
}
