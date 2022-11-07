package sea.water;
public class Fraction {
    public double number ;   //���С��
    public long numerator ;  //��ŷ���
    public long denominator; //��ŷ�ĸ 
    public double getNumber(){
        String numberString = String.valueOf(number);
        String xiaoshuPart = 
        numberString.substring(numberString.indexOf(".")+1);//�õ���С�����֡�
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
        numberString.substring(numberString.indexOf(".")+1); //�õ�С�����֡�
        int m = xiaoshuPart.length();//m��ֵ����С����С��λ����
        numerator = Long.parseLong(xiaoshuPart);  //���ӡ�
        denominator = (long)Math.pow(10,m);        //��ĸ��
        long greatCommonDivisor = f(numerator,denominator) ; //���Լ����
        numerator = numerator/greatCommonDivisor;
        denominator = denominator/greatCommonDivisor;
    }
    private long f(long a,long b) { //��a��b�����Լ��
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
