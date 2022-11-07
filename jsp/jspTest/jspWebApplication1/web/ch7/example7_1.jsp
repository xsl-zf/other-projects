<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<jsp:useBean id="digitBean" class ="save.data.Example7_1_Bean" scope="request"/>
<style>
   #tom{
      font-family:宋体;font-size:26;color:blue 
   }
</style>
<HTML><body bgcolor=#ffccff>
<form action="computer" id =tom method=post>
<table>
<tr><td id =tom> 输入两个数:</td>
<td id =tom>
<input type=text name="numberOne" 
       value=<%= digitBean.getNumberOne() %> id =tom size=6/></td>
<td><input type=text name="numberTwo" 
       value=<%=digitBean.getNumberTwo()%> id =tom size=6/></td>
</tr>
<tr><td id =tom>选择运算符号:</td>
<td id =tom>
<select id =tom name="operator">
    <option value="+">+(加)
    <option value="-">-(减)
    <option value="*">*(乘)
    <option value="/">/(除)
</select> 
</td>
<td><input type="submit" id =tom value="提交" name="sub"/></td>
</tr>
</table></form> 
<p id=tom>
运算结果：
<jsp:getProperty name="digitBean" property="numberOne"/>
<jsp:getProperty name="digitBean" property="operator"/>
<jsp:getProperty name="digitBean" property="numberTwo"/> =
<jsp:getProperty name="digitBean" property="result"/> 
</p></body></HTML>
