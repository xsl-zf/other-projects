<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<style>
   #textStyle{
      font-family:宋体;font-size:36;color:blue 
   }
</style>
<% request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="computer" class="red.star.ComputerBean" scope="session"/>
<HTML><body id = textStyle bgcolor=#ffccff>
<jsp:setProperty name="computer" property="*"/>
<form action="" method=post >
   <input type=text name="numberOne" id = textStyle size=6/>
   <select name="operator" id = textStyle >
       <option value="+" id = textStyle>+
       <option value="-" id = textStyle>-
       <option value="*" id = textStyle>*
       <option value="/" id = textStyle>/
   </select> 
   <input type=text name="numberTwo" id = textStyle size=6/>
    <br> <input type="submit" value="提交" id = textStyle "/>
</form> 
<b>
<jsp:getProperty name="computer" property="numberOne"/> 
<jsp:getProperty name="computer" property="operator"/>  
<jsp:getProperty name="computer" property="numberTwo"/> =
<jsp:getProperty name="computer" property="result"/></b>
</body></HTML>
