package moon.sun;
import java.awt.image.BufferedImage;
import java.awt.*;
import java.awt.geom.*; 
import javax.imageio.ImageIO;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class Example6_2 extends HttpServlet{
    public void init(ServletConfig config) throws ServletException{
       super.init(config);
    }
    public void service(HttpServletRequest request,HttpServletResponse response) throws IOException{
        request.setCharacterEncoding("utf-8");
        double width  = Double.parseDouble(request.getParameter("width"));
        double height = Double.parseDouble(request.getParameter("height"));
        response.setContentType("image/jpeg");
        Ellipse2D ellipse=new Ellipse2D.Double(400-width/2,300-height/2,width,height);
        BufferedImage image = getImage(ellipse);
        try {
            OutputStream outClient= response.getOutputStream();//指向用户端的输出流。
            boolean boo =ImageIO.write(image,"jpeg",outClient);
        }
        catch(Exception exp){}
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

