﻿<%@ page info="清华大学图像tsinghua.jpg" %>
<%  String s=getServletInfo();
    String str[]=s.split("图像");
%>
<HTML><center>
        <body background="image/<%=str[1]%>">
            <p>
                <br><%=str[0]%>出版社是中国著名出版社
                <br><%=str[0] %>是全国著名的高等学府
            </p></body></center><HTML>
