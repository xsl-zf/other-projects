package sea.water;
import java.util.LinkedList;
import java.util.Iterator;
import java.util.NoSuchElementException;
public class ContinueIdioms {
    LinkedList<String> listIdioms ;//存放成语的链表。
    public String nowIdioms;      //当前参与接龙的成语。
    public ContinueIdioms(){
        listIdioms = new LinkedList<String>();
    }
    public synchronized void setNowIdioms(String s){
        nowIdioms = s;
        try{
           String previous = listIdioms.getLast(); //得到上次添加的成语。
           //上一个成语的最后一个字符:
           char endChar = previous.charAt(previous.length()-1);
           char startChar = nowIdioms.charAt(0);//当前成语的第一个字符。
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
           buffer.append("→");
        while(iterator.hasNext()){
           buffer.append(iterator.next()+"→");
        }
        return new String(buffer);
    }
}
