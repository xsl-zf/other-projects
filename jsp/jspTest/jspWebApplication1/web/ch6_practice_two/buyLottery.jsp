<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<style>
   #red{
      font-family:宋体;font-size:26;color:red 
   }
</style>
<style>
   #blue{
      font-family:宋体;font-size:26;color:blue 
   }
</style>
<HTML><body bgcolor=#ffccff>
<form action="lottery"  method=post>
<br>输入6个红球号码(1-33)逗号或非数字字符分隔:<br>
<textArea name="digitRedball" id =red rows=1 cols=30 ></textArea>
<br>输入1个蓝球号码(1-16):<br>
<input type = text name ="digitBlueball" id = blue maxlength=2 size =2/>
<input type=submit id = blue value="提交"/>
</form>
</p></body></HTML>
