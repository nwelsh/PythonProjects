# September 6, 2021 practice

# number 1
# Describe the concept of scope in Python with reference to local and global scope: scope is wehre a variable is accessible. 
# Like Java, Local scope is within a python function, these can only be accessed within the function. 
# Global scope is a variable in the main part and these can be accessed throughout the program. 
# Local can be made glocal by ising global keyword inside a function 

# number 2 
# What is the difference between a tuple and a list?
# Both of these are used to store data. 
# A list is comma seperated values within square brackets. These can be changed. ordered, changeable, and allows duplicate members
mylist = ["apple", "banana", "cherry"]
# A tuple has values enclosed in curly braces. These cannot be changed 
mytuple = ("apple", "banana", "cherry")
# set. does not allow duplicates
myset = {"apple", "banana", "cherry"}  
# dictionary 
mydictionary = {"name": "apple", "color": "green"}  # is used within objects
# when the data has a unique reference that can be associated with the value

# number 3 
# What is a lambda function? Why are they used?
# lambda functions have no name and are anonymous functions. These are used as alternative to declaring a regular function
prices = [2.50, 3.20, 2.90]
num = list(filter(lambda price: (price > 3), prices))

# number 4 
# What is the __init__ method? Write an example of an __init__ method
# The init method defines a constructor in an object. it is called when the object is created. Basically how you make a constructor. 
class Student():
  def __init__(self, name, date_of_birth, grade):
     self.name = name
     self.date_of_birth = date_of_birth
     self.grade = grade
# so then when you declare on object you say nicole = Student("Nicole", "06/10/2000", 15)

# number 5 
# What is *args and **kwargs? Give an example of **kwargs in use.
# args statement returns a tuple of arguments. you can access with indexing.
# kwargs returns a dictionary of arguments. arguments are mapped with keys and values 
def show_age(**student):
	print("{} is {} years old.".format(student["name"], student["age"]))

show_age(age=21, name="Nicole")

# number 6 
# what makes Python an object oriented programming language?
# objects and classes are used to organize the code. 

# new information
# static - data types checked before executio. Dynamic - checked during 
# if elif else

# declare a variable 
x = 5;
y = int(5)

# print type of variable
print(type(x)) 

#'hello' is the same as "hello"

x = "Hello"[0]  # find first character in a string 

strip()  # remove whitespace

# foo'bar == 'foo'bar' == """foo'bar""" == 'foo\'bar'

# at interview: hash tables, dictionaries and when and why we use them, ids and classes
