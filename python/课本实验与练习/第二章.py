#p20
#整型
print(10 + 2)
print(0o10 + 2)
print(0x10 + 2)
print(101*100/2)
print(0b1101 + 100)
print("```````````````````````````````````````````````````````````````````````````````````````````````````````````")
#浮点型
print(0.3 + 1.21)
print(0.4 - 0.1)
print(0.4-0.1==0.3)
print(abs(0.4 - 0.1 -0.3)< 1e-6)
print(158.20+ -2.9 + 2.3E18)
import sys
print(sys.float_info.dig)#浮点数的最大精确度
print(sys.float_info.epsilon)#最小间隔值
print(sys.float_info.min)#最小浮点数
print(sys.float_info.max)#最大浮点数

print("*********************************************************************************************************")
#复数型
x = 3 + 4j
print(x.real)#复数实部
print(x.imag)#复数虚部
print(abs(x))#计算复数的求模
print(x.conjugate())#得到共轭复数
y = 5 + 6.2j
print(x + y)
print(x*y)
print("*******************************************************************************************************")
#分数
from fractions import Fraction
x = Fraction(3,4)#表示分数3/4
print(x.numerator)#表示分子3
print(x.denominator)#表示分母4
print(x**2)#Fraction（9，16）分数的平方
y = Fraction(2,5)
print(x - y)
print(x * y)
print(x / y)
a = Fraction(3.2)
print(a)
print("*****************************************************************************************************")
#高精度实数
from fractions import Decimal
print(2/11)
print(Decimal(1/11))
print(Decimal('0.181818181818181818232235648971516454613165423135465484216313165465'))
print(Decimal(2/11) + Decimal(1/3))
print(Decimal('0.515151515155151515151515151515151515151515151515'))
print("______________________________________________________________________________________________________")
#字符和字符串
print("这是一个字符串")
print("this is a string!!!!")
print(""" 1 line 
two line
    三 Line""")
print("'Tom said,let`s go.'")
print(r'a string')

print("____________________*******************************______________________________***********************")
# 字符串
str1 = '学习PYTbyHON'
print(type(str1))
byte1 = str1.encode('utf-8')
print(type(byte1))
print(byte1)
byte2 = str1.encode('gbk')#调用encode进行编码得到字符串
print(byte2)
str2 = byte2.decode('gbk')#调用dencode进行  指定   正确的编码格式  得到字符串
print(str2)
print("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
#进制转换
print(bin(193))#将整数转化为二进制
print(oct(193))#将整数转化位八进制
print(hex(193))#简整数转化为十六进制

print("#######################################################################################################")
#其他数值转换
print(int(-13.26))#整型
from fractions import Fraction,Decimal
x = Fraction(2,11)
print(int(x))
x = Fraction(23,11)
print(int(x))
x = Decimal(23/11)
print(int(x))
print(Decimal('2.09432423424245453223423523423523423652342345232342123'))
print(int(x))
print(int('0b11000001',2))
print(int('0xc1',16))
print("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
print(float(-12))
print(float('-12.5'))
x = complex(3)#complex用来生成复数3+0j
print(x)
x = complex(3,4)#complex用来生成复数3+4j
print(x)
print(float('nan'))#nan非数字
print(complex('inf'))#inf+0j 无穷大

print("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
print(eval(b'3+5-12.5'))
print(eval(compile('print(3+5-12.5)', 'temp.txt', 'exec')))
print(eval('126'))
# print(eval('0126'))#eval（不允许0开头，会报错）
print(int('0126'))