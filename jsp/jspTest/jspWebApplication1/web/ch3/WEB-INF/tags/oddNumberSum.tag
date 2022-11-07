<%@ tag pageEncoding="utf-8" %>
<p style="font-family:宋体;font-size:36">
1～100内的奇数之和：
  <%  int sum=0,i=1;
         for(i=1;i<=100;i++){
            if(i%2==1)
               sum=sum+i;
        }
        out.println(sum);
  %> 
</p>
