<%@ page contentType = "text/html" %>  
<%@ page pageEncoding = "utf-8" %>  
<HTML><body bgcolor = #ffccff>
<p style="font-family:宋体;font-size:36;color:blue">
<%! double multi(double x,double y){ //定义方法
        return x*y;
    }
    double div(double x,double y) { //定义方法
        return x/y;
    }
    class Circle { //定义类
        double r;
        double getArea(){
           return 3.1415926*r*r;
        }
    }
%>
<%  double x=8.79;
    double y=20.8;
    out.print("调用multi方法计算"+x+"与"+y+"之积：<br>");
    out.print(multi(x,y));
    out.print("<br>调用div方法计算"+y+"除以"+x+"的商：<br>");
    String s =String.format("小数点保留3位：%10.3f",div(y,x));
    out.println(s); 
    Circle circle = new Circle(); //用Circle类创建对象。
    circle.r = 3.6;
    out.print("<br>半径是"+circle.r+"的圆面积"+circle.getArea()); 
%>
</p></body></HTML>

