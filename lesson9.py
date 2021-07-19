# lesson 9: https://www.learnpython.org/en/Dictionaries

phonebook = {}
phonebook["John"] = 938477566
phonebook["Jack"] = 938377264
phonebook["Jill"] = 947662781
print(phonebook)
# prints: {'John': 938477566, 'Jack': 938377264, 'Jill': 947662781}

phonebook2 = {
    "John" : 938477566,
    "Jack" : 938377264,
    "Jill" : 947662781
}
print(phonebook2) #same print 

for name, number in phonebook.items():
    print("Phone number of %s is %d" % (name, number))
    
del phonebook["John"]
print(phonebook) # just jack and jill

phonebook.pop("Jack") # just jill
print(phonebook)

# add jake and delete jill
phonebook["Jake"] = 938273443  
del phonebook["Jill"]  
