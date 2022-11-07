package red.star;
import java.time.LocalDate;
import java.time.DayOfWeek;
public class Calendar {
     int year ,month ;
     String saveCalender;  //�������
     public Calendar(){
         year = LocalDate.now().getYear();
         month = LocalDate.now().getMonthValue();
     }
     public void setYear(int y){
         year = y;
     }
     public int getYear(){
         return year;
     }
     public void setMonth(int m){
         month = m;
         if(month>12){
           year++;
           month = 1;
         }
         if(month<1){
           month = 12;
           year--;
         } 
     }
     public int getMonth(){
         return month;
     }
     public String getSaveCalender(){
         LocalDate date = LocalDate.of(year,month,1);
         int days = date.lengthOfMonth(); //�õ������ж����졣
         int space = 0;                   //��ſհ��ַ��ĸ���
         DayOfWeek dayOfWeek = date.getDayOfWeek(); //�õ�1�������ڼ�
         switch(dayOfWeek) {
            case SUNDAY:    space = 0;
                            break;
            case MONDAY:    space = 1;
                            break;
            case TUESDAY:   space = 2;
                            break;
            case WEDNESDAY: space = 3;
                            break;
            case THURSDAY:  space = 4;
                            break;
            case FRIDAY:    space = 5;
                            break;
            case SATURDAY:  space = 6;
                             break;
         }
         String [] c = new String[space+days]; 
         for(int i=0;i<space;i++)
            c[i]="--";
         for(int i = space,n=1;i<c.length;i++){
            c[i] = String.valueOf(n) ;
            n++;
         } 
         String head =
         "<tr><th>������</th><th>����һ</th><th>���ڶ�</th><th>������</th>"+
         "<th>������</th><th>������</th><th>������</th> </tr>";
         StringBuffer buffer = new StringBuffer();
         buffer.append("<table border = 0>");
         buffer.append(head);
         int n = 0;
         while(n<c.length){
            buffer.append("<tr>");
            int increment = Math.min(7,c.length-n);
            for(int i=n;i<n+increment;i++) {
               buffer.append("<td align= center>"+c[i]+"</td>");
            }
            buffer.append("</tr>");
            n = n+increment;
         }
         buffer.append("</table>");
         saveCalender = new String(buffer);
         return saveCalender;
     }
}
