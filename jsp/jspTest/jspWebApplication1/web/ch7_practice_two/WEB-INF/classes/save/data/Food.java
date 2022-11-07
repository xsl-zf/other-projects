package save.data;
public class Food implements Comparable<Food>{ 
    String foodName ;   //食物名称。
    double price;       //价格。
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
    public int compareTo(Food food){ //Food对象按价格比较大小。
        return (int)(food.getPrice()*1000-price*1000);
    }
}
