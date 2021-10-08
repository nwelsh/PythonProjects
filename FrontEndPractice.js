//Js, Java, React, HTML 

//9/3 Datachat
//1:45-2:15 pm 9/27 CUNA
//1:00-1:30 9/29 Singlewire
//11:15 9/27 MRA
//9:00 am MPX interview 10/8
//3:00 Naviant Interview 10/8
//1:30 Exact Sciences 10/11

//*****************************************************************************************************************************************************************HTML 
// https://www.javatpoint.com/html-interview-questions 

// what is HTML? Hyper Text Markup Language

//tags: HTML tags are composed of three things: an opening tag, content and ending tag.

//lists: ordered, unordered, definition

//Html elements vs tags: HTML tags are composed of three things: an opening tag, content and ending tag.

//Semantic HTML is a coding style. ex  using strong instead of b for bold 

//insert copyright or other symbols: &copy or &#169

//<header>: It is used to define a header for a document or a section.
//<nav>: It is used to define a container for navigation links
//<section>: It is used to define a section in a document
//<article>: It is used to define an independent, self-contained article
//<aside>: It is used to define content aside from the content (like a sidebar)
//<footer>: It is used to define a footer for a document or a section
  
  //marquee: scrolling text on a webpage 
  
  //span tag: add color, background on text, highlight... inline changes like the middle 
  
  //An iframe is used to display a web page within a web page. also nested 

// what are entities: HTML character entities are used as a replacement for reserved characters in HTML. You can also replace characters that are not present on your keyboard by entities. These characters are replaced because some characters are reserved in HTML.

 	&lt;
  
  //canvas element: <canvas> element is a container that is used to draw graphics on the web page using scripting language like JavaScript, copyright 
  
  //SVG:SVG is used to describe the two-dimensional vector and vector/raster graphics
  <svg width="100" height="100">    
 <circle cx="50" cy="50" r="40" stroke="yellow" stroke-width="4" fill="red" />    
</svg>   //this creates a red circle
  
  //new form elements in HTML:  color, date, datetime-local, email, time URL, range, telephone, numbr, search 
  
// difference between ID and class 
  // id : unique ina pafe and can apply to at most one element 
  //class selector can be multiple elements 
//*****************************************************************************************************************************************************************Python
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
nicole = Student("Nicole", "06/10/2000", 15)
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
# study html, c, java, pyhton
//*****************************************************************************************************************************************************************JS
//author : https://www.interviewbit.com/javascript-interview-questions/
//data types 

//string 
var str = "Vivek Singh Bisht"; //using double quotes
var str2 = 'John Doe'; //using single quotes

//number 
var x = 3; //without decimal
var y = 3.6; //with decimal

//big int 
var bigInteger =  234567890123456789012345678901234567890;

//boolean
var a = 2;
var b =  3;
var c =  2;
(a == b) // returns false
(a == c) //returns true

//undefined
var x; // value of x is undefined
var y = undefined; // we can also set the value of a variable as undefined

//null
var a = null;

//symbol - store anonymous and unique values 
var symbol1 = Symbol('symbol');

// typeof returns what that is 
typeof "Nicole" //returns strong
typeof 21.5 //returns number 
typeof null // Returns "object"

//non primitive types can hold multiple types of values 
var obj1 = {
   x:  43,
   y:  "Hello world!",
   z: function(){
      return this.x;
   }
}
      
// Collection of data as an ordered list
      
var array1 = [5, "Hello", true, 4.1];  

//hoisting - behavior of js where all the variable and function declarations are moved to the top 
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;

hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction(){ 
  console.log(" Hello world! ");
}

// == vs ===
var x = 2;
var y = "2";
(x == y)  // Returns true since the value of both x and y is the same

(x === y) // Returns false since the typeof x is "number" and typeof y is "string"

//implicit type coercion - auto conversion of a vlaue from one type to another. when teh operands are different types 
//example 1 

var x = 3;
var y = "3";
x + y // Returns "33" 

//example 2 
var x = 24;
var y = "Hello";
x + y   // Returns "24Hello";

//example 3 
var name = "Vivek";
var surname = " Bisht";

name + surname     // Returns "Vivek Bisht"

//example 4
var x = 3;
Var y = "3";
x - y    //Returns 0 since the variable y (string type) is converted to a number type

