# 3.计算机随机产生一个整数（1至5），自己输入一个整数，若两数相同，则输出“恭喜您，中奖了！奖金10元”，
# 否则输出“没中奖，请付费2元”，同时公布中奖号码。
# 试编一个程序，实现上述功能。
import random

s = random.randint(1,5)
m = int(input("请输入一个整数："))
if s == m :
    print("恭喜您，中奖了！奖金10元")
else:
    print("没中奖，请付费2元")
    print("中奖号码：",s)