package handle.data;
import save.data.EnglishBean;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class ReadFile_Servlet extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void service(HttpServletRequest request,HttpServletResponse response)throws                                               ServletException,IOException{
      EnglishBean fileBean=new EnglishBean();  //创建bean对象。
      request.setAttribute("english",fileBean);
      String fileContent="";
      request.setCharacterEncoding("utf-8");
      String filePath=request.getParameter("filePath");
      String fileName=request.getParameter("fileName");
      if(filePath==null||fileName==null)
         return;
      if(fileName.length()==0||fileName.length()==0)
         return;
      fileBean.setFileName(fileName);
      String audioFileName = 
      fileName.substring(0,fileName.lastIndexOf("."))+".mp3";
      fileBean.setFileAudio(audioFileName);
      try{  File f=new File(filePath,fileName);
            RandomAccessFile randomAccess = new RandomAccessFile(f,"r");
            String s=null;
            StringBuffer stringbuffer=new StringBuffer();
            while ((s=randomAccess.readLine())!=null){ 
                byte b[] = s.getBytes("iso-8859-1");
                stringbuffer.append("\n"+new String(b)); 
            }
            fileContent=new String(stringbuffer);
            fileBean.setFileContent(fileContent);
      }
      catch(Exception exp){
            fileContent ="读取失败"+exp.toString();
      } 
      RequestDispatcher dispatcher=
      request.getRequestDispatcher("studyEnglish.jsp");
      dispatcher.forward(request, response);
    } 
} 
