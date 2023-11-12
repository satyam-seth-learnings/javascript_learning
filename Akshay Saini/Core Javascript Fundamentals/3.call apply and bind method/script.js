// Ex-1 call method
// let obj = {
//     firstname: "Satyam",
//     lastname: "Seth",
//     printFullName: function () {
//         console.log(this.firstname + " " + this.lastname);
//     }
// };

// obj.printFullName(); // Satyam Seth

// let obj2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar"
// }

// // function borrowing
// obj.printFullName.call(obj2); // Sachin Tendulkar

// Ex-2 call method
// let obj = {
//     firstname: "Satyam",
//     lastname: "Seth",
// };

// let printFullName = function () {
//     console.log(this.firstname + " " + this.lastname);
// }

// printFullName.call(obj); // Satyam Seth

// let obj2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar"
// }

// // function borrowing
// printFullName.call(obj2); // Sachin Tendulkar

// Ex-3 call method
// let obj = {
//     firstname: "Satyam",
//     lastname: "Seth",
// };

// let printFullName = function (hometown) {
//     console.log(this.firstname + " " + this.lastname + " " + hometown);
// }

// printFullName.call(obj, "Lucknow"); // Satyam Seth Lucknow

// let obj2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar"
// }

// // function borrowing
// printFullName.call(obj2, "Mumbai"); // Sachin Tendulkar Mumbai

// Ex-3 call method
// let obj = {
//     firstname: "Satyam",
//     lastname: "Seth",
// };

// let printFullName = function (hometown, state) {
//     console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state);
// }

// printFullName.call(obj, "Lucknow", "UP"); // Satyam Seth Lucknow UP

// let obj2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar"
// }

// // function borrowing
// printFullName.call(obj2, "Mumbai", "Maharashtra"); // Sachin Tendulkar Mumbai Maharashtra

// Ex-4 apply method
// let obj = {
//     firstname: "Satyam",
//     lastname: "Seth",
// };

// let printFullName = function (hometown, state) {
//     console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state);
// }

// printFullName.call(obj, "Lucknow", "UP"); // Satyam Seth Lucknow UP
// printFullName.apply(obj, ["Lucknow", "UP"]); // Satyam Seth Lucknow UP

// let obj2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar"
// }

// // function borrowing
// printFullName.call(obj2, "Mumbai", "Maharashtra"); // Sachin Tendulkar Mumbai Maharashtra
// printFullName.apply(obj2, ["Mumbai", "Maharashtra"]); // Sachin Tendulkar Mumbai Maharashtra

// Ex-5 bind method
let obj = {
    firstname: "Satyam",
    lastname: "Seth",
};

let printFullName = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state);
}

let printName = printFullName.bind(obj, "Lucknow", "UP");
console.log(printName); // ƒ (hometown, state) {    console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state); }
printName(); // Satyam Seth Lucknow UP
