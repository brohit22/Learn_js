// High Order Loops

// 1. for of

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  // console.log(num);
}

const greetings = 'Hello world';
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}

// 2. Maps
const map = new Map();
map.set('MH', 'MAHARASHTRA');
map.set('UP', 'Utter Pradesh');
map.set('WB', 'West Bangal');

console.log(map);

for (const [key, value] of map) {
  console.log(key, ':- ', value);
}

const myObject = {
  game1: 'NFS',
  game2: 'GTA',
};

for (const [key, value] of myObject) {
  console.log(key, ':- ', value);
}

// objects are not iteratable using for of ;

const map2 = new Map();
map.set('MH', 'MAHARASHTRA');
map.set('UP', 'Utter Pradesh');
map.set('WB', 'West Bangal');

for (const key in map2) {
  console.log(key);
}
