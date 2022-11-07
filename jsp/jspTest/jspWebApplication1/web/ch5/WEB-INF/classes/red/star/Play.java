package red.star;
import java.io.*; 
public class Play {
    String pictureName[];  //���ȫ��ͼƬ�ļ����ֵ����顣
    String showImage;     //��ŵ�ǰҪ��ʾ��ͼƬ��
    String webDir="";     //web����Ŀ¼�����֣�����ch5
    String tomcatDir;     //tomcat�İ�װĿ¼,����apache-tomcat-9.0.26��
    int index = 0;        //���ͼƬ�ļ������
    public Play() {
        File f= new File(""); //���ļ���Ϊ��Tomcat������������Ŀ¼�м�binĿ¼�С�
        String path = f.getAbsolutePath();
        int index = path.indexOf("bin");//bin��tomcat�İ�װĿ¼�µ���Ŀ¼��
        tomcatDir = path.substring(0,index); //�õ�tomcat�İ�װĿ¼�����֡�
    }
    public void setWebDir(String s) {
        webDir = s;
        File dirImage = new File(tomcatDir+"/webapps/"+webDir+"/image"); 
        pictureName = dirImage.list();
    }
    public String getShowImage() {
       showImage = pictureName[index];
       return showImage; 
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
