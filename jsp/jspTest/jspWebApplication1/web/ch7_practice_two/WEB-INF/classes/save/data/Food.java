package save.data;
public class Food implements Comparable<Food>{ 
    String foodName ;   //ʳ�����ơ�
    double price;       //�۸�
    public void setFoodName(String name){
        foodName = name; 
    }
    public String getFoodName(){
        return foodName;
    }
    public void setPrice(double d){
        price = d; 
    }
    public double getPrice(){
        return price; 
    }
    public int compareTo(Food food){ //Food���󰴼۸�Ƚϴ�С��
        return (int)(food.getPrice()*1000-price*1000);
    }
}
