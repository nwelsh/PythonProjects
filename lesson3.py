#Lesson 3 I am learning string formatting. String formatting in python is very similar to C. 
#https://www.learnpython.org/en/String_Formatting

name = "Nicole"
print("Hello, %s" % name)

#s is string, d is digit, f is float (like c)
age = 21
print("%s is %d years old" % (name, age))

data = ("Nicole", "Welsh", 21.1)
format_string = "Hello %s %s. Your current balance is $%s."

print(format_string % data)