//boolean coercion 
//All values except 0, 0n, -0, “”, null, undefined and NaN are truthy values.

var x = 0;
var y = 23;
        
if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)  
        
if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)

//static vs dynamic 
//static = variables and values have tyopes, they cannot change type 
//dynamic = no types, values have tupes, can be changed 
//therefore, dynamic 

//NaN property: a value which is not a legal number. typeof NaN will return a number 
isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 

//passed by value and passed by reference.

// pass by value means you are making a copy in memory of the actual parameter's value 
// that is passed in, a copy of the contents of the actual parameter.
// pass by reference (also called pass by address), a copy of the address of the actual 
// parameter is stored.

//immediately invoked function: a function that runs as soon as it is defined.
(function(){ 
  // Do something;
})();

//Higher Order Functions: Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

//this keyword: refers to the object that the function is a property of 
var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
}
        
obj.getName();
//output: akshay. is higher importance than beign overrridden

//call() method - invokes a method by specifying the owner objkect. allows an object to use the method of another object 
function sayHello(){
  return "Hello " + this.name;
}
        
var obj = {name: "Sandy"};
        
sayHello.call(obj);

//axample 2 
var person = {
  age: 23,
  getAge: function(){
    return this.age;
  }
}
        
var person2 = {age:  54};
person.getAge.call(person2);
        
// Returns 54  

//bind() - returns a new function where the value of this will be bound to the owner obejct, provided as a parameter
var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
        
var person1 = {name:  "Vivek"};
        
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
        
// Binds the displayDetails function to the person1 object
        
        
detailsOfPerson1();
// Returns Vivek, bike details: TS0452, Thunderbird

//currying:an advanced technique to transform a function of arguments n, to n functions of one or less arguments.
//*****************************************************************************************************************************************************************Java 

// source: https://www.interviewbit.com/java-interview-questions/

/* Java focuses on code simplicity. java supports primitive data types - byte, boolean, char short, not object oriented */

/* Instance vs local variables 
instance: accessible by all methods in the class
local: within a block, function, or constructor
*/
//instance 
class Athlete {
public String athleteName;
public double athleteSpeed;
public int athleteAge;
}

//local
public void athlete() {
String athleteName;
double athleteSpeed;
int athleteAge;
}

/* Data encapsulation: hiding data attributes and their behaviors in a single unit. setters and getters*/

/* JIT: just in time, improving the performance during run time. it foes the task of complitiing parts of bye code having similar functionality at the same tieme and reduces the compile time */

/* difference between equals() and ==
equals: a method defined in obejct calss. used for checkin the eqality of conents between two objects 
==: binary operator - checks for comparing addressed, checks memory 
*/

/* infinite loops  */
for (;;)
{
   // Business logic
   // Any break logic
}

while(true){
  
}
do{
   // Business logic
   // Any break logic
}while(true);
/* constructor overloading - depending on number of parameters and their types, the constructors take in fifferent information*/

class Hospital {
int variable1, variable2;
double variable3;
public Hospital(int doctors, int nurses) {
 variable1 = doctors;
 variable2 = nurses;
}
public Hospital(int doctors) {
 variable1 = doctors;
}
public Hospital(double salaries) {
 variable3 = salaries
}
}


/* mothod overloading vs overriding: overlaoding returns dif variables, overridingreturns same varibales. it extends. it has the same parameters  
static methods CAN be overloaded
static methods CANNOT be overridden
*/


/* final means it cannot change*/
try {
int variable = 5;
}
catch (Exception exception) {
System.out.println("Exception occurred");
}
finally {
System.out.println("Execution of finally block");
}

public static void main(String[] args) {
String example = new String("InterviewBit");
example = null;
System.gc(); // Garbage collector called
}
public void finalize() { //called so the clean up activity is implemented
// Finalize called
} 
/* The super keyword is used to access hidden fields and overridden methods or attributes of the parent class. */
 public void foo(){
           System.out.println("Parent class foo!");
           super.foo();    //Calls foo method of Parent class inside the Overriden foo method of Child class.
       }

/* garbage collector: enure the memory resouce is used efficiently. Heap is cleaned up  */

/* hash table: Hashtable stores key/value pairs in a hash table. When using a Hashtable, you specify an object that is used as a key, and the value that you want linked to that key.
You use keys to access data */
