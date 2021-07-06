# lesson 7: Functions https://www.learnpython.org/en/Functions

#basic
def funct():
    print("Basic function")
    
#string inputs 
def funct2(name, goodmorning):
    #use %s for string and can put in the input through the function 
    print("Hello, %s , From My Function!, I wish you %s"%(name, goodmorning))

#number inputs 
def sum(a, b):
    return a + b
    
#call functions

funct()

funct2("Nicole", "good morning")

x = sum(4,5)
