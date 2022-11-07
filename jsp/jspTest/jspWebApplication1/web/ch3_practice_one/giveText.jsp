<%@ page contentType = "text/html" %>  
<%@ page pageEncoding = "utf-8" %> 
<%@ page import="java.util.Iterator" %>
<%@ taglib tagdir = "/WEB-INF/tags/prictice1" prefix = "getWords"%>
<HTML><body bgcolor = #CCCCFF>
<% String str = "How are you,are you student? where are you from? ";
%>
<getWords:backWords okString ="<%= str %>" /> <%-- 使用Tag标记 --%>
<p style="font-family:宋体;font-size:26">
<%= str %><br>
<%
     Iterator<String> ite = words.iterator(); //使用Tag标记返回的Double对象words
     out.print("使用了"+ words.size()+"个单词:<br>");
     while(ite.hasNext()) {  //遍历集合
        out.print(" "+ite.next());   
     }
%>
</p></body></HTML>  