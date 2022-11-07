package sea.water;
public class Fraction {
    public double number ;   //存放小数
    public long numerator ;  //存放分子
    public long denominator; //存放分母 
    public double getNumber(){
        String numberString = String.valueOf(number);
        String xiaoshuPart = 
        numberString.substring(numberString.indexOf(".")+1);//得到纯小数部分。
        return Double.parseDouble("0."+xiaoshuPart);
    }
    public long getNumerator(){
        return numerator;
    }
    public long getDenominator(){
        return denominator;
    }
    public void setNumber(double number){
        this.number = number;
        String numberString = String.valueOf(number);
        String xiaoshuPart = 
        numberString.substring(numberString.indexOf(".")+1); //得到小数部分。
        int m = xiaoshuPart.length();//m的值就是小数的小数位数。
        numerator = Long.parseLong(xiaoshuPart);  //分子。
        denominator = (long)Math.pow(10,m);        //分母。
        long greatCommonDivisor = f(numerator,denominator) ; //最大公约数。
        numerator = numerator/greatCommonDivisor;
        denominator = denominator/greatCommonDivisor;
    }
    private long f(long a,long b) { //求a和b的最大公约数
      if(a==0) return 1;
      if(a<b) {
         long c = a;
         a = b;
         b = c; 
      }
      long r=a%b;
      while(r!=0) {
         a = b;
         b = r;
         r = a%b;
      } 
      return b;
   }
}
