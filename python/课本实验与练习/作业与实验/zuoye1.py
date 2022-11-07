# Fahrenheit = float(input("请输入华氏温度:"))#华氏温度
# centigradeTemperature = (Fahrenheit-32) / 1.8#摄氏温度
# print("摄氏度为：",round(centigradeTemperature, 2))
import math

# a,b,c =input("请输入三条边:").split()
# if a+b>c or a+c>b or b+c > a:
#     print("是三角形")
# else:
#     print("不是三角形")

# a = float(input("请输入a的值："))
# b = float(input("请输入b的值："))
# c = float(input("请输入c的值："))
# d = b*b - 4*a*c
# if (d<0):
#     print("无解")
# else:
#     e = math.sqrt(d)
#     x1=((-b+e)/(2*a))#调用math模块中sqrt开平方函数
#     x2=((-b-e)/(2*a))
#     print("x1=",x1,"\t","x2=",x2)

#367 - 1
# x = float(input("请输入x的值："))
# if x<10:
#     y = 1-2*x**2
# elif x>=10 and x<20:
#     y = 2*x**3
# else:
#     y = 2*x**2-1
# print(y)

#2 完数
# for i in range (1,1000):
#     a = 0
#     for j in range(1, i):
#         if i % j == 0:
#             a += j
#     if a == i:
#         print(i)
#反顺序输出
n = int(input("请输入正整数n:"))
str = str(n)
print(str[::-1])






