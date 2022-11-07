# 1.孔融小时候聪明好学，才思敏捷，大家都夸他是神童。
# 一日，父亲叫孔融分梨，孔融挑了个最小的梨，其余按照长幼顺序分给兄弟，
# 孔融说：“我年纪小，应该吃小的梨，大梨该给哥哥们。”父亲又问：“那弟弟比你小啊？”
# 孔融说：“弟弟比我小，我应该让着他。”父亲听了高兴得点头称赞。

def selectSort1(lst):
    lst1 = []
    for i in range(0, len(lst)):
        minItem = min(lst)
        lst1.append(minItem)
        lst.remove(minItem)

    return lst1
lst = [4,6,8,1,2,9,3,7]

print("孔融的梨为:",min(lst))

lst.remove(min(lst))

print("分出最小的梨之后，对梨进行排序:",selectSort1(lst))