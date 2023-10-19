const user = {
  username: 'Mic',
  price: 777,

  welcomeMessage: function () {
    console.log(`${this.username}. welcome to server`);
    // console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);   // Output: {}  , empty

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);   // Output : undefined   , this not use / work in function
// }

// chai()

const chai = () => {
  let username = 'hitesh';
  console.log(this.username); // Output : undefined
  console.log(this);
};

chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: 'hitesh' });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
