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
      Example9_4_Bean fileBean=new Example9_4_Bean();  //����Javabean����
      request.setAttribute("fileBean",fileBean);
      String fileName=null;
      HttpSession session=request.getSession(true);
      try{  
         //�ÿͻ���session�����Id����һ����ʱ�ļ�
          String tempFileName=(String)session.getId();
          String webDir = request.getContextPath();//��ȡ��ǰWeb����Ŀ¼�����ơ�
          webDir = webDir.substring(1); //ȥ������ǰ���Ŀ¼����/��
          File f= new File(""); //�ļ�f����Ϊ��Tomcat��װĿ¼��\bin�С�
          String path = f.getAbsolutePath();
          int index = path.indexOf("bin");
          String tomcatDir = path.substring(0,index);//tomcat�İ�װĿ¼��
          //�ļ��ϴ���image�ļ����У�
          File dir=new File(tomcatDir+"/webapps/"+webDir+"/image");
          dir.mkdir();//����Ŀ¼��          
          File fileTemp=new File(dir,tempFileName); //������ʱ�ļ�fileTemp
          RandomAccessFile randomWrite = new RandomAccessFile(fileTemp,"rw");
          //���ͻ��ϴ���ȫ����Ϣ����fileTemp��
          InputStream in=request.getInputStream();
          byte b[]=new byte[10000];
          int n;
          while( (n=in.read(b))!=-1){
             randomWrite.write(b,0,n);
          }
          randomWrite.close();
          in.close();
           //��ȡ��ʱ�ļ�fileTemp�����л�ȡ�ϴ��ļ������ֺ��ϴ��ļ�������
          RandomAccessFile randomRead=new RandomAccessFile(fileTemp,"r");
           //����fileTemp�ĵ�2�У���ȡ���ϴ��ļ�������
          int second=1;
          String secondLine=null;
          while(second<=2) { 
              secondLine=randomRead.readLine();
              second++;
          }
          //��ȡfileTemp�е�2����"filename"֮��=�����ֵ�λ��:
          int position=secondLine.lastIndexOf("=");
           //�ͻ��ϴ����ļ���������
          fileName=secondLine.substring(position+2,secondLine.length()-1);
          randomRead.seek(0); //�ٶ�λ���ļ�fileTemp�Ŀ�ͷ
          //��ȡ��4�лس����ŵ�λ��
          long  forthEndPosition=0;
          int forth=1;
          while((n=randomRead.readByte())!=-1&&(forth<=4)){  
             if(n=='\n'){
                forthEndPosition=randomRead.getFilePointer();
                forth++;
             }
          }
          //���ݿͻ��ϴ��ļ������֣������ļ��������:
          byte  cc[]=fileName.getBytes("iso-8859-1");
          fileName=new String(cc,"utf-8");
          File fileUser= new File(dir,fileName);
          randomWrite = new RandomAccessFile(fileUser,"rw"); 
          //ȷ�����ļ�fileTemp�а����ͻ��ϴ����ļ������ݵ����λ�ã���������6��
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
          //��randomRead��ָ���ļ�fileTemp�ĵ�4�н�����λ��
          randomRead.seek(forthEndPosition);
          long startPoint=randomRead.getFilePointer();
         //��fileTemp�����ͻ��ϴ����ļ�����fileUser����ȡ��4�н���λ�ú͵�����6��֮������ݣ�:
          while(startPoint<endPosition-1){
              n=randomRead.readByte();
              randomWrite.write(n); 
              startPoint=randomRead.getFilePointer();
          }
          randomWrite.close();
          randomRead.close();
          fileBean.setMess("�ϴ��ɹ�"); 
          fileBean.setFileName(fileName);   
          fileTemp.delete(); //ɾ����ʱ�ļ�
       }
       catch(Exception ee) {
          fileBean.setMess("û��ѡ���ļ����ϴ�ʧ��"); 
       }
      RequestDispatcher dispatcher=
      request.getRequestDispatcher("example9_4.jsp");
      dispatcher.forward(request, response);
   } 
}
