<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<jsp:useBean id="seriesData" class ="save.data.Series_Bean" scope="request"/>
<style>
   #tom{
      font-family:宋体;font-size:28;color:blue 
   }
</style>
<HTML><body bgcolor=#FFBBFF>
<form action="computeSum" id = tom method="post" >
等差级数求和：
  <br>输入首项:<input type=text id=tom name="firstItem" size=4>
      输入公差(公比):<input type=text id=tom name="var" size=4>
      求和项数:<input type=text id=tom name="number" size=4>
  <input type=submit name = "submit" id = tom value="提交(求等差级数和)" />
  <input type=submit name = "submit" id = tom value="提交(求等比级数和)">
</form>
<table border=1 id = tom>
   <tr> 
    <th> 级数的首项</th>
    <th> <jsp:getProperty name="seriesData" property="name"/></th>
    <th> 所求项数</th>
    <th> 求和结果</th>
   </tr>
    <td><jsp:getProperty name="seriesData" property="firstItem"/></td>
    <td><jsp:getProperty name="seriesData" property="var"/></td>
    <td><jsp:getProperty name="seriesData" property="number"/></td>
    <td><jsp:getProperty name="seriesData" property="sum"/></td>
   </tr>
</table>
</body></HTML>
