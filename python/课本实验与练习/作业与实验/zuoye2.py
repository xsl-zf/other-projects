#习题四
#4-1
# lst = [1,2,3,4,5,6] #定义一个列表
# lst2 = lst[1:]将列表的第一个元素切割出去，然后存入lst2
# lst2.append(lst[0])#将lst第一个元素追加到lst2
# print(lst2)
#
# #4-2
# from random import random #引入随机数包
# lst1 = [];lst2 = [];lst3 = [];lst4 = [];lst5 = [];
# for i in range(0,30):#循环三十次，生成三十个随机数
#     n = int(random()*100)#生成0-100的随机数,并且转换成整形
#         # 进行条件判断，满足哪个条件就让对应的abcd加一
#     if 0 <=n<= 59:
#         lst5.append(n)
#     elif 60 <=n<= 69:
#         lst4.append(n)
#     elif 70<=n<=79:
#         lst3.append(n)
#     elif 80<=n<=89:
#         lst2.append(n)
#     elif 90<=n<=100:
#         lst1.append(n)
# lst = lst1+lst2+lst3+lst4+lst5
# print("0~59的有:{0}\n60~69的有:{1}\n70~79的有:{2}\n80~89的有:{3}\n90~100的有:{4}".format(lst5,lst4,lst3,lst2,lst1))
# print("0~59的有{0}个，60~69的有{1}个，70~79的有{2}个，80~89的有{3}个，90~100的有{4}个".format(len(lst5),len(lst4),len(lst3),len(lst2),len(lst1)))

#方法二

# from random import random #引入随机数包
# lst = []
# for i in range(0,30):
#     n = int(random()*100)
#     lst.append(n)
# lst1 = [n for n in lst if 0 <=n<= 59]
# lst2 = [n for n in lst if 60 <=n<= 69]
# lst3 = [n for n in lst if 70<=n<=79]
# lst4 = [n for n in lst if 80<=n<=89]
# lst5 = [n for n in lst if 90<=n<=100]
# print("0~59的有:{0}\n60~69的有:{1}\n70~79的有:{2}\n80~89的有:{3}\n90~100的有:{4}".format(lst5,lst4,lst3,lst2,lst1))
# print("0~59的有{0}个，60~69的有{1}个，70~79的有{2}个，80~89的有{3}个，90~100的有{4}个".format(len(lst5),len(lst4),len(lst3),len(lst2),len(lst1)))

#4-3
# s = "The Python Dict:Key=1,Val=10"
# z = 0;num = 0;other = 0
# for i in s:
#     if 'A'<=i<='z':
#         z = z + 1
#     elif '0'<=i<='1':
#         num = num + 1
#     else:
#         other = other + 1
# print("字母：{0}个，数字：{1}个，其他：{2}个".format(z,num,other))
# print("s字符串长为",len(s))

#4-4
# s = "  The  Python  Dict: Key=1 , Val=10   "
# s1 ="".join(s.split())#split() 方法将字符串拆分为列表。join（）将列表转为字符串
# print(s1)
# print("s字符串长为",len(s))

#5-1
#假设有10个学生参与投票
# import numpy as np
# arr=np.zeros(11)#生成长度为11的数组，所有元素为0
# gs=0#总分数
# for i in  range(0,10):#总共有个同学投票
#     s=int(int(input('同学{0}评价分1-10='.format(i+1))))
#     arr[s]=arr[s]+1
#     gs=gs+s
# print("等级\t\t\t票数\t\t\t票数图")
# for j in  range(1,11):
#     n=int(arr[j])
#     if n>0:
#         print(j,"\t\t\t", n,"\t\t\t", n * '*')
#     else:
#         print(j,"\t\t\t", n)
# print('---------------------------')
# print('总计',"\t\t",int(sum(arr)),"\t\t",gs)

#二维数组：假设有2位老师 3位学生
# import numpy as np
# arr=np.zeros((2,11))
# for t in range(0,2):
#     print('第', t+1,'老师')
#     gs=0
#     for i in  range(0,3):
#         s=int(int(input('同学{0}评价分1-10='.format(i+1))))
#         arr[t,s]=arr[t,s]+1
#         gs=gs+s
#     print("等级\t\t\t票数\t\t\t票数图")
#     num = 0
#     for j in  range(1,11):
#         n=int(arr[t, j])
#         num = n + num
#         if n>0:
#             print(j, "\t\t\t", n, "\t\t\t", n * '*')
#         else:
#             print(j,"\t\t\t", n)
#     print('---------------------------')
#     print('总计',"\t\t",int(num),"\t\t",gs)
#三维数组
#假设有2个班级，每个班级有2个老师，每个老师有2位同学投票
# import numpy as np
# arr=np.zeros((2, 2,11))
# for bj in range(0,2):
#     print('第', bj + 1, '班')
#     for t in range(0, 2):
#         print('第', t + 1, '老师')
#         gs = 0
#         for i in range(1, 3):
#             s=int(int(input('同学{0}评价分1-10='.format(i+1))))
#             arr[bj,t,s] = arr[bj,t,s] + 1
#             gs = gs + s
#         print("等级\t\t\t票数\t\t\t票数图")
#         num = 0
#         for j in range(1, 11):
#             n = int(arr[bj,t, j])
#             num = n + num
#             if n > 0:
#                 print(j, "\t\t\t", n, "\t\t\t", n * '*')
#             else:
#                 print(j, "\t\t\t", n)
#         print('---------------------------')
#         print('总计', "\t\t", int(num), "\t\t", gs)

