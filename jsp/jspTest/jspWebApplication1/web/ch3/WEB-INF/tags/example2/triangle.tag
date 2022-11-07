<%@ tag pageEncoding="utf-8" %>
<%@ attribute name="sideA" required="true" %>
<%@ attribute name="sideB" required="true" %>
<%@ attribute name="sideC" required="true" %>
<%! public String getArea(double a,double b,double c) {
       if(a+b>c&&a+c>b&&c+b>a) {
           double p=(a+b+c)/2.0;
           double area=Math.sqrt(p*(p-a)*(p-b)*(p-c)) ;
           String result = String.format("%.2f",area);
           return "<br>三角形面积(小数点保留2位):"+result;
        }
        else
           return("<br>"+a+","+b+","+c+"不能构成一个三角形,无法计算面积");
        }
%>
<%  out.println("<BR>三边："+sideA+","+sideB+","+sideC);
    double a=Double.parseDouble(sideA);
    double b=Double.parseDouble(sideB);
    double c=Double.parseDouble(sideC);
    out.println(getArea(a,b,c));
%>

