// Singleton

const mySym = Symbol('key1');

// Object Literal
const JsUser = {
  name: 'Mic',
  'full Name': 'Mr Mic',
  [mySym]: 'myKey1',
  age: 18,
  location: 'Mumbai',
  email: 'mic200@google.com',
  isLoggedIn: false,
};

// Access Object
console.log(JsUser.location);
console.log(JsUser['email']);
console.log(JsUser.fullName); // Undefined  ❌
console.log(JsUser['full Name']); // Mr Mic  ✔
console.log(JsUser[mySym]); // Only for symbol datatype

// Method or use
JsUser.email = 'nic@yahoo.com';
// Object.freeze(JsUser); // Stop further changes in object data
console.log(JsUser);
JsUser.email = 'nick@pinky.com';
console.log(JsUser);

JsUser.greeting = function () {
  console.log('Welcome to MyCodeSpace');
};

JsUser.greetingTwo = function () {
  console.log(`Welcome to MyCodeSpace, ${JsUser.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
