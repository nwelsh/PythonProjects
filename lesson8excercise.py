# define the Vehicle class
class Vehicle:
    name = ""
    kind = "car"
    color = ""
    value = 100.00
    def description(self):
        desc_str = "%s is a %s %s worth $%.2f." % (self.name, self.color, self.kind, self.value)
        return desc_str
# your code goes here
# I added the information to the class below 

car1 = Vehicle()
car2 = Vehicle()

car1.name = "Fer"
car1.kind = "convertible"
car1.color = "red"
car1.value = 60000.00


car1.name = "Jump"
car1.kind = "van"
car1.color = "blue"
car1.value = 10000.00

# test code
print(car1.description())
print(car2.description())
