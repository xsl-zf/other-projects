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
      out.println("<h1>���ֵĴ�����:"+sum);
      out.println("</h1></body></html>");
   } 
   public  void  doGet(HttpServletRequest request,HttpServletResponse response) 
                        throws ServletException,IOException{
       doPost(request,response);
   }
    public double getPriceSum(String input){  // ���巽��
      Pattern pattern;          //ģʽ����
      Matcher matcher;          //ƥ�����
      String regex="-?[0-9][0-9]*[.]?[0-9]*" ;//ƥ�����ֵ�������ʽ��
      pattern = Pattern.compile(regex);  //���Ի�ģʽ����
      matcher = pattern.matcher(input);  //��ʼ��ƥ�����,���ڼ���input��
      double sum = 0;
      while(matcher.find()) {
         String str = matcher.group(); 
         sum += Double.parseDouble(str);
      } 
      return sum;
   }
}
