package save.data;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Iterator;
public class ExpressWish_Bean { 
    public HashMap<String,ExpressWish> wishList; 
    ArrayList<ExpressWish> wishes;//存放wishList中的表白信息的ArrayList。
    public ExpressWish_Bean(){
        wishList = new HashMap<String,ExpressWish>();
        wishes = new ArrayList<ExpressWish>();
    }
    public void addExpressWish(String id,ExpressWish expressWish){
        wishList.put(id,expressWish);
        putToArrays(wishList);//再把全部表白放到ArrayList wishes。
    }
    public void removeExpressWish(String id){
        wishList.remove(id);
        putToArrays(wishList);
    }
    public String getId(int index) {//返回某个表白者。
       return wishes.get(index).getId();
    }
    public String getPeopleName(int index) {//返回某个表白者。
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
    void putToArrays(HashMap<String,ExpressWish> list){//把表白放到wishes。
        wishes.clear();
        Iterator<ExpressWish> iterator = list.values().iterator();
        while(iterator.hasNext()){
            ExpressWish wish = iterator.next();
            wishes.add(wish); 
        }
    }
}
