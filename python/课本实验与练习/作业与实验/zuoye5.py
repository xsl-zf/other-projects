import datetime as dt


# 设计一个类MTime：得到当前或者指定时间的年月日时分秒
class MyTime:
    def __init__(self, sTime=dt.datetime.now()):#初始化，sTime可传可不传，不传的话使用初始话值
        self.myYear = sTime.year
        self.myMonth = sTime.month
        self.myDay = sTime.day
        self.myHour = sTime.hour
        self.myMin = sTime.minute
        self.mySecond = sTime.second


t1 = MyTime()

print("当前的时间：{0}年{1}月{2}日{3}时{4}分{5}秒".format(t1.myYear, t1.myMonth, t1.myDay, t1.myHour, t1.myMin, t1.mySecond))
st2 = "2020-7-24 08:40:03"
st2d = dt.datetime.strptime(st2, "%Y-%m-%d %H:%M:%S")
t2 = MyTime(st2d)
print("指定的时间：{0}年{1}月{2}日{3}时{4}分{5}秒".format(t2.myYear, t2.myMonth, t2.myDay, t2.myHour, t2.myMin, t2.mySecond))


#设计一个圆类，类名：Circle。属性：圆心坐标，圆的半径。方法：设置和获取圆的坐标、半径。计算圆的周长和面积。
# class Circle:
#     def __init__(self, r, x=0, y=0):
#         self.x = x
#         self.y = y
#         self.r = r
#     def cLen(self):
#         return round(2 * 3.14 * self.r,2)
#     def cArea(self):
#         return round(3.14 * self.r * self.r,2)
# c1 = Circle(15)
# print("c1的圆心为坐标（{0}，{1}），半径为{2}，周长为{3}，面积为{4}".format(c1.x,c1.y,c1.r,c1.cLen(),c1.cArea()))
# c2 = Circle(9,5,7)
# print("c2的圆心为坐标（{0}，{1}），半径为{2}，周长为{3}，面积为{4}".format(c2.x,c2.y,c2.r,c2.cLen(),c2.cArea()))
