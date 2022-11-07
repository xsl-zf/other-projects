<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<HTML><body bgcolor=#ffccff >
<% session.setAttribute("message","请您猜字母");
   session.setAttribute("count","0");
   char a[]=new char[26];
   int m = 0;
   for(char c='a';c<='z';c++) {
      a[m] = c;
      m++;
   }
   int randomIndex=(int)(Math.random()*a.length);      
   char ch=a[randomIndex];  //获取一个英文字母
   session.setAttribute("savedLetter",new Character(ch));//将该字母放入session中
%>
<h3>访问或刷新该页面可以随机得到一个英文字母。
<br>单击超链接去猜出这个字母:<br>
<a href="example6_8_input.jsp">去猜字母</a>
</h3></body></HTML>
