//Js, Java, React, HTML 

//1:45-2:15 pm 9/27 CUNA
//1:00-1:30 9/29 Singlewire

//*****************************************************************************************************************************************************************HTML 

//*****************************************************************************************************************************************************************Python

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
