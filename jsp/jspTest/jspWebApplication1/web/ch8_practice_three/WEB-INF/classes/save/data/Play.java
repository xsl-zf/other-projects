package save.data;
import java.io.*; 
import java.util.regex.Pattern;
import java.util.regex.Matcher;
public class Play {
    public String logname;
    String pictureName[]; //���logname�û����ͼƬ�ļ����ֵ����顣
    public String showImage;  //��ŵ�ǰҪ��ʾ��ͼƬ��
    public String webDir="";  //web����Ŀ¼�����֡�
    public String tomcatDir;  //tomcat�İ�װĿ¼,����apache-tomcat-9.0.26��
    int index = 0;        //���ͼƬ�ļ�����š�
    public Play() {
        File f= new File(""); 
        String path = f.getAbsolutePath();
        int index = path.indexOf("bin");//bin��tomcat�İ�װĿ¼�µ���Ŀ¼��
        tomcatDir = path.substring(0,index); //�õ�tomcat�İ�װĿ¼�����֡�
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

