<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<jsp:useBean id="menu" class ="save.data.MenuBean" scope="session"/>
<style>
   #textStyle{
      font-family:宋体;font-size:36;color:blue 
   }
</style>
<HTML><body bgcolor=#ffccff>
<form action="addMenu" id= textStyle method=post>
输入餐单(每次输入一个消费项目)：<br>
名称：<input type=text name='foodName' id =textStyle value ='剁椒鱼头' size = 8 />
价格：<input type=text name='price' id =textStyle value ='26.9' size = 8 />
<br><input type=submit id=textStyle value="添加到餐单">
</form>
</body></HTML>
