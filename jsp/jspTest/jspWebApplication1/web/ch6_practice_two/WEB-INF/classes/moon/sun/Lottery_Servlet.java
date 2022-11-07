package moon.sun;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
import java.util.*;
public class Lottery_Servlet extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void  service(HttpServletRequest request,HttpServletResponse response)
                       throws IOException{
      request.setCharacterEncoding("utf-8");
      response.setContentType("text/html;charset=utf-8");
      PrintWriter out=response.getWriter();
      out.println("<html><body bgcolor=cyan>");
      String digitRedball = request.getParameter("digitRedball");
      String digitBlueball = request.getParameter("digitBlueball");
      if(digitRedball.length()==0 ||digitBlueball.length()==0) {
          response.sendRedirect("buyLottery.jsp");//�ض�����������ҳ�档
          return;
      }
      //�û����ȫ���죬������룺
      HashSet<Integer> userRedball =  getUserDigit(digitRedball);
      HashSet<Integer> userBlueball = getUserDigit(digitBlueball);
      if(userRedball.size()!=6||userBlueball.size()!=1){
          response.sendRedirect("buyLottery.jsp");//�����Ǻ���6��������1����
          return;
      }
      HashSet<Integer> drawLotteryRedball = drawLottery(6,33);//ҡ�����ĺ���
      HashSet <Integer> drawLotteryBlueball = drawLottery(1,16);//ҡ����������
      out.print("<h1>ҡ�����ĺ���<br>"+drawLotteryRedball.toString()+"<br>");
      out.print("ҡ����������"+drawLotteryBlueball.toString()+"</h1>");
      drawLotteryRedball.removeAll(userRedball);//ҡ�����ĺ���ȥ���û���ĺ�����롣
      drawLotteryBlueball.removeAll(userBlueball);//ҡ������������ȥ���û����������롣
      int leftRedball = drawLotteryRedball.size(); //ʣ��ĺ���������
      int leftBlueball = drawLotteryBlueball.size();//ʣ�������������
      if(leftRedball == 0&&leftBlueball == 0){    //Ϊ�˼��ٴ��룬�������н����ࡣ
          out.println("<h1>ͷ��</h1>");
      }
      else if(leftRedball == 0&&leftBlueball == 1){
          out.println("<h1>���Ƚ�</h1>");
      }
      else if(leftRedball == 1&&leftBlueball == 0){
          out.println("<h1>���Ƚ�</h1>");
      }
      else{
          out.println("<h1>û�н�</h1>");
      }
      out.print("<h1>�û���ĺ���<br>"+userRedball.toString()+"<br>");
      out.print("�û��������"+userBlueball.toString()+"</h1>");
   } 
   public HashSet<Integer> getUserDigit(String input){
      HashSet<Integer> set = new HashSet<Integer>();
      Pattern pattern;          //ģʽ����
      Matcher matcher;          //ƥ�����
      String regex="[0-9][0-9]*" ;//ƥ����������������ʽ��
      pattern = Pattern.compile(regex); //���Ի�ģʽ����
      matcher = pattern.matcher(input); //��ʼ��ƥ�����,���ڼ���input��
      double sum = 0;
      while(matcher.find()) {
         String str = matcher.group(); 
         set.add(Integer.parseInt(str));//�û���Ĳ�Ʊ������뼯�ϡ�
      } 
      return set;
   }
    public HashSet<Integer> drawLottery(int count,int allNumber){ 
        LinkedList<Integer> saveNumber = new LinkedList<Integer>();//�������
        HashSet<Integer> set = new HashSet<Integer>();
        for(int i=1;i<=allNumber;i++) { //1��allNumber����ţ�
            saveNumber.add(i);          //˳���������saveNumber��
        } 
        Random random = new Random(); 
        while( count > 0) {
           int index = random.nextInt(saveNumber.size());  
           int number = saveNumber.remove(index); //��ȡһ���򲻷Ż�
           count--;
           set.add(number);////����������뼯�ϡ�
        }
        return  set;  
    }
}
