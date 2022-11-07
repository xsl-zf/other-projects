import re

# 6.1
# s1 = '1234-abcd=+-*/'
# s2 = '1234-Abcd=+-*/'
# if not (isinstance(s1, str) and isinstance(s2, str)):
#     print("两个必须都是字符串！")
# else:
#     right = sum((1 for c1, c2 in zip(s1, s2) if c1 == c2))
#     rate = round(right / len(s1), 2)
#     print("rate=", rate * 100, "%")


# 6.1.1
# s3 = '1234-abcd=+-*/'
# s4 = ' 1234- Abcd=+-*/'
# # 处理空格
# s1 = ' '.join(s3.split())
# s2 = ' '.join(s4.split())
# if not (isinstance(s1, str) and isinstance(s2, str)):
#     print("两个必须都是字符串！")
# else:
#     right = sum((1 for c1, c2 in zip(s1, s2) if c1 == c2))
#     rate = round(right / len(s1), 2)
#     print("rate=", rate * 100, "%")

# 6.1.2
# s1 = '1234-abcd=+-*/'
# s2 = '12324-Abcd=+-*/'
# if not (isinstance(s1, str) and isinstance(s2, str)):
#     print("两个必须都是字符串！")
# else:
#     right = sum((1 for c1, c2 in zip(list(s1), list(s2)) if c1 == c2))
#     print(right)
#     rate = round(right / len(s1), 2)
#     print("rate=", rate * 100, "%")

# 6.1.3
# s1 = '1234-abcd=+---*/'
# s2 = '1234-Abcd=+-*/'
# if not (isinstance(s1, str) and isinstance(s2, str)):
#     print("两个必须都是字符串！")
# else:
#     right = sum((1 for c1, c2 in zip(s1, s2) if c1 == c2))
#     rate = round(right / len(s1), 2)#小数点后两位
#     print("rate=", rate * 100, "%")
# num = {}
# for i in s1:  # 遍历输入的字符串，以键值对的方式存储在字典中
#     num[i] = s1.count(i)
# for key in num:
#     print(f'"{key}":{num[key]}次')


# 6.2.1
# s1 = "I am lucky to have you"
# lst = s1.split()
# for i in lst:
#     print(i, ":", lst.count(i), '位置：', [n+1 for n, a in enumerate(lst) if a == i])

# 6.2.2
# s1 = "I am lucky to have you"
# lst = s1.split()
# se = set(lst)
# for i in se:
#     print(i, ":", lst.count(i))

# 6.2.3
# s1 = "I am lucky to have you and i love you"
# lst = s1.split()
# num = {}
# for i in lst:
#     num[i] = lst.count(i)
# for n in num:
#     print(n, ":", num[n])


# 6.3
# info = "本公司联系方式：" \
#        "固定电话：025-85412391，" \
#        "移动电话：13851516136，" \
#        "QQ：958456961" \
#        "泰州分公司：0523-6612315."
# print(info)
# pattern = re.compile(r'(\d{3,4})-(\d{7,8})')
# index = 0
# while True:
#     result = pattern.search(info, index)
#     if not result:
#         break
#     print("匹配内容：", result.group(0),
#           "在", result.start(0),
#           "和", result.end(0),
#           "之间：", result.span(0))
#     index = result.end(2)

# 6.3.1
# info = "本公司联系方式：" \
#        "固定电话：025-85412391，" \
#        "移动电话：13851516136，" \
#        "QQ：958456961" \
#        "泰州分公司：0523-6612315"
# pattern = re.compile(r'([^/，]+：(\d{9,}))')
# index = 0
# while True:
#     result = pattern.search(info, index)
#     if not result:
#         break
#     print(result.group())
#     index = result.end(2)

# 6.3.2
info = "本公司联系方式：" \
       "固定电话：025-85412391，" \
       "移动电话：13851516136，" \
       "QQ：958456961" \
       "泰州分公司：0523-6612315."
pattern = re.compile(r'(\d{3,})-(\d{7,8})|(\d+)')
index = 0
resultlst =[]
while True:
    result = pattern.search(info, index)
    if not result:
        break
    resultlst.append(result.group())
    index = result.end(0)
print(resultlst[:-1])
