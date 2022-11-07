# print("easybooks@163.com")
# x = 1983
# y = 35
# print(x + y)

# x = 100
# y2 = bin(x)
# y8 = oct(x)
# y16 = hex(x)
# ya = ascii(x)
# print("十进制100,转化成二进制为：%s"%(y2))
# print("十进制100,转化成八进制为：%s"%(y8))
# print("十进制100,转化成十六进制为：%s"%(y16))
# print("十进制100,转化成ASCII码为：%s"%(ya))

import math
# a = int(input("a = "))
# s = str(a)
# b,c = map(int,input("b,c = ").split(','))
# d = math.sqrt(b**2 -4*a*c)
# print("a,b,c = ",a,b,c)
# print("十进制%d,转化为十六进制 = %x,看作十六进制 = %u"%(a,a,int(s,16)))
# print("sqrt(b**2 -4*a*c)=%6.2f"%d)

# Fahrenheit = float(input("请输入华氏温度:"))#华氏温度
# centigradeTemperature = (Fahrenheit-32) / 1.8#摄氏温度
# print("摄氏度为：",round(centigradeTemperature, 2))


a,b,c =map(float,input("请输入三条边:").split())
if a+b>c and a+c>b and b+c > a:
    print("是三角形")
else:
    print("不是三角形")



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
