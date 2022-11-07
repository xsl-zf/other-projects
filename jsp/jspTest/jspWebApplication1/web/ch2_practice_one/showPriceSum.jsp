<%@ page contentType="text/html" %>  
<%@ page pageEncoding = "utf-8" %>
<%@ page import="java.util.regex.Pattern" %>
<%@ page import="java.util.regex.Matcher" %>
<%!  
public double getPriceSum(String input){  // 定义方法
    Pattern pattern;          //模式对象
    Matcher matcher;         //匹配对象
    String regex="-?[0-9][0-9]*[.]?[0-9]*" ;//匹配数字,整数或浮点数的正则表达式
    pattern = Pattern.compile(regex);  //初试化模式对象
    matcher = pattern.matcher(input);  //初始化匹配对象,用于检索input
    double sum = 0;
    while(matcher.find()) {
       String str = matcher.group(); 
       sum += Double.parseDouble(str);
    } 
    return sum;
}
%>  
<HTML><body bgcolor=cyan>
<p style="font-family:黑体;font-size:20">
<br> 张三的菜单：</br>
<%  String str = "麻辣豆腐:20.6元,红烧肉:68.9元";
%>
<br><%= str %></br>
<br><b><i>消费总和:<%= getPriceSum(str) %></i></b></br>
<br> 李四的菜单：</br>
<%  str = "剁椒鱼头:62.9元,烤鸭:199元,红焖大虾:289.9元";
%>
<br><%= str %></br>
<br><b><i>消费总和:<%= getPriceSum(str) %></i></b></br>
</p>
</body></HTML>
