console.log("Basics of Javascript");

//-----  01. Variables: Let, Const , Var    ----//
const userID = 100
let userName = "Tony"
// var userEmail = "tony@gmail.com"
userCity = "Mumbai"
// console.table([userID, userName, userEmail, userCity])

// userID = 50;  Cannot changed 
userName = "Peter"
userCity = "Delhi"

// console.table([userID, userName, userEmail, userCity])

/*
  |(index)|      Values      |
  |   0   |       100        |
  |   1   |     'Peter'      |
  |   2   | 'tony@gmail.com' |
  |   3   |     'Delhi'      |
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

// console.log(typeof undefined); // undefined 
// console.log(typeof null); // object

/////////////////////////////////////////////////////////////////////////////

// 03. Conversion Operation //
// let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

// let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// let isLoggedIn = "hitesh"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);         // 101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


// --- Comparisons --- //
/*
console.log(2 > 1);     // true
console.log(2 >= 1);    // true
console.log(2 < 1);     // false
console.log(2 == 1);    // false
console.log(2 != 1);    // true


console.log("2" > 1);   // true
console.log("02" > 1);  // true

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// === 

console.log("2" === 2);  // false
*/

//---------------------------------------------------------//

//  Primitive{Store in Stack}

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) {Store in Heap}

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Memory 

// Stack {call by value}
let myName = "TonyStark";
let anotherName = myName;

console.log(anotherName);
anotherName = "Ironman";

console.log(myName);
console.log(anotherName);


// Heap  {reference }
let car ={
  brand: "BMW",
  year : 2018
}

let vehicle  = car;
console.log(vehicle);

vehicle.year = 2023;

console.log(car);
console.log(vehicle);