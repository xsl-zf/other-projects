package sea.water;
import java.util.ArrayList;
import java.util.Random;
public class Memory {
    static ArrayList<String> list = new  ArrayList<String>();
    static {
        list.add("★");
        list.add("●");
        list.add("▲");
        list.add("■");
        list.add("◆");
    }
    int grade = 5 ;     //存放级别,例如初级grade存放的值是5，初级是7，高级是10。
    String testString;  //存放需要记忆的字符序列,例如，★■★▲●。
    boolean isGivenTestString = false;//存放是否已经给了测试题目。
    public void setGrade(int n){
        grade = n;
    }
    public int getGrade(){
        return grade;
    }
    public void giveTestString(){
        StringBuffer buffer = new StringBuffer();
        Random random = new Random(); 
        for(int i=0;i<grade;i++) {
          int index = random.nextInt(list.size());
          String str = list.get(index); //从list中得到一个字符，例如★。
          buffer.append(str);
        }
        testString = new String(buffer);
    }
    public void setIsGivenTestString(boolean b){
        isGivenTestString =b;
    }
    public boolean getIsGivenTestString(){
        return isGivenTestString;
    }
    public String getTestString(){
        return testString;
    }
}