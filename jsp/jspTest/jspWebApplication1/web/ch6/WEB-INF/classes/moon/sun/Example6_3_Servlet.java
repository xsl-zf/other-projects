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
         out.print("û���˵�");  
         return;
      }
      double bill = getPriceSum(billMess); //�˵���
      double billDiscount = bill*(discount/10); //�Żݺ�Ľ�
      out.print("<h2>"+billMess+"<br>����:"+bill+"Բ"); 
      out.print("�Ż�"+discount+"��<br>��Ľ��:"+billDiscount+"Բ");       
      out.print("</h2></body></html>");
   } 
   public double getPriceSum(String input){  // ���巽��
      Pattern pattern;          //ģʽ����
      Matcher matcher;          //ƥ�����
      String regex="-?[0-9][0-9]*[.]?[0-9]*" ;//ƥ�����ֵ�������ʽ
      pattern = Pattern.compile(regex);  //���Ի�ģʽ����
      matcher = pattern.matcher(input);  //��ʼ��ƥ�����,���ڼ���input
      double sum = 0;
      while(matcher.find()) {
         String str = matcher.group(); 
         sum += Double.parseDouble(str);
      } 
      return sum;
   }
}
