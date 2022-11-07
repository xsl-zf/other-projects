import math
import random

import numpy as np

# #假设有五个学生，三科成绩成绩随机生成
# stuCj=np.zeros((3,5))
# for i in range(0,3):
#    for j in range(0,5):
#        a = random.randint(50,100)
#        stuCj[i][j] = a
# lst = stuCj.tolist()#将数组转为列表
# print("\t 同学1  同学2  同学3  同学4  同学5")
# print("语文:{0}\n数学:{1}\n英语:{2}".format(lst[0],lst[1],lst[2]))


# # 假设有五个学生，三科成绩成绩随机生成
# stuCj = np.zeros((3, 13))
# for i in range(0, 3):
#     for j in range(0, 5):
#         rd = random.randint(30, 100)
#         stuCj[i][j] = rd
#
# for i in range(0, 3):
#     stuCj[i][:5].sort()#将原数组进行切片，只取该行的前五个数据 然年对前五个进行排序
#     stuCj[i][10] = max(stuCj[i][:5])#将原数组进行切片，只取该行的前五个数据
#     stuCj[i][11] = min(stuCj[i][:5])
#     stuCj[i][12] = int(sum(stuCj[i][:5])/len(stuCj[i][:5]))
#     for j in range(0, 5):
#         if stuCj[i][j] < 60:
#             stuCj[i][5] += 1
#         elif 60 <= stuCj[i][j] < 70:
#             stuCj[i][6] += 1
#         elif 70 <= stuCj[i][j] < 80:
#             stuCj[i][7] += 1
#         elif 80 <= stuCj[i][j] < 90:
#             stuCj[i][8] += 1
#         elif 90 <= stuCj[i][j] <= 100:
#             stuCj[i][9] += 1
#
# lst = stuCj.tolist()  # 将数组转为列表
# print("\t 同学1  同学2  同学3  同学4  同学5  <60  <70  <80  <90  <100  max  min  avg")
# print("语文:{0}\n数学:{1}\n英语:{2}".format(lst[0], lst[1], lst[2]))


# 假设有五个学生，三科成绩成绩随机生成
stuCj = np.zeros((5, 5))
for i in range(0, 3):
    for j in range(0, 5):
        a = random.randint(50, 100)
        stuCj[i][j] = a
sum = 0
for j in range(0, 5):
    for i in range(0, 3):
        sum = sum + stuCj[i][j]
    stuCj[3][j] = int(sum / 3)
    sum = 0
print("原数组：\n",stuCj)
for i in range(1, len(stuCj[0])):
    for j in range(0, len(stuCj[0]) - i):
        if stuCj[3][j] < stuCj[3][j + 1]:
            stuCj[:, [j,j+1]] = stuCj[:,[j+1,j]]#交换数组两列的位置
for i in range(0,5):
    stuCj[4][i] = i+1
print("排序后：\n",stuCj)
lst = stuCj.tolist()  # 将数组转为列表
print("\t 同学1  同学2  同学3  同学4  同学5")
print("语文:{0}\n数学:{1}\n英语:{2}\navg:{3}\n排名:{4}".format(lst[0], lst[1], lst[2], lst[3], lst[4]))
