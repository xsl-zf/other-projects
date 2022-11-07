<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<style>
   #tom{
      font-family:宋体;font-size:26;color:blue 
   }
</style>
<jsp:useBean id="recordBean" class="save.data.Record_Bean" scope="session"/>
<HTML><body bgcolor=#9FEFDF><center>
<jsp:setProperty name="recordBean" property="pageSize" param="pageSize"/>
<jsp:setProperty name="recordBean" property="currentPage" param="currentPage"/>
</p>
<table id =tom border=1>
<%
    String [][] table=recordBean.getTableRecord();
    if(table==null) {
       out.print("没有记录");
       return;
    }
    String []columnName=recordBean.getColumnName();
    if(columnName!=null) { 
        out.print("<tr>");
        for(int i=0;i<columnName.length;i++){
           out.print("<th>"+columnName[i]+"</th>");
        }
        out.print("</tr>");
    } 
    int totalRecord = table.length;
    int pageSize=recordBean.getPageSize();  //每页显示的记录数
    int totalPages = recordBean.getTotalPages();
    if(totalRecord%pageSize==0)
         totalPages = totalRecord/pageSize;//总页数
    else
         totalPages = totalRecord/pageSize+1;
    recordBean.setPageSize(pageSize);
    recordBean.setTotalPages(totalPages);
    if(totalPages>=1) {
         if(recordBean.getCurrentPage()<1)
             recordBean.setCurrentPage(recordBean.getTotalPages());
         if(recordBean.getCurrentPage()>recordBean.getTotalPages())
             recordBean.setCurrentPage(1);
         int index=(recordBean.getCurrentPage()-1)*pageSize;
         int start=index;  //table的currentPage页起始位置。
         for(int i=index;i<pageSize+index;i++) { 
            if(i==totalRecord)
               break;
            out.print("<tr>");
            for(int j=0;j<columnName.length;j++) {
                out.print("<td>"+table[i][j]+"</td>");
            }
            out.print("</tr>");
        }
    }
%>
</table>
<p id =tom>全部记录数:<jsp:getProperty name="recordBean" property="totalRecords"/>。
<br>每页最多显示<jsp:getProperty name="recordBean" property="pageSize"/>条记录。
<br>当前显示第<jsp:getProperty name="recordBean" property="currentPage"/>页
(共有<jsp:getProperty name="recordBean" property="totalPages"/>页)。</p>
<table id =tom>
<tr>
  <td><form  action="" method=post>
     <input type=hidden name="currentPage" 
                   value="<%=recordBean.getCurrentPage()-1 %>"/>
     <input type=submit id =tom value="上一页"/></form>
  </td>
  <td><form action="" method=post>
     <input type=hidden name="currentPage" 
                   value="<%=recordBean.getCurrentPage()+1 %>"/>
     <input type=submit id =tom name="g" value="下一页"></form>
  </td>
   <td> <form action="" id =tom method=post>
     输入页码：<input type=textid =tom  name="currentPage" size=2 >
     <input type=submit id =tom value="提交"></form>
   </td>
</tr>
<tr><td></td><td></td>
  <td><form action="" id =tom method=post>
  每页显示
  <input type=text id =tom name="pageSize" 
   value =<%= recordBean.getPageSize()%> size=1>条记录
  <input type=submit id =tom value="确定"></form></td>
</tr>
</table>
<a href = "example8_8_input.jsp">重新输入数据库和表名</a>
</center></body></HTML> 
