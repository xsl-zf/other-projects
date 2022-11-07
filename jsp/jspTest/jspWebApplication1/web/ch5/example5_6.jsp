<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<style>
   #textStyle{
      font-family:宋体;font-size:36;color:blue 
   }
</style>
<% request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="triangle" class="red.star.Triangle" scope="request"/>
<HTML><body id = textStyle bgcolor=#ffccff>
<form action="" method="post" >
输入三角形三边：
边A:<input type=text name="sideA" id = textStyle value=0 size=5/>
边B:<input type=text name="sideB" id = textStyle value=0 size=5/>
边C:<input type=text name="sideC" id = textStyle value=0 size=5/>
<br><input type=submit id = textStyle value="提交"/>
</form>
<jsp:setProperty name="triangle" property="*"/>
三角形的三边是：
<jsp:getProperty name="triangle" property="sideA"/>,
<jsp:getProperty name="triangle" property="sideB"/>,
<jsp:getProperty name="triangle" property="sideC"/>.
<br><b>这三个边能构成一个三角形吗？<jsp:getProperty name="triangle" property="isTriangle"/>
<br>面积是:<jsp:getProperty name="triangle" property="area"/></b>
</body></HTML>
