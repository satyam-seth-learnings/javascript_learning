// Ex-1
// // Function Statement aka Function Declaration
// function a() {
//     console.log("a called");
// }

// // Function Expression
// var b = function () {
//     console.log("b called");
// }

// a();
// b();

// Ex-2 Difference between Function Statement and Function Expression
// a(); // a called
// b(); // Uncaught TypeError: b is not a function

// // Function Statement aka Function Declaration
// function a() {
//     console.log("a called");
// }

// // Function Expression
// var b = function () {
//     console.log("b called");
// }


// Ex-3
// // Anonymous Function
// // Uncaught SyntaxError: Function statements require a function name
// function () {

// }

// Ex-4
// // Named Function Expression
// var b = function xyz() {
//     console.log(xyz); // print function
//     console.log("b called");
// }

// b(); // b called
// xyz(); // Uncaught ReferenceError: xyz is not defined

// Ex-5
// // Difference between Parameters and Arguments ?
// //                     Parameters
// var b = function xyz(param1, param2) {
//     console.log(xyz); // print function
//     console.log("b called");
// }

// // Arguments
// b(1, 2)

// Ex-6
// // First Class Functions
// var b = function xyz(param1) {
//     console.log(param1);
// }

// b(function () { }); // ƒ () { }

// function xyz() { }
// b(xyz); // ƒ xyz() { }

// Ex-7
var a = function () {
    return function () { }
}
var b = function () {
    return function xyz() { }
}

console.log(a()); // ƒ () { }
console.log(b()); // ƒ xyz() { }

// Arrow Functions
() => { }