<%@ attribute name="list" required="true" type="java.util.LinkedList" %>
<%@ tag import="java.util.Collections" %>
<%@ tag import="java.util.Iterator" %>
<% 
     Collections.sort(list); //排序链表
     Iterator<Double> ite = list.iterator(); //得到迭代器
     while(ite.hasNext()) {  //遍历链表
        out.print("<br>"+ite.next());   
     }
%>