package save.data;
import java.util.ArrayList;
public class TestPaperBean {  //�Ծ�
    public boolean isGivenProblem ; //�Ծ����Ƿ��Ѿ�����Ŀ��
    public ArrayList<Problem> problemList=null; //���ȫ�����⡣
    public int index = 0;
    public Problem currentProblem ; //��ǰ��Ҫ��ʾ����Ŀ��
    public double score = 0; //����Ծ�ĵ÷֡�
    public TestPaperBean(){
       problemList = new ArrayList<Problem>();
    }
    public void add(Problem problem){
        problemList.add(problem);
    }
    public  Problem  getCurrentProblem() {
        return problemList.get(index);
    } 
    public void nextProblem() {
       index++;
       if(index==problemList.size()) {
           index = problemList.size()-1;//�����һ����Ŀ��ֹͣ��
       }
    }
    public void previousProblem() {
       index--;
       if(index<0) {
           index =0;//����һ����Ŀ��ֹͣ��
       }
    }
    public int getProlemAmount(){
       return problemList.size();
    }
}
