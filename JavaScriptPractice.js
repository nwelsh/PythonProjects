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

