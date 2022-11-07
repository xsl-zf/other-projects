package save.data;
public class Problem {
    public String  index;              //题目的编号。
    public String  content;           //存放题目内容。
    public String  imageName;         //存放题目所带的图像的名字。
    public String  correctAnswer="asWdweq*23456@34"; //存放题目的正确答案。
    //用户回答的初始答案和correctAnswer不同，防止出题人忘记给正确答案。
    public String  userAnswer =""  ; //初始值必须是不含任何字符的串。
    public String  choiceA="",choiceB="",choiceC="",choiceD="";//存放选择。
}