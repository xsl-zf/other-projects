package sea.water;
import java.util.LinkedList;
import java.util.Iterator;
import java.util.NoSuchElementException;
public class ContinueIdioms {
    LinkedList<String> listIdioms ;//��ų��������
    public String nowIdioms;      //��ǰ��������ĳ��
    public ContinueIdioms(){
        listIdioms = new LinkedList<String>();
    }
    public synchronized void setNowIdioms(String s){
        nowIdioms = s;
        try{
           String previous = listIdioms.getLast(); //�õ��ϴ���ӵĳ��
           //��һ����������һ���ַ�:
           char endChar = previous.charAt(previous.length()-1);
           char startChar = nowIdioms.charAt(0);//��ǰ����ĵ�һ���ַ���
           if(startChar == endChar) 
                  listIdioms.add(nowIdioms);
         }
         catch(NoSuchElementException exp){
            listIdioms.add(nowIdioms);
            System.out.println(exp);
         }
    }
    public String getAllIdioms(){
        StringBuffer buffer = new StringBuffer();
        Iterator<String> iterator =listIdioms.iterator();
        if(iterator.hasNext() == false)
           buffer.append("��");
        while(iterator.hasNext()){
           buffer.append(iterator.next()+"��");
        }
        return new String(buffer);
    }
}
