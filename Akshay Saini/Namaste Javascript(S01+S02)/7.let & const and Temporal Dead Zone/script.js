// Ex-1
// // console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
// console.log(b); // undefined
// let a = 10;
// console.log(a); // 10
// var b = 100;
// // console.log(x) // Uncaught ReferenceError: x is not defined
// console.log(window.a); // undefined
// console.log(window.b); // 100
// console.log(this.a); // undefined
// console.log(this.b); // 100

// Ex-2
// console.log('start');
// var a = 10;
// console.log(a); // 10
// var a = 100;
// console.log(a); // 100

// Ex-3
// // Uncaught SyntaxError: Identifier 'a' has already been declared
// console.log('start');
// let a = 10;
// console.log(a); // 10
// let a = 100;
// console.log(a); // 100

// Ex-4
// // Uncaught SyntaxError: Identifier 'a' has already been declared
// console.log('start');
// let a = 10;
// console.log(a); // 10
// var a = 100;
// console.log(a); // 100

// Ex-5
// let a;
// a = 10;
// console.log(a);

// Ex-6
// // Uncaught SyntaxError: Missing initializer in const declaration
// const a;
// a = 10;
// console.log(a);

// Ex-6
// script.js:50 Uncaught TypeError: Assignment to constant variable
const a = 10;
a = 100;
console.log(a);

