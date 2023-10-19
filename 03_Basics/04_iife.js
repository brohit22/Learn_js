/*  Immediately Invoked Function Expressions (IIFE) */

(function chai() {
  console.log(`DB CONNECTED `);
})();

// ! semi-colen is required

(() => {
  console.log(`DB CONNECTED TWO ${name}`);
})();
