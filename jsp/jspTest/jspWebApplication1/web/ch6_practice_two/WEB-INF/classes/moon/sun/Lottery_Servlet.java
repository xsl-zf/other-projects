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
          response.sendRedirect("buyLottery.jsp");//重定向到输入数据页面。
          return;
      }
      //用户买的全部红，蓝球号码：
      HashSet<Integer> userRedball =  getUserDigit(digitRedball);
      HashSet<Integer> userBlueball = getUserDigit(digitBlueball);
      if(userRedball.size()!=6||userBlueball.size()!=1){
          response.sendRedirect("buyLottery.jsp");//必须是红球6个，篮球1个。
          return;
      }
      HashSet<Integer> drawLotteryRedball = drawLottery(6,33);//摇奖出的红球。
      HashSet <Integer> drawLotteryBlueball = drawLottery(1,16);//摇奖出的篮球。
      out.print("<h1>摇奖出的红球<br>"+drawLotteryRedball.toString()+"<br>");
      out.print("摇奖出的蓝球"+drawLotteryBlueball.toString()+"</h1>");
      drawLotteryRedball.removeAll(userRedball);//摇奖出的红球去除用户买的红球号码。
      drawLotteryBlueball.removeAll(userBlueball);//摇奖出的篮球球去除用户买的蓝球号码。
      int leftRedball = drawLotteryRedball.size(); //剩余的红球数量。
      int leftBlueball = drawLotteryBlueball.size();//剩余的篮球数量。
      if(leftRedball == 0&&leftBlueball == 0){    //为了减少代码，减少了中奖分类。
          out.println("<h1>头奖</h1>");
      }
      else if(leftRedball == 0&&leftBlueball == 1){
          out.println("<h1>二等奖</h1>");
      }
      else if(leftRedball == 1&&leftBlueball == 0){
          out.println("<h1>三等奖</h1>");
      }
      else{
          out.println("<h1>没中奖</h1>");
      }
      out.print("<h1>用户买的红球<br>"+userRedball.toString()+"<br>");
      out.print("用户买的蓝球"+userBlueball.toString()+"</h1>");
   } 
   public HashSet<Integer> getUserDigit(String input){
      HashSet<Integer> set = new HashSet<Integer>();
      Pattern pattern;          //模式对象。
      Matcher matcher;          //匹配对象。
      String regex="[0-9][0-9]*" ;//匹配正整数的正则表达式。
      pattern = Pattern.compile(regex); //初试化模式对象。
      matcher = pattern.matcher(input); //初始化匹配对象,用于检索input。
      double sum = 0;
      while(matcher.find()) {
         String str = matcher.group(); 
         set.add(Integer.parseInt(str));//用户买的彩票号码放入集合。
      } 
      return set;
   }
    public HashSet<Integer> drawLottery(int count,int allNumber){ 
        LinkedList<Integer> saveNumber = new LinkedList<Integer>();//存放数。
        HashSet<Integer> set = new HashSet<Integer>();
        for(int i=1;i<=allNumber;i++) { //1到allNumber（球号）
            saveNumber.add(i);          //顺序存入链表saveNumber。
        } 
        Random random = new Random(); 
        while( count > 0) {
           int index = random.nextInt(saveNumber.size());  
           int number = saveNumber.remove(index); //抽取一个球不放回
           count--;
           set.add(number);////开奖号码放入集合。
        }
        return  set;  
    }
}
