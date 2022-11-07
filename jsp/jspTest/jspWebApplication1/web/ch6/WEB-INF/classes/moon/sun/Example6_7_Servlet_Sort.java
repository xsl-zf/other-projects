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
      TreeSet<Double> treeSet = new TreeSet<Double>();//�������֡�
      request.setCharacterEncoding("utf-8");
      response.setContentType("text/html;charset=utf-8");
      PrintWriter out=response.getWriter();
      String digitData = request.getParameter("digitData");
      sort(digitData,treeSet);
      Iterator<Double> iterator =treeSet.iterator();
      out.println("<html><body bgcolor=cyan>");
      out.println("<h1>����������:<br>");
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
      Pattern pattern;          //ģʽ����
      Matcher matcher;          //ƥ�����
      String regex="-?[0-9][0-9]*[.]?[0-9]*" ;//ƥ�����ֵ�������ʽ��
      pattern = Pattern.compile(regex);  //���Ի�ģʽ����
      matcher = pattern.matcher(input);  //��ʼ��ƥ�����,���ڼ���input��
      double sum = 0;
      while(matcher.find()) {
         String str = matcher.group(); 
         treeSet.add(Double.parseDouble(str));
      } 
   }
}
