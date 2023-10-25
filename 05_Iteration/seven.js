const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNUms = myNums.map((num) => num + 10);

// chaining
const newNUms = myNums
  .map((num) => num * 10)
  .map((num) => num / 5)
  .filter((num) => num > 10);

console.log(newNUms);
