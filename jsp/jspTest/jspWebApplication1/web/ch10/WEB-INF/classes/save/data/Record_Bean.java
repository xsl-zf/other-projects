package save.data;
public class Record_Bean{
   String [][] tableRecord=null;   //��Ų�ѯ���ļ�¼��
   int pageSize=3;                 //ÿҳ��ʾ�ļ�¼����
   int totalPages=1;               //��ҳ�����ҳ����
   int currentPage =1   ;          //��ǰ��ʾҳ ��
   int totalRecords ;             //ȫ����¼��
   public void setTableRecord(String [][] s){
      tableRecord=s;
   }
   public String [][] getTableRecord(){
      return tableRecord;
   }
   public void setPageSize(int size){
      pageSize=size;
   }
   public int getPageSize(){
      return pageSize;
   } 
   public int getTotalPages(){
      return totalPages;
   } 
   public void setTotalPages(int n){
      totalPages=n; 
   }
   public void setCurrentPage(int n){
      currentPage =n;
   }
   public int getCurrentPage(){
      return currentPage ;
   }
    public int getTotalRecords(){
      totalRecords = tableRecord.length;
      return totalRecords ;
   }
}
