package handle.data;
import save.data.Login;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class UpFile extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void service(HttpServletRequest request,
                       HttpServletResponse response)  
                       throws ServletException,IOException{
      String backMess ="";
      request.setCharacterEncoding("utf-8");
      Login loginBean=null;
      HttpSession session=request.getSession(true);
      String fileName=null;
      try{ 
         loginBean = (Login)session.getAttribute("loginBean");
         if(loginBean==null){
           response.sendRedirect("login.jsp");//重定向到登录页面。
           return;
         }
         else {
           boolean b =loginBean.getLogname()==null||
                   loginBean.getLogname().length()==0;
           if(b){
              response.sendRedirect("login.jsp");//重定向到登录页面。
              return;
           }
         }
      }
      catch(Exception exp){
           response.sendRedirect("login.jsp");//重定向到登录页面。
           return;
      }
      try{  
          String tempFileName=(String)session.getId();
          String webDir = request.getContextPath();
          webDir = webDir.substring(1); 
          File f= new File(""); 
          String path = f.getAbsolutePath();
          int index = path.indexOf("bin");
          String tomcatDir = path.substring(0,index);
          File dir=new File(tomcatDir+"/webapps/"+webDir+"/image");
          dir.mkdir();//建立目录。          
          File fileTemp=new File(dir,tempFileName);
          RandomAccessFile randomWrite = new RandomAccessFile(fileTemp,"rw");
          InputStream in=request.getInputStream();
          byte b[]=new byte[10000];
          int n;
          while( (n=in.read(b))!=-1){
             randomWrite.write(b,0,n);
          }
          randomWrite.close();
          in.close();
          RandomAccessFile randomRead=new RandomAccessFile(fileTemp,"r");
          int second=1;
          String secondLine=null;
          while(second<=2) { 
              secondLine=randomRead.readLine();
              second++;
          }
          int position=secondLine.lastIndexOf("=");
          fileName=secondLine.substring(position+2,secondLine.length()-1);
          randomRead.seek(0); 
          long  forthEndPosition=0;
          int forth=1;
          while((n=randomRead.readByte())!=-1&&(forth<=4)){  
             if(n=='\n'){
                forthEndPosition=randomRead.getFilePointer();
                forth++;
             }
          }
          byte  cc[]=fileName.getBytes("iso-8859-1");
          fileName=new String(cc,"utf-8");
          fileName =(loginBean.getLogname()).concat(fileName);
          File fileUser= new File(dir,fileName);
          randomWrite = new RandomAccessFile(fileUser,"rw"); 
          randomRead.seek(randomRead.length());
          long endPosition=randomRead.getFilePointer();
          long mark=endPosition;
          int j=1;
          while((mark>=0)&&(j<=6)) { 
              mark--;
              randomRead.seek(mark);
              n=randomRead.readByte();
              if(n=='\n'){
                 endPosition=randomRead.getFilePointer();
                 j++;
              }
          }
          randomRead.seek(forthEndPosition);
          long startPoint=randomRead.getFilePointer();
          while(startPoint<endPosition-1){
              n=randomRead.readByte();
              randomWrite.write(n); 
              startPoint=randomRead.getFilePointer();
          }
          randomWrite.close();
          randomRead.close();
          backMess ="上传成功"; 
          fileTemp.delete(); 
       }
       catch(Exception ee) {
          backMess ="没有选择文件或上传失败"; 
       }
       response.setContentType("text/html;charset=utf-8");
       try {
          PrintWriter out=response.getWriter();
          out.println("<html><body>");
          out.println("<h2>"+loginBean.getLogname()+":"+backMess+"</h2>") ;
          out.println("<br>返回主页");
          out.println("<br><a href =index.jsp>主页</a>");
          out.println("</body></html>");
       }
       catch(IOException exp){}
   } 
}  
