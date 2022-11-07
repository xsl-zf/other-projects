<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>
<HTML><body bgcolor = cyan>
<p style="font-family:宋体;font-size:36;color:red">
<jsp:useBean id="fraction" class="sea.water.Fraction" scope="request" />
<jsp:setProperty  name="fraction" property="number"  param = "number" />
<jsp:getProperty  name="fraction" property="number" /> 
表示成分数是：<br>
<jsp:getProperty  name="fraction" property="numerator" /> /
<jsp:getProperty  name="fraction" property="denominator" />
</p></body></HTML>
