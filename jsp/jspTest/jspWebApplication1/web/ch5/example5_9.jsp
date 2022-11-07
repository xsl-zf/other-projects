<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<style>
   #textStyle{
      font-family:宋体;font-size:18;color:blue 
   }
</style>
<% request.setCharacterEncoding("utf-8");
%>
<HTML><body id = textStyle bgcolor = #ffccff>
<jsp:useBean id="calendar" class="red.star.Calendar" scope="session" />
<jsp:setProperty  name="calendar" property="year"   param = "year"/> 
<jsp:setProperty  name="calendar" property="month"  param = "month" /> 
<jsp:getProperty  name="calendar" property="year" /> 年
<jsp:getProperty  name="calendar" property="month" />月的日历：<br>
<jsp:getProperty  name="calendar" property="saveCalender" /> 
<br><a href ="?month=<%=calendar.getMonth()+1 %>">下一月</a>
<a href ="?month=<%=calendar.getMonth()-1 %>">上一月</a>
<form action="" method = get >
输入年份<input type=text name="year"  id = textStyle  size=6 />
选择月份 <select name="month" id = textStyle size =1>
  <option value="1">1月</option>
  <option value="2">2月</option>
  <option value="3">3月</option>
  <option value="4">4月</option>
  <option value="5">5月</option>
  <option value="6">6月</option>
  <option value="7">7月</option>
  <option value="8">8月</option>
  <option value="9">9月</option>
  <option value="10">10月</option>
  <option value="11">11月</option>
  <option value="12">12月</option>
</select><br> 
<input type="submit" value="提交" id = textStyle "/>
</form> 
</body></HTML>
