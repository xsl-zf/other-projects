package sea.water;
import java.util.ArrayList;
import java.util.Random;
public class Memory {
    static ArrayList<String> list = new  ArrayList<String>();
    static {
        list.add("��");
        list.add("��");
        list.add("��");
        list.add("��");
        list.add("��");
    }
    int grade = 5 ;     //��ż���,�������grade��ŵ�ֵ��5��������7���߼���10��
    String testString;  //�����Ҫ������ַ�����,���磬��������
    boolean isGivenTestString = false;//����Ƿ��Ѿ����˲�����Ŀ��
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
          String str = list.get(index); //��list�еõ�һ���ַ�������
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