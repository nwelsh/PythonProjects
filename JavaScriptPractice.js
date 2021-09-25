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
