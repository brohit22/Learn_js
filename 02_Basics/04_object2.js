//const storeUser = new Object();  // Singleton object

const tinderUser = {}; // Not A Singleton object

tinderUser.isLoggedIn = false;
tinderUser.userName = 'Timy';

// console.log(tinderUser);

const regularUser = {
  email: 'somegmail.com',
  fullName: {
    userName: {
      firstName: 'Mr',
      lastName: 'Mic',
    },
  },
};

// Merge two object
const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'c', 4: 'd' };

// const obj3 = {obj1, obj2}
const obj3 = Object.assign(obj1, obj2);
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));
