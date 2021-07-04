# lesson 6: learnpython.org/en/Loops

# prime numbers 
primes = [2, 3, 5, 7]
for prime in primes:
    print(prime)
    
#ranges
# Prints out the numbers 0,1,2,3,4
for x in range(5):
    print(x)

# Prints out 3,4,5
for x in range(3, 6):
    print(x)

# Prints out 3,5,7
for x in range(3, 8, 2):
    print(x)
    
# while loop
count = 0
while count < 5:
    print(count)
    count += 1
    
    
for x in range(10):
    # Check if x is even
    if x % 2 == 0:
        continue
    print(x)
    
for i in range(1, 10):
    if(i%5==0):
        break
    print(i)
else:
    print("this is not printed because for loop is terminated because of break but not due to fail in condition")

    
    
