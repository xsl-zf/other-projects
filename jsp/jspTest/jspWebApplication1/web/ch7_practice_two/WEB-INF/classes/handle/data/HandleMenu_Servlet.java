package handle.data;
import save.data.Food;
import save.data.MenuBean;
import java.util.*;
import java.io.*;
import java.time.LocalTime;
import javax.servlet.*;
import javax.servlet.http.*;
public class HandleMenu_Servlet extends HttpServlet{
   public void init(ServletConfig config) throws ServletException{
       super.init(config);
   }
   public void service(HttpServletRequest request,HttpServletResponse response)
                       throws ServletException,IOException{
       request.setCharacterEncoding("utf-8");
       MenuBean menu  = null; //餐单。
       HttpSession session=request.getSession(true);
       menu = (MenuBean)session.getAttribute("menu");
       if(menu == null ){//menu不存在就创建menu。
           menu = new MenuBean();
           session.setAttribute("menu",menu);//sesion bean。
       }
       String foodName = request.getParameter("foodName");//食物名称。
       String price = request.getParameter("price"); 
       Food food = new Food();
       if(foodName.length()==0||price.length()==0){
            response.sendRedirect("inputMenu.jsp");
            return;
       }
       food.setFoodName(foodName);
       food.setPrice(Double.parseDouble(price));
       LocalTime dateTime = LocalTime.now();  
       String str = dateTime.toString();
       String time =str.substring(0,str.lastIndexOf("."));//不要纳秒。
       menu.setTime(time);
       menu.addFood(food);//添加一道食物。
       response.sendRedirect("showMenu.jsp"); //显示餐单。
   }
} 
