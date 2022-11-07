import string
import re

# 编写程序，统计字符串中字母、数字、汉字、其他字符的个数
# lst = "before i meet you,my life is negligible. 遇到你之前，我的生活不值一提.i love you 3000 times，我爱你3000遍 你好"
# count_yw = count_num = count_zw = count_fh = 0
# for s in lst:
#     if s in string.ascii_letters:#所有在ascii表中的字母不包括汉字
#         count_yw += 1
#     elif s.isdigit():#是否由数字组成
#         count_num += 1
#     elif s.isalpha():#是否由字母组成（包括中文）
#         count_zw += 1
#     else:
#         count_fh += 1
# print('英文字符：', count_yw)
# print('数字：', count_num)
# print('中文：', count_zw)
# print('特殊字符：', count_fh)

# 编写程序，统计字符串词个数，词存放在字典中，由词分隔的字符串统一计算其他。

str = "Keep your friends close,but your enemies closer."
lst = re.findall(r'\b\w.+?\b', str)
print(lst)
splitNum = len(lst)
dict1 = {}
for i in range(0, splitNum):
    str1 = lst[i]
    if str1 in dict1:#如果当前字典中已经存在该元素，将该元素弹出
        n = dict1.pop(str1) #他的字典中pop()方法返回值是被删掉的元素值
        dict1[str1] = n + 1
    else:
        dict1[str1] = 1#将所有元素值都赋值1

print("分隔符个数：", splitNum)
