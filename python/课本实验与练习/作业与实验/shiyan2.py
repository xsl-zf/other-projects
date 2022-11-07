# 实验3-1：
# a = int(input("a = "))
# b = int(input("b = "))
# if a!= b:
#     if a>b:
#         print("a>b")
#     else:
#         print("a<b")
# else:
#     print("a = b")


# 3.1.2
# a = int(input("a="));b = int(input("b="))
# if a != b and a > b:
#     print("a>b")
# elif a != b and a < b:
#     print("a<b")
# else:
#     print("a=b")

# 3.1.3
# def tools(a, b, c, type):
#     if type == 1:
#         # 输出最大值
#         print("其中最大值为：", max(a, b, c))
#     elif type == 2:
#         # 输出其大小关系2
#         lst = [a, b, c]
#         lst.sort()
#         print("{0}>{1}>{2}".format(lst[0], lst[1], lst[2]))
#     elif type == 3:
#         # 从大到小排序
#         lst = [a, b, c]
#         lst.sort()
#         print("从小到大排序:", lst)
#
#
# for i in range(0,3):
#     a, b, c = map(int, input("输入三个整数：").split())
#     type = int(input("请输入题号1-3："))
#     tools(a, b, c, type)


# 3.1.4
# a = list(map(int, input("输入三个数：").split()))
# a.sort()
# print("从小到大排序：", a[0], "<", a[1], "<", a[2])

# 3.1.5
# a = list(map(int, input("输入三个数：").split()))
# a.sort()
# print("从小到大排序：", a[0], a[1], a[2])
# 3.2
# import random
# import time
# t1 = time.time()
# jok = 0
# for i in range(0, 5):
#     n1 = random.randint(1, 10)
#     n2 = random.randint(1, 10)
#     sum = n1 + n2
#     print("%d+%d=" % (n1, n2))
#     mysum = int(input())
#     if mysum < 0:
#         break
#     elif mysum == sum:
#         jok += 1
# if mysum < 0:
#     print("中途退出！")
# else:
#     t2 = time.time()
#     t = t2 - t1
#     print('5题中，你答对%d题，用时%5.2f秒' % (jok, t))



#3.2.1
import random
import time
# t1 = time.time()
# jok = 0
# for i in range(0, 10):
#     n1 = random.randint(1, 100)
#     n2 = random.randint(1, 100)
#     if n1 < n2:
#         n1,n2=n2,n1
#     sum = n1 - n2
#     # print("{0}+{1}=".format(n1,n2))
#     mysum = int(input("{0}-{1}=".format(n1,n2)))
#     if mysum < 0:
#         break
#     elif mysum == sum:
#         jok += 1
# if mysum < 0:
#     print("中途退出！")
# else:
#     t2 = time.time()
#     t = t2 - t1
#     r = jok / 10 *100
#     print('10题中，你答对{0}题，用时{1}秒,正确率为{2}%'.format(jok, t,r))

# 循环条件永为真，答完5题结束，可以中途退出
# t1 = time.time()
# count = 0
# jok = 0
# while True:
#     n1 = random.randint(1, 10)
#     n2 = random.randint(1, 10)
#     sum = n1 + n2
#     mysum = int(input("{0}+{1}=".format(n1, n2)))
#     count += 1
#     if mysum < 0:
#         break
#     elif mysum == sum:
#         jok += 1
#     if count >= 5:
#         break
# if mysum < 0:
#     print('中途退出')
# else:
#     t2 = time.time()
#     t = t2 - t1
#     print('5题中，你答对%d题，用时%5.2f秒' % (jok, t))

# 显示结果放在循环内完成
# t1 = time.time()
# jok = 0
# for i in range(0, 5):
#     n1 = random.randint(1, 10)
#     n2 = random.randint(1, 10)
#     sum = n1 + n2
#     mysum = int(input("{0}+{1}=".format(n1, n2)))
#     if mysum < 0:
#         print("中途退出！")
#         break
#     elif mysum == sum:
#         jok += 1
#     t2 = time.time()
#     t = t2 - t1
#     print('你答对%d题，用时%5.2f秒' % (jok, t))

# 每5题为一组，一次完成4组，每组统计结果，最后包含总结果。每一次运行，题目相同。
# t1 = time.time()
# jok = 0
# random.seed(0)
# for j in range(0, 4):
#     jok1 = 0
#     for i in range(0, 5):
#         n1 = random.randint(1, 10)
#         n2 = random.randint(1, 10)
#         sum = n1 + n2
#         mysum = int(input("{0}+{1}=".format(n1, n2)))
#         if mysum < 0:
#             print('中途退出')
#             exit()
#         elif mysum == sum:
#             jok += 1
#             jok1 += 1
#     else:
#         t2 = time.time()
#         t = t2 - t1
#         print('5题中，你答对%d题，用时%5.2f秒' % (jok1, t))
# t2 = time.time()
# t = t2 - t1
# print('你一共答对%d题，用时%5.2f秒' % (jok, t))
