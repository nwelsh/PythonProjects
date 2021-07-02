#lesson: conditions https://www.learnpython.org/en/Conditions

#same as java 
x = 2
print(x == 2) # prints out True
print(x == 3) # prints out False

name = "Nicole"
age = 21
if name == "Nicole" and age == 21:
    print("This how you do an if statement")
if name == "Nicole" or age == 21:
    print("if with or")
    
name = "John"
if name in ["John", "Rick"]:
    print("Your name is either John or Rick.")
    
statement = False
another_statement = True
if statement is True:
    # do something
    pass
elif another_statement is True: # else if
    # do something else
    pass
else:
    # do another thing
    pass
    
    
x = [1,2,3]
y = [1,2,3]
print(x == y) # Prints out True
print(x is y) # Prints out False
x = y
print(x is y)

print(not False) # Prints out True


# change this code
number = 16
second_number = 0
first_array = [1,2,3]
second_array = [1,2]

if number > 15:
    print("1")

if first_array:
    print("2")

if len(second_array) == 2:
    print("3")

if len(first_array) + len(second_array) == 5:
    print("4")

if first_array and first_array[0] == 1:
    print("5")

if not second_number:
    print("6")
