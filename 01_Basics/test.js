console.log("Basics of Javascript");

//-----  01. Variables: Let, Const , Var    ----//
const userID = 100
let userName = "Tony"
var userEmail = "tony@gmail.com"
userCity = "Mumbai"
console.table([userID, userName, userEmail, userCity])

// userID = 50;  Cannot changed 
userName = "Peter"
userCity = "Delhi"

console.table([userID, userName, userEmail, userCity])

/*
Prefer to not use var 
because of issue in block scope and functional scope. 
*/

//////////////////////////////////////////////////////////////////////////////

//---- 02. Datatypes ----//

/* Primitive 
  number => 2^53
  bigInt 
  string => ""
  boolean => true || false
  undefined 
  null
  symbol => unique
*/

// Object

console.log(typeof undefined); // undefined 
console.log(typeof null); // object

/////////////////////////////////////////////////////////////////////////////