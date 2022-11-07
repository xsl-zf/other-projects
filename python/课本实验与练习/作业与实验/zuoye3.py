#编写程序，统计字符串中字母、数字、汉字、其他字符的个数
import string

lst = "before i meet you,my life is negligible. 遇到你之前，我的生活不值一提.i love you 3000 times，我爱你3000遍 你好"
count_yw = count_num = count_zw = count_fh = 0
for s in lst:
    if s in string.ascii_letters:
        count_yw += 1
    elif s.isdigit():
        count_num += 1
    elif s.isalpha():
        count_zw += 1
    else:
        count_fh += 1
print('英文字符：', count_yw)
print('数字：', count_num)
print('中文：', count_zw)
print('特殊字符：', count_fh)

