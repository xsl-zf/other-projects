package save.data;
import java.util.ArrayList;
public class TestPaperBean {  //试卷。
    public boolean isGivenProblem ; //试卷上是否已经有题目。
    public ArrayList<Problem> problemList=null; //存放全部试题。
    public int index = 0;
    public Problem currentProblem ; //当前需要显示的题目。
    public double score = 0; //存放试卷的得分。
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
           index = problemList.size()-1;//到最后一个题目，停止。
       }
    }
    public void previousProblem() {
       index--;
       if(index<0) {
           index =0;//到第一个题目，停止。
       }
    }
    public int getProlemAmount(){
       return problemList.size();
    }
}
