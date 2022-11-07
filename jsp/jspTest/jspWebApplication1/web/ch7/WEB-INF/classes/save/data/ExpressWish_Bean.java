package save.data;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Iterator;
public class ExpressWish_Bean { 
    public HashMap<String,ExpressWish> wishList; 
    ArrayList<ExpressWish> wishes;//���wishList�еı����Ϣ��ArrayList��
    public ExpressWish_Bean(){
        wishList = new HashMap<String,ExpressWish>();
        wishes = new ArrayList<ExpressWish>();
    }
    public void addExpressWish(String id,ExpressWish expressWish){
        wishList.put(id,expressWish);
        putToArrays(wishList);//�ٰ�ȫ����׷ŵ�ArrayList wishes��
    }
    public void removeExpressWish(String id){
        wishList.remove(id);
        putToArrays(wishList);
    }
    public String getId(int index) {//����ĳ������ߡ�
       return wishes.get(index).getId();
    }
    public String getPeopleName(int index) {//����ĳ������ߡ�
       return wishes.get(index).getPeopleName();
    }
    public String getTitle(int index){
        return wishes.get(index).getTitle(); 
    }
    public String getContent(int index){
        return wishes.get(index).getContent(); 
    }
    public String getDateTime(int index){
        return wishes.get(index).getDateTime();  
    }
    public int size() {
        return wishes.size();
    }
    void putToArrays(HashMap<String,ExpressWish> list){//�ѱ�׷ŵ�wishes��
        wishes.clear();
        Iterator<ExpressWish> iterator = list.values().iterator();
        while(iterator.hasNext()){
            ExpressWish wish = iterator.next();
            wishes.add(wish); 
        }
    }
}
