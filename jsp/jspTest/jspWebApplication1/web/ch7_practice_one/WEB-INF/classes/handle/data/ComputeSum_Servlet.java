package handle.data;
import save.data.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class ComputeSum_Servlet extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void service(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
      Series_Bean seriesData = new Series_Bean(); //创建bean。
      request.setCharacterEncoding("utf-8");
      request.setAttribute("seriesData",seriesData);//request bean。
      String mess =request.getParameter("submit");
      String firstItem = request.getParameter("firstItem");//首项。
      String var = request.getParameter("var");//或公比公差。
      String number = request.getParameter("number");//求和项数。
      if(firstItem.length()==0||var.length()==0||number.length() == 0){
            response.sendRedirect("inputNumber.jsp");
            return;
      }
      if(mess.contains("等差")) {
         compute(firstItem,var,number,seriesData,0);
      }
      else if(mess.contains("等比")) {
         compute(firstItem,var,number,seriesData,1);
      }
      //请求inputNumber.jsp显示seriesData中的数据
      RequestDispatcher dispatcher=
      request.getRequestDispatcher("inputNumber.jsp");
      dispatcher.forward(request,response); 
    } 
    void compute(String firstItem,String var,String number,
                     Series_Bean seriesData,int type){
      double a=Double.parseDouble(firstItem);
      double d=Double.parseDouble(var);
      int n=Integer.parseInt(number);
      seriesData.setFirstItem(a); //将数据存储在数据模型seriesData中。 
      seriesData.setVar(d);           
      seriesData.setNumber(n);
      double sum=0,item=a;
      int i=1;
      if(type == 0) {
         seriesData.setName("等差级数的公差");
         while(i<=n){       //计算等差数列的和
            sum=sum+item;
            i++;
            item=item+d;  
         }
         seriesData.setSum(sum);
      }
      else if(type == 1){
         seriesData.setName("等比级数的公比");
         while(i<=n){       //计算等比数列的和
            sum=sum+item;
            i++;
            item=item*d;  
         }
         seriesData.setSum(sum);
      }
   } 
}
