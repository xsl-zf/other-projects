package moon.sun;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.awt.image.BufferedImage;
import java.awt.*;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
import java.awt.geom.*; 
import javax.imageio.ImageIO;
public class DrawPolygon_Servlet extends HttpServlet{
   HttpServletRequest request;
   HttpServletResponse response;
   public void init(ServletConfig config) throws ServletException{
      super.init(config);
   }
   public void service(HttpServletRequest request,HttpServletResponse response)
                       throws IOException{
      request.setCharacterEncoding("utf-8");
      String polygonVertex = request.getParameter("polygonVertex");
      if(polygonVertex == null||polygonVertex.length()==0){
          response.sendRedirect("inputVertex.jsp");//�ض�����������ҳ�档
          return;
      }
      response.setContentType("image/jpeg");
      Polygon  polygon = getPolygon(polygonVertex);
      BufferedImage image = getImage(polygon);
      OutputStream outClient= response.getOutputStream();
      boolean boo =ImageIO.write(image,"jpeg",outClient);
   }
   Polygon getPolygon(String polygonVertex){ //�õ�����Ρ�
      Polygon polygon = new Polygon();
      Pattern pattern;             //ģʽ����
      Matcher matcher;            //ƥ�����
      String regex="(\\d+[,�� ]+\\d+)" ;//ƥ�䶥���������ʽ��
      pattern = Pattern.compile(regex);  //���Ի�ģʽ����
      matcher = pattern.matcher(polygonVertex);  //���ڼ���polygonVertex��
      while(matcher.find()) {
         String str = matcher.group(); 
         String []vertex = str.split("[( ),�� ]+");
         polygon.addPoint(Integer.parseInt(vertex[0]),Integer.parseInt(vertex[1]));
      } 
      return polygon;
   }
   BufferedImage getImage(Shape shape){ //�õ�ͼ�ε�ͼ��
        int width=1000, height=800;
        BufferedImage image = 
        new BufferedImage(width,height,BufferedImage.TYPE_INT_RGB);
        Graphics g = image.getGraphics();
        g.fillRect(0, 0, width, height);
        Graphics2D g_2d=(Graphics2D)g; 
        g_2d.setColor(Color.blue);
        g_2d.draw(shape); 
        return image;
   }
}
