package save.data;
public class EnglishBean {
   public String fileName="";
   public String fileContent="";
   public String fileAudio;//���ӵ���Ƶ�ļ�����
   public void setFileName(String str){
      fileName=str;
   }
   public String getFileName(){
      return fileName; 
   }
   public void setFileContent(String str){
      fileContent=str;
   }
   public String getFileContent(){
      return fileContent; 
   }
   public void setFileAudio(String str){
      fileAudio = str;
   }
   public String getFileAudio(){
      return fileAudio; 
   }
}
