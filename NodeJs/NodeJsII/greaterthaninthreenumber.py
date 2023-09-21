print("Enter first number ");
n1 = int(input());
print("Enter Second number: ")
n2 = int(input())
print("Enter Third number: ")
n3 = int(input())

if(n1 > n2 and n1 > n3 ):
    print("n1 is greater ")
elif(n2>n1 and n2 > n3): 
    print("n2 is greater")
else:
    print("n3 is greater")