package moon.sun;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class Example6_5_Servlet extends HttpServlet{
    double sum=0,i=1,j=1; //�������û�����
    int number=0;         //�������û�����
    public void init(ServletConfig config) throws ServletException{
        super.init(config);
    }
    public synchronized void service(HttpServletRequest request,
              HttpServletResponse response) throws IOException { 
       response.setContentType("text/html;charset=utf-8");
       PrintWriter out=response.getWriter();
       out.println("<html><body bgcolor=cyan>");
       number++;
       sum=sum+i/j;
       j=j+2;
       i = -i;  
       out.println("<h1>servlet:"+getServletName()+
                    "�Ѿ���������"+number+"��");
       out.println("<br>����PI��ֵ��:");
       out.println(4*sum);
       out.println("</h1></body></html>");
  } 
}
