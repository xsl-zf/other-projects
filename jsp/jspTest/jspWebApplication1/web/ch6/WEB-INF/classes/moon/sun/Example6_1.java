package moon.sun;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class Example6_1 extends HttpServlet{
    public void init(ServletConfig config) throws ServletException{
       super.init(config);
    }
    public void service(HttpServletRequest request,HttpServletResponse response) throws IOException{
      //������Ӧ��MIME���ͣ�
       response.setContentType("text/html;charset=utf-8");
       PrintWriter out = response.getWriter();//������û��������ݵ��������
       out.println("<html><body bgcolor = #ffccff>");
       out.println("<h1>hello servlet,��� servlet</h1>");
       out.println("</body></html>");
    } 
}

