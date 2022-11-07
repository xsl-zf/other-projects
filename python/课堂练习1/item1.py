def jishu(n, nk,glr):
    c = 0
    d = 0
    sum = 0
    i = 0
    while i < n:
        c = c + 1
        d = d + 1
        i = i + 1
        if c == d :
            sum = sum+1
        if c == nk:
            c=0
        if d == glr:
            d=0
    return sum

print("同时报相同数的次数是",jishu(1000,20,30))





























