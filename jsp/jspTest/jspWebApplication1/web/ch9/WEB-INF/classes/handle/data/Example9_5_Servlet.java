package handle.data;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class Example9_5_Servlet extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void service(HttpServletRequest request,HttpServletResponse response)
                        throws ServletException,IOException{
      request.setCharacterEncoding("utf-8");
      String filePath=request.getParameter("filePath");
      String fileName=filePath.substring(filePath.lastIndexOf("/")+1);
      response.setHeader("Content-disposition","attachment;filename="+fileName);   
      try{ //读取文件,并发送给用户下载:
        File f = new File(filePath);
        FileInputStream in = new FileInputStream(f);
        OutputStream out = response.getOutputStream();
        int n = 0;
        byte b[] = new byte[1204];
        while((n=in.read(b))!=-1)
           out.write(b,0,n);
        out.close();
        in.close(); 
      }
      catch(Exception exp){}
  } 
}
