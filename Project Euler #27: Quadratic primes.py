
import itertools
def isprime(x):
    if x%2==0:
        return False
    for i in range(3,int(x**0.5)+1,2):
        if x%i==0:
            return False
    return True

n=int(input())
max_consec=0
solutions=[]
for i in itertools.product(list(range(-n,n+1,1)),range(n+1)): #I didn't set the range of b through the negatives because for x=0 the exspression will become b which must be positive so only +values 
    primes=0
    x=0
    while True:
        abc=x**2+i[0]*x+i[1]
        if abc<0: #as our required number must be atleast positive
            break
        if not isprime(abc):
            break
        x+=1
        primes+=1
    if primes>max_consec:
        solutions.append(i)
        max_consec=primes
print(*solutions[-1])
