package moon.sun;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.awt.image.BufferedImage;
import java.awt.*;
import java.awt.geom.*; 
import javax.imageio.ImageIO;
public class Example6_4_Servlet extends HttpServlet{
   HttpServletRequest request;
   HttpServletResponse response;
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void service(HttpServletRequest request,HttpServletResponse response)
                       throws IOException{
      this.request = request;
      this.response = response;
      request.setCharacterEncoding("utf-8");
      String mess = request.getParameter("mess");
      String radius = request.getParameter("radius");
      if(mess.equals("area")) {
          getArea(Double.parseDouble(radius));
      }
      else if(mess.equals("geometry")){
          getGeometry(Double.parseDouble(radius));
      }
   }
   void getArea(double r) throws IOException{
      response.setContentType("text/html;charset=utf-8");
      PrintWriter out=response.getWriter();
      double area = Math.PI*r*r;
      String result = String.format("%.2f",area);
      out.print("<h2>半径"+r+"圆的面积（保留2位小数）:<br>"); 
      out.print(result);       
      out.print("</h2></body></html>");
   } 
   void getGeometry(double r) throws IOException{ 
      response.setContentType("image/jpeg");
      Ellipse2D ellipse= new Ellipse2D.Double(30,30,2*r,2*r);
      BufferedImage image = getImage(ellipse);
      OutputStream outClient= response.getOutputStream();
      boolean boo =ImageIO.write(image,"jpeg",outClient);
   } 
   BufferedImage getImage(Shape shape){ //得到图形的图像
        int width=800, height=600;
        BufferedImage image = 
        new BufferedImage(width,height,BufferedImage.TYPE_INT_RGB);
        Graphics g = image.getGraphics();
        g.fillRect(0, 0, width, height);
        Graphics2D g_2d=(Graphics2D)g; 
        g_2d.setColor(Color.blue);
        g_2d.fill(shape); 
        return image;
    }
}
