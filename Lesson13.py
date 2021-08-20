# Lesson 13: https://www.learnpython.org/en/Multiple_Function_Arguments
# August 20, 2021

# edit the functions prototype and implementation
def foo(a, b, c):
    pass

def bar(a, b, c):
    pass


# test code
if foo(1,2,3,4) == 1:
    print("Good.")
if foo(1,2,3,4,5) == 2:
    print("Better.")
if bar(1,2,3,magicnumber = 6) == False:
    print("Great.")
if bar(1,2,3,magicnumber = 7) == True:
    print("Awesome!")


