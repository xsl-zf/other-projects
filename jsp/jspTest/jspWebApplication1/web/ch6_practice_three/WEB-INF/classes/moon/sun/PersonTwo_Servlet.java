package moon.sun;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
public class PersonTwo_Servlet extends HttpServlet{
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
      Pattern pattern;          //ģʽ����
      Matcher matcher;          //ƥ�����
      String regex="-?[0-9][0-9]*" ;//ƥ��������������ʽ��
      pattern = Pattern.compile(regex);  //���Ի�ģʽ����
      matcher = pattern.matcher(input);  //��ʼ��ƥ�����,���ڼ���input��
      StringBuffer numbersZero = new StringBuffer("3�ı���:<br>");
      StringBuffer numbersOne = new StringBuffer("<br>����3��1:<br>");
      StringBuffer numbersTwo = new StringBuffer("<br>����3��2:<br>");
      while(matcher.find()) {
         String str = matcher.group(); 
         if(Integer.parseInt(str)%3==0){
              numbersZero.append(str+",");
         }
         else if(Integer.parseInt(str)%3==1){
              numbersOne.append(str+",");
         }
          else if(Integer.parseInt(str)%3==2){
              numbersTwo.append(str+",");
         }
      } 
      StringBuffer buffer = numbersZero.append(numbersOne.append(numbersTwo));
      return new String(buffer);
   }
}
