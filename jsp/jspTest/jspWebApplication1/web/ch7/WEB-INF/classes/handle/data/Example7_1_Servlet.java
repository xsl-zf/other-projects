package handle.data;
import save.data.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class Example7_1_Servlet extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
       super.init(config);
   }
   public void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
       Example7_1_Bean digitBean = null;
       digitBean = new Example7_1_Bean();  //����Javabean����.
       //digitBean ��request bean:
       request.setAttribute("digitBean",digitBean);
       String str1 = request.getParameter("numberOne");
       String str2 = request.getParameter("numberTwo");
       if(str1==null||str2==null)
         return;
       if(str1.length()==0||str2.length()==0)
         return;
       double numberOne = Double.parseDouble(str1);
       double numberTwo = Double.parseDouble(str2);
       String operator = request.getParameter("operator");
       double result=0;
       if(operator.equals("+"))
           result = numberOne+numberTwo;
       else if(operator.equals("-"))
           result = numberOne-numberTwo;
       else if(operator.equals("*"))
           result = numberOne*numberTwo;
       else if(operator.equals("/"))
           result = numberOne/numberTwo;
       digitBean.setNumberOne(numberOne); //�����ݴ洢��digitBean�� 
       digitBean.setNumberTwo(numberTwo);  
       digitBean.setOperator(operator);   
       digitBean.setResult(result); 
       //����example7_1.jsp��ʾdigitBean�е�����:
       RequestDispatcher dispatcher= request.getRequestDispatcher("example7_1.jsp");
       dispatcher.forward(request,response);
   } 
   public  void  doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException,IOException{
       doPost(request,response);
   }
} 
