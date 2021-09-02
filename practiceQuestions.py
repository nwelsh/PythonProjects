# September 2, 2021

# number 1
# Describe the concept of scope in Python with reference to local and global scope: scope is wehre a variable is accessible. 
# Like Java, Local scope is within a python function, these can only be accessed within the function. 
# Global scope is a variable in the main part and these can be accessed throughout the program. 
# Local can be made glocal by ising global keyword inside a function 

# number 2 
# What is the difference between a tuple and a list?
# Both of these are used to store data. 
# A list is comma seperated values within square brackets. These can be changed. 
mylist = ["apple", "banana", "cherry"]
# A tuple has values enclosed in curly braces. These cannot be changed 
mytuple = ("apple", "banana", "cherry")

# number 3 
# What is a lambda function? Why are they used?
# lambda functions have no name and are anonymous functions. These are used as alternative to declaring a regular function
prices = [2.50, 3.20, 2.90]
num = list(filter(lambda price: (price > 3), prices))

# number 4 
# What is the __init__ method? Write an example of an __init__ method for the following properties:
