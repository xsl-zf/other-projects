# 编写函数，求两数的做大公约数和最小公倍数
# ① 整数A对整数B进行取整, 余数用整数C来表示 举例: C = A % B
# ② 如果C等于0,则C就是整数A和整数B的最大公约数
# ③ 如果C不等于0, 将B赋值给A, 将C赋值给B ,然后进行 1, 2 两步,直到余数为0, 则可以得知最大公约数
# 最小公倍数 = 两个整数的乘积 / 最大公约数
# def GCDandLCM(a, b):
#     gcd = 1
#     lcm = a * b
#     while b != 0:
#         yushu = a % b
#         a = b
#         b = yushu
#     else:
#         gcd = a
#     lcm = lcm / gcd
#     return gcd, lcm
#
#
# a, b = map(int, input("请输入a,b:").split())
# num1, num2 = GCDandLCM(a, b)
# print("最大公约数{0}，最小公倍数{1}".format(num1, num2))
# 编写函数，可以接收任意多个整数并用字典输出最大值、最小值、平均值、和所有整数之和，对应的关键字”max“ ”min“ ”avg“ ”sum“
def dictNum(lst):
    dict0 = {"max":max(lst),"min":min(lst),"avg":round(sum(lst)/len(lst),2),"sum":sum(lst)}
    return dict0
lst = list(map(int,input("请输入数组:").split()))
print(lst)
dict1 = dictNum(lst)
print(dict1)



