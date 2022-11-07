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
      Series_Bean seriesData = new Series_Bean(); //����bean��
      request.setCharacterEncoding("utf-8");
      request.setAttribute("seriesData",seriesData);//request bean��
      String mess =request.getParameter("submit");
      String firstItem = request.getParameter("firstItem");//���
      String var = request.getParameter("var");//�򹫱ȹ��
      String number = request.getParameter("number");//���������
      if(firstItem.length()==0||var.length()==0||number.length() == 0){
            response.sendRedirect("inputNumber.jsp");
            return;
      }
      if(mess.contains("�Ȳ�")) {
         compute(firstItem,var,number,seriesData,0);
      }
      else if(mess.contains("�ȱ�")) {
         compute(firstItem,var,number,seriesData,1);
      }
      //����inputNumber.jsp��ʾseriesData�е�����
      RequestDispatcher dispatcher=
      request.getRequestDispatcher("inputNumber.jsp");
      dispatcher.forward(request,response); 
    } 
    void compute(String firstItem,String var,String number,
                     Series_Bean seriesData,int type){
      double a=Double.parseDouble(firstItem);
      double d=Double.parseDouble(var);
      int n=Integer.parseInt(number);
      seriesData.setFirstItem(a); //�����ݴ洢������ģ��seriesData�С� 
      seriesData.setVar(d);           
      seriesData.setNumber(n);
      double sum=0,item=a;
      int i=1;
      if(type == 0) {
         seriesData.setName("�Ȳ���Ĺ���");
         while(i<=n){       //����Ȳ����еĺ�
            sum=sum+item;
            i++;
            item=item+d;  
         }
         seriesData.setSum(sum);
      }
      else if(type == 1){
         seriesData.setName("�ȱȼ����Ĺ���");
         while(i<=n){       //����ȱ����еĺ�
            sum=sum+item;
            i++;
            item=item*d;  
         }
         seriesData.setSum(sum);
      }
   } 
}
