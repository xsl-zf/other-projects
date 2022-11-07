<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<jsp:useBean id="idioms" class="sea.water.ContinueIdioms" scope="application" />
<style>
   #tomStyle{
      font-family:宋体;font-size:26;color:blue 
   }
</style>
<% request.setCharacterEncoding("utf-8");
%>
<jsp:setProperty name="idioms" property="nowIdioms" param ="nowIdioms" />
<HTML><body bgcolor = #ffccff>
<p id = tomStyle>
目前的接龙情景：<br>
<textArea id = tomStyle rows=5 cols=38>
<%= idioms.getAllIdioms() %>
</textArea><br>
<form  action="" id = tomStyle method = post >
继续接龙,输入成语:<text  name="nowIdioms" value = 10 />
<br><input type="text" name ="nowIdioms"  id = tomStyle />
<input type="submit"  id = tomStyle value="提交"/>
</form> 
</p></body></HTML>
