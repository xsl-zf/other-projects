package save.data;
public class ExpressWish { 
    String contents ;   //������ݡ�
    String title;       //���⡣
    String dateTime;    //ʱ�䡣
    String peopleName;  //����ˡ�
    String id;
    public void setId(String id){
        this.id = id; 
    }
    public String getId(){
        return id;
    }
    public void setPeopleName(String s){
        peopleName = s; 
    }
    public String getPeopleName(){
        return peopleName; 
    }
    public void setContent(String s){
        contents = s; 
    }
    public String getContent(){
        return contents; 
    }
    public void setTitle(String s){
        title = s; 
    }
    public String getTitle(){
        return title; 
    }
    public void setDateTime(String s){
        dateTime = s; 
    }
    public String getDateTime(){
        return dateTime ; 
    }
}
