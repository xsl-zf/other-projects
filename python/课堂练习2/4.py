# 4.风之巅小学举行一分钟跳绳比赛，5人一小组。试编一程序，输入小组内同学的跳绳次数，按次数由多到少的顺序输出(要求使用函数实现)。

def mysort(arr):
    for i in range(1, len(arr)):
        for j in range(0, len(arr) - i):
            if arr[j] < arr[j + 1]:
                tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
    return arr

lst = []
for i in range(0,5):
    a = int(input("请输入小组成绩:"))
    lst.append(a)
mysort(lst)

print(lst)
