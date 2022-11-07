# 4.尼克和格莱尔很喜欢玩“加加乐”游戏，游戏规则是一方报出一个数，另一方说出该数的各个数位之和。
# 如尼克说12，格莱尔就说3；尼克说567，格莱尔就说18。试编一程序，输入一个整数，输出它的各个数位之和。

num = int(input("请输入一个整数:"))
strnum = str(num)
sum = 0
for i in range(0,len(strnum)):
    sum = sum + int(strnum[i])

print("各个数位之和",sum)