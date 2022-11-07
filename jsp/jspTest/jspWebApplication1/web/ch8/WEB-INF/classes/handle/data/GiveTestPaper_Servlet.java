package handle.data;
import save.data.TestPaperBean; //����bean��
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
          paperBean=new TestPaperBean(); //����Javabean����
          session.setAttribute("paperBean",paperBean);
      }
      request.setCharacterEncoding("utf-8");
      String testAmountMess=request.getParameter("testAmount");
      if(testAmountMess.length()==0) {
         response.setContentType("text/html;charset=uft-8");
         response.getWriter().print("���������Ŀ����");
         return;
      }
      int testAmount = Integer.parseInt(testAmountMess);//��������
      if(paperBean.isGivenProblem ==false){
          giveProblem(paperBean,testAmount,response);//�������giveProblem������
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
        DataSource ds=(DataSource)contextNeeded.lookup("examinationConn");//���ӳء� 
        con = ds.getConnection();//ʹ�����ӳ��е����ӡ�
        Statement sql=con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,
                               ResultSet.CONCUR_UPDATABLE);
        ResultSet rs=sql.executeQuery("SELECT * FROM testQuesion");
        rs.last();    
        int recordAmount=rs.getRow();  //�õ���¼����
        int [] a = getRandomNumber(recordAmount);//������������С�
        //�ύ�Ŀ����������ܴ������ݿ��ļ�¼:
        testAmount = Math.min(a.length,testAmount);
        for(int i=0;i<testAmount;i++){ //�����ȡtestAmount��Ŀ����paperBean��
            rs.absolute(a[i]);      //�α��ƶ�����a[i]�С�
            Problem problem = new Problem();
            problem.index =""+(i+1);         //��Ŀ��š�
            problem.content =rs.getString(2);//��Ŀ���ݡ�
            problem.choiceA =rs.getString(3);//ѡ��A��
            problem.choiceB =rs.getString(4);//ѡ��A��
            problem.choiceC =rs.getString(5);//ѡ��A��
            problem.choiceD =rs.getString(6);//ѡ��A��
            problem.imageName = rs.getString(7);//��Ŀ����ͼ�����֡�
            problem.correctAnswer = rs.getString(8);//��Ŀ�Ĵ𰸡�
            paperBean.add(problem);   //paperBean���һ����Ŀ��
        }
        paperBean.isGivenProblem = true;
        con.close();//�����ӷŻ����ӳء�
        response.sendRedirect("example8_11_exam.jsp");
     }
     catch(Exception e){
       try{
          con.close();//���ӷŻ����ӳء�
       }
       catch(SQLException exp){}
     }  
   }
   public int [] getRandomNumber(int n){// �������1��n��
        ArrayList<Integer> list = new ArrayList<Integer>();
        for(int i=1;i<=n;i++){
            list.add(i);
        }
        Collections.shuffle(list);//��list������С�
        int a[] = new int[list.size()];
        for(int i=0;i<a.length;i++){
           a[i] = list.get(i);
        }
        return a;
    }
}
