package handle.data;
import save.data.Example9_4_Bean;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class Example9_4_Servlet extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void service(HttpServletRequest request,HttpServletResponse response)
                        throws ServletException,IOException{
      request.setCharacterEncoding("utf-8");
      Example9_4_Bean fileBean=new Example9_4_Bean();  //创建Javabean对象
      request.setAttribute("fileBean",fileBean);
      String fileName=null;
      HttpSession session=request.getSession(true);
      try{  
         //用客户的session对象的Id建立一个临时文件
          String tempFileName=(String)session.getId();
          String webDir = request.getContextPath();//获取当前Web服务目录的名称。
          webDir = webDir.substring(1); //去掉名称前面的目录符号/。
          File f= new File(""); //文件f被认为在Tomcat安装目录的\bin中。
          String path = f.getAbsolutePath();
          int index = path.indexOf("bin");
          String tomcatDir = path.substring(0,index);//tomcat的安装目录。
          //文件上传到image文件夹中：
          File dir=new File(tomcatDir+"/webapps/"+webDir+"/image");
          dir.mkdir();//建立目录。          
          File fileTemp=new File(dir,tempFileName); //建立临时文件fileTemp
          RandomAccessFile randomWrite = new RandomAccessFile(fileTemp,"rw");
          //将客户上传的全部信息存入fileTemp：
          InputStream in=request.getInputStream();
          byte b[]=new byte[10000];
          int n;
          while( (n=in.read(b))!=-1){
             randomWrite.write(b,0,n);
          }
          randomWrite.close();
          in.close();
           //读取临时文件fileTemp，从中获取上传文件的名字和上传文件的内容
          RandomAccessFile randomRead=new RandomAccessFile(fileTemp,"r");
           //读出fileTemp的第2行，析取出上传文件的名字
          int second=1;
          String secondLine=null;
          while(second<=2) { 
              secondLine=randomRead.readLine();
              second++;
          }
          //获取fileTemp中第2行中"filename"之后“=”出现的位置:
          int position=secondLine.lastIndexOf("=");
           //客户上传的文件的名字是
          fileName=secondLine.substring(position+2,secondLine.length()-1);
          randomRead.seek(0); //再定位到文件fileTemp的开头
          //获取第4行回车符号的位置
          long  forthEndPosition=0;
          int forth=1;
          while((n=randomRead.readByte())!=-1&&(forth<=4)){  
             if(n=='\n'){
                forthEndPosition=randomRead.getFilePointer();
                forth++;
             }
          }
          //根据客户上传文件的名字，将该文件存入磁盘:
          byte  cc[]=fileName.getBytes("iso-8859-1");
          fileName=new String(cc,"utf-8");
          File fileUser= new File(dir,fileName);
          randomWrite = new RandomAccessFile(fileUser,"rw"); 
          //确定出文件fileTemp中包含客户上传的文件的内容的最后位置，即倒数第6行
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
          //将randomRead流指向文件fileTemp的第4行结束的位置
          randomRead.seek(forthEndPosition);
          long startPoint=randomRead.getFilePointer();
         //从fileTemp读出客户上传的文件存入fileUser（读取第4行结束位置和倒数第6行之间的内容）:
          while(startPoint<endPosition-1){
              n=randomRead.readByte();
              randomWrite.write(n); 
              startPoint=randomRead.getFilePointer();
          }
          randomWrite.close();
          randomRead.close();
          fileBean.setMess("上传成功"); 
          fileBean.setFileName(fileName);   
          fileTemp.delete(); //删除临时文件
       }
       catch(Exception ee) {
          fileBean.setMess("没有选择文件或上传失败"); 
       }
      RequestDispatcher dispatcher=
      request.getRequestDispatcher("example9_4.jsp");
      dispatcher.forward(request, response);
   } 
}
