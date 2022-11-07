import fractions
m  = float(input("请输入纯小数："))
def change(m):
    a = int(m * 100000)
    b = int(100000)
    n = min(a, b)
    for i in range(2, n):
        while a % i == 0 and b % i == 0:
            a = a / i
            b = b / i
    print("转化为分数为：{0}/{1}".format(int(a), int(b)))

change(m)