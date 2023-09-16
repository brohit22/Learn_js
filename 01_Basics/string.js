//  Resource - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const myname = "Ironman";
const count = "3000";

// console.log(`I am ${myname}, I love you ${count}`);

const gameName = new String("hitesh-hc-com");
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));

/*   str:split() splits a string using a pattern string to determine where the splits should occur, returning a node-set containing the resulting strings.
 */
console.log(split(gameName, "-"));
