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
