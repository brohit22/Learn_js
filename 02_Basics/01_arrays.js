// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 5, 36, 6);
// console.log(myArr[2]);

// Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));  // false
// console.log(myArr.includes(3));  // true

// const newArr = myArr.join();    // convert array to string
// console.log(newArr);
// console.log(typeof newArr);  // String
// console.log(myArr);

// Slice , Splice

/* .slice -> This method return shallow copy{Do not change in OG array } of original array between
 * given parameter i.e  including start but not end one.
 */
console.log("A", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

// splice -> This method change in OG array and cut/ splice the OG ARRAY IN given parmeter.

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C", myArr);
