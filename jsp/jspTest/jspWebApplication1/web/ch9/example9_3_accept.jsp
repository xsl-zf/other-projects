<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<%@ page import ="java.io.*" %>
<HTML><body>
<%try{  
     InputStream inputSteam=request.getInputStream();
     File dir=new File("D:/2000");
     dir.mkdir();
     File f=new File(dir,"B.txt");
     RandomAccessFile randomAccess = new RandomAccessFile(f,"rw"); 
     byte b[]=new byte[1000];
     int n;
     while((n=inputSteam.read(b))!=-1){
        randomAccess.write(b,0,n);
     }
     randomAccess.close();
     inputSteam.close();
     out.print("文件已上传");//这个out是内置对象。
    }
    catch(IOException ee){
       out.print("上传失败"+ee);//这个out是内置对象。 
    }
%> 
</body></HTML>


