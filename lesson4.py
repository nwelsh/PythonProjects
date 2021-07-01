# strings!
#tutorial: https://www.learnpython.org/en/Basic_String_Operations
#7/1 lesson 

string = "nicole"
#you cant print this out but it still puts it into the global frame
stringSame = 'nicole'

print(string)
#print(stringsame)
print(len(string)) # == 6
print(string.index("o")) #  == 3 
print(string.count("l")) # == 1
# 1 to 3 index
print(string[1:3]) # == ic

# 3 to 6 skipping one character [start:stop:step] == lo w
astring = "Hello world!"
print(astring[3:7:1])
print(astring[3:7:2]) # == l
print(astring[::-1])# !dlrow olleH

print(string.upper() + string.lower()) # NICOLEnicole

print(astring.startswith("Hello")) #true
print(astring.endswith("asdfasdfasdf")) #false

afewwords = astring.split(" ")
# makes it into an array of hello and world 
print(afewwords)
