package handle.data;
import save.data.TestPaperBean; //引入bean。
import save.data.Problem;
import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import javax.sql.DataSource;
import javax.naming.Context;
import javax.naming.InitialContext;
public class GiveTestPaper_Servlet extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void service(HttpServletRequest request,HttpServletResponse response) 
      throws ServletException,IOException{
      TestPaperBean paperBean=null;
      HttpSession session=request.getSession(true);
      paperBean=(TestPaperBean)session.getAttribute("paperBean");
      if(paperBean==null){
          paperBean=new TestPaperBean(); //创建Javabean对象。
          session.setAttribute("paperBean",paperBean);
      }
      request.setCharacterEncoding("utf-8");
      String testAmountMess=request.getParameter("testAmount");
      if(testAmountMess.length()==0) {
         response.setContentType("text/html;charset=uft-8");
         response.getWriter().print("必须给出题目数量");
         return;
      }
      int testAmount = Integer.parseInt(testAmountMess);//考题数量
      if(paperBean.isGivenProblem ==false){
          giveProblem(paperBean,testAmount,response);//见后面的giveProblem方法。
      }
      else {
          response.sendRedirect("example8_11_exam.jsp");
      }
   }
   void giveProblem(TestPaperBean paperBean,int testAmount,HttpServletResponse response){
     paperBean.problemList.clear();
     Connection con =null;
     try{
        Context  context =new InitialContext();;
        Context  contextNeeded=(Context)context.lookup("java:comp/env");
        DataSource ds=(DataSource)contextNeeded.lookup("examinationConn");//连接池。 
        con = ds.getConnection();//使用连接池中的连接。
        Statement sql=con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,
                               ResultSet.CONCUR_UPDATABLE);
        ResultSet rs=sql.executeQuery("SELECT * FROM testQuesion");
        rs.last();    
        int recordAmount=rs.getRow();  //得到记录数。
        int [] a = getRandomNumber(recordAmount);//将数字随机排列。
        //提交的考题数量可能大于数据库表的记录:
        testAmount = Math.min(a.length,testAmount);
        for(int i=0;i<testAmount;i++){ //随机抽取testAmount题目放入paperBean。
            rs.absolute(a[i]);      //游标移动到第a[i]行。
            Problem problem = new Problem();
            problem.index =""+(i+1);         //题目编号。
            problem.content =rs.getString(2);//题目内容。
            problem.choiceA =rs.getString(3);//选择A。
            problem.choiceB =rs.getString(4);//选择A。
            problem.choiceC =rs.getString(5);//选择A。
            problem.choiceD =rs.getString(6);//选择A。
            problem.imageName = rs.getString(7);//题目所需图像名字。
            problem.correctAnswer = rs.getString(8);//题目的答案。
            paperBean.add(problem);   //paperBean添加一道题目。
        }
        paperBean.isGivenProblem = true;
        con.close();//把连接放回连接池。
        response.sendRedirect("example8_11_exam.jsp");
     }
     catch(Exception e){
       try{
          con.close();//连接放回连接池。
       }
       catch(SQLException exp){}
     }  
   }
   public int [] getRandomNumber(int n){// 随机排列1至n。
        ArrayList<Integer> list = new ArrayList<Integer>();
        for(int i=1;i<=n;i++){
            list.add(i);
        }
        Collections.shuffle(list);//把list随机排列。
        int a[] = new int[list.size()];
        for(int i=0;i<a.length;i++){
           a[i] = list.get(i);
        }
        return a;
    }
}
