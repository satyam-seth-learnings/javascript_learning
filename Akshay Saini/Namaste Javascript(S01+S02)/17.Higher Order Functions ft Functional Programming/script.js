// Ex-1
// function x() {
//     console.log("Namaste");
// }

// function y(x) {
//     x();
// }

// Ex-2
// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//     const output = [];

//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }

//     return output;
// }

// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//     const output = [];

//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }

//     return output;
// }

// console.log(calculateCircumference(radius));

// const calculateDiameter = function (radius) {
//     const output = [];

//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }

//     return output;
// }

// console.log(calculateDiameter(radius));

// Ex-3
// const radius = [3, 1, 2, 4];

// const area = function (radius) {
//     return Math.PI * radius * radius;
// }

// const circumference = function (radius) {
//     return 2 * Math.PI * radius;
// }

// const diameter = function (radius) {
//     return 2 * radius;
// }

// const calculate = function (arr, logic) {
//     const output = [];

//     for (let i = 0; i < arr.length; i++) {
//         output.push(logic(arr[i]));
//     }

//     return output;
// }

// console.log(radius.map(area));
// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// Ex-4 Pollyfil for map function in JavaScript
const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

Array.prototype.calculate = function (logic) {
    const output = [];

    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }

    return output;
}

console.log(radius.map(area));
console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));