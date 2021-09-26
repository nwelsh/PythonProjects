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

/* */

/* */

/* */

/* */

/* */


/* */

/* */

/* */

/* */

/* */


/* */

/* */

/* */

/* */

/* */
