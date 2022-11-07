<%@ page contentType="text/html" %>  
<%@ page pageEncoding = "utf-8" %> 
<HTML><body bgcolor = cyan>
<script>   <!--JavaScript(JS)标记 -->   
  var sum = 0;
  var i = 1;
  for(i =1;i<=100;i++) {
     sum = sum+i;
  }
  document.write("<h1>1-100连续和是:"+sum+"<br></h1>");                 
  var userTime = new Date();
  var hour = userTime.getHours();
  var minute =userTime.getMinutes();
  var second = userTime.getSeconds();
  var millisecond = userTime.getMilliseconds();
  document.write("<h2>浏览器时间:"+
                  hour+":"+minute+":"+second+":"+millisecond+"<br></h2>");
</script> 
</body></HTML>
