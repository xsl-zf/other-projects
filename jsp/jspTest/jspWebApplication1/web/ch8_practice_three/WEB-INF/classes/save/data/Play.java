package save.data;
import java.io.*; 
import java.util.regex.Pattern;
import java.util.regex.Matcher;
public class Play {
    public String logname;
    String pictureName[]; //存放logname用户广告图片文件名字的数组。
    public String showImage;  //存放当前要显示的图片。
    public String webDir="";  //web服务目录的名字。
    public String tomcatDir;  //tomcat的安装目录,例如apache-tomcat-9.0.26。
    int index = 0;        //存放图片文件的序号。
    public Play() {
        File f= new File(""); 
        String path = f.getAbsolutePath();
        int index = path.indexOf("bin");//bin是tomcat的安装目录下的子目录。
        tomcatDir = path.substring(0,index); //得到tomcat的安装目录的名字。
    }
    public void setLogname(String s){
       showImage="";
       logname = s;
    }
    public void setWebDir(String s) {
        webDir = s;
        File dirImage = new File(tomcatDir+"/webapps/"+webDir+"/image"); 
        pictureName = dirImage.list(new FileStartName(logname));
    }
    public String getShowImage() {
       try {
         showImage = pictureName[index];
         return showImage; 
       }
       catch(Exception exp){
         return "flower.jpg";
       }
    } 
    public void setIndex(int i) {
       index = i; 
       if(index>=pictureName.length)
          index = 0;
       if(index < 0)
          index = pictureName.length-1;
    }
    public int getIndex() {
        return  index ; 
    } 
}
class FileStartName implements FilenameFilter {
    String logname=null;
    Pattern pattern;        
    Matcher matcher;         
    FileStartName(String logname) {
       this.logname = logname;
       pattern = Pattern.compile(logname); 
    }
    public  boolean accept(File dir,String name) {
       matcher = pattern.matcher(name); 
       if(matcher.find())
          return true;
       else
          return false;
    }              
}

