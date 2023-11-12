// Ex-1
// let multiply = function (x, y) {
//     console.log(x * y);
// }

// let multiplyByTwo = function (y) {
//     let x = 2;

//     console.log(x * y);
// }


// Ex-2 function currying using bind method
// let multiply = function (x, y) {
//     console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5) // 10

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5) // 15


// Ex-3 function currying using bind method
// let multiply = function (x, y) {
//     console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this, 2, 3);
// // 5 ignored
// multiplyByTwo(5) // 6

// let multiplyByThree = multiply.bind(this);
// multiplyByThree(3, 5) // 15


// Ex-4 function currying using function closure
let multiply = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3); // 6

let multiplyByThree = multiply(3);
multiplyByThree(10); // 30