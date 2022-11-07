<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %> 
<%@ page import="java.util.LinkedList" %>
<%@ page import="java.util.Random" %>
<%@ taglib tagdir="/WEB-INF/tags/example3" prefix="sortNumber"%>
<HTML><body bgcolor = #CCCCCC>
<%  LinkedList<Double> listNumber=new LinkedList<Double>();
    Random random = new Random();
    for(int i =0;i<3;i++) {
       double d = random.nextDouble(); //[0,1)之间的随机数
       listNumber.add(d);
    }  
%>    
<p style="font-family:宋体;font-size:36;color:blue">
排序数据
<sortNumber:sort list="<%= listNumber %>"/>  <%-- 使用Tag标记 --%>
</body></HTML>
