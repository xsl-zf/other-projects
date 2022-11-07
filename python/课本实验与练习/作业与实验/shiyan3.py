from random import randint
from math import sqrt

# lst = [randint(10, 100) for i in range(10)]
# maxNum = max(lst)
# primes = [p for p in range(2, maxNum) if 0 not in
#           [p % d for d in range(2, int(sqrt(p)) + 1)]]
#
# for num in lst:
#     n = num
#     result = []
#     for p in primes:
#         while n != 1:
#             if n % p == 0:
#                 n = n / p
#                 result.append(p)
#             else:
#                 break
#         else:
#             result = '*'.join(map(str, result))
#             break
#     print(num, '=', result, num == eval(str(result)))

# 4.1
# lst = [randint(10, 100) for i in range(50)]
# maxNum = max(lst)
# primes = [p for p in range(2, maxNum) if 0 not in
#           [p % d for d in range(2, int(sqrt(p)) + 1)]]
#
# for num in lst:
#     n = num
#     result = []
#     for p in primes:
#         while n != 1:
#             if n % p == 0:
#                 n = n / p
#                 result.append(p)
#             else:
#                 break
#         else:
#             result = '*'.join(map(str, result))
#             break
#     print(num, '=', result, num == eval(str(result)))


# 4.2
# lst = set([randint(10, 100) for i in range(10)])
# maxNum = max(lst)
# primes = [p for p in range(2, maxNum) if 0 not in
#           [p % d for d in range(2, int(sqrt(p)) + 1)]]
#
# for num in lst:
#     n = num
#     result = []
#     for p in primes:
#         while n != 1:
#             if n % p == 0:
#                 n = n / p
#                 result.append(p)
#             else:
#                 break
#         else:
#             result = '*'.join(map(str, result))
#             break
#     print(num, '=', result, num == eval(str(result)))

# 4.3
# lst = [randint(10, 100) for i in range(10)]
# maxNum = max(lst)
# primes = []
# for p in range(2, maxNum):
#     for d in range(2, int(sqrt(p)) + 1):
#         if p % d == 0:
#             break
#     else:
#         primes.append(p)
# for num in lst:
#     n = num
#     result = []
#     for p in primes:
#         while n != 1:
#             if n % p == 0:
#                 n = n / p
#                 result.append(p)
#             else:
#                 break
#         else:
#             result = '*'.join(map(str, result))
#             break
#     print(num, '=', result, num == eval(str(result)))

# 4.4
lst = tuple(set([randint(10, 100) for i in range(10)]))
maxNum = max(lst)
primes = [p for p in range(2, maxNum) if 0 not in
          [p % d for d in range(2, int(sqrt(p)) + 1)]]
value = []
for num in lst:
    n = num
    result = []
    for p in primes:
        while n != 1:
            if n % p == 0:
                n = n / p
                result.append(p)
            else:
                break
        else:
            result = '*'.join(map(str, result))
            value.append(result)
            break
    # print(num, '=', result, num == eval(str(result)))
print(dict(zip(lst, value)))
