package save.data;
import java.util.ArrayList;
import java.util.Collections;
public class MenuBean { 
    String time ; //点餐时间。
    String totalPrice; //餐单总额。
    ArrayList<Food> foodList;//存放Food对象的ArrayList。
    public MenuBean(){
        foodList = new ArrayList<Food>();
    }
    public void addFood(Food food){
        foodList.add(food);
        Collections.sort(foodList);//排序foodList。
    }
    public void removeFood(int index){
        if(index>=0){
           foodList.remove(index);
           Collections.sort(foodList);//排序foodList。
        }
    }
    public String getFoodName(int index) {//返回某个Food的名字。
        return foodList.get(index).getFoodName();
    }
    public double getPrice(int index) {   //返回某个Food的价格。
        return foodList.get(index).getPrice();
    }
    public int size() {
        return foodList.size();
    }
    public void setTime(String time){
        this.time = time;  
    }
    public String getTime(){
        return time;  
    }
    public String getTotalPrice(){
        double sum = 0;
        for(Food food:foodList){
          sum += food.getPrice();
        }
        totalPrice = String.format("%.2f",sum);//保留2位小数。
        return totalPrice;
    }
}
