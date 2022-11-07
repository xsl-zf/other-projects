package save.data;
import java.util.ArrayList;
import java.util.Collections;
public class MenuBean { 
    String time ; //���ʱ�䡣
    String totalPrice; //�͵��ܶ
    ArrayList<Food> foodList;//���Food�����ArrayList��
    public MenuBean(){
        foodList = new ArrayList<Food>();
    }
    public void addFood(Food food){
        foodList.add(food);
        Collections.sort(foodList);//����foodList��
    }
    public void removeFood(int index){
        if(index>=0){
           foodList.remove(index);
           Collections.sort(foodList);//����foodList��
        }
    }
    public String getFoodName(int index) {//����ĳ��Food�����֡�
        return foodList.get(index).getFoodName();
    }
    public double getPrice(int index) {   //����ĳ��Food�ļ۸�
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
        totalPrice = String.format("%.2f",sum);//����2λС����
        return totalPrice;
    }
}
