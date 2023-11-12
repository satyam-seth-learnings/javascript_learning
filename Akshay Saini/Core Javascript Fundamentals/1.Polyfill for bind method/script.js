// Ex-1
// let name = {
//     firstname: "Satyam",
//     lastname: "Seth"
// }

// let printName = function () {
//     console.log(this.firstname + " " + this.lastname);
// }

// let printMyName = printName.bind(name);
// printMyName();

// Function.prototype.mybind = function (...args) {
//     let obj = this;

//     return function () {
//         obj.call(args[0]);
//     }
// }

// let printMyName2 = printName.mybind(name);
// printMyName2();


// Ex-2
// let name = {
//     firstname: "Satyam",
//     lastname: "Seth"
// }

// let printName = function (hometown) {
//     console.log(this.firstname + " " + this.lastname + ", " + hometown);
// }

// let printMyName = printName.bind(name, "Lucknow");
// printMyName();

// Function.prototype.mybind = function (...args) {
//     let obj = this;
//     let params = args.slice(1);

//     return function () {
//         // obj.call(args[0], params);
//         obj.apply(args[0], params);
//     }
// }

// let printMyName2 = printName.mybind(name, "Lucknow");
// printMyName2();


// Ex-3
let name = {
    firstname: "Satyam",
    lastname: "Seth"
}

let printName = function (hometown, state, country) {
    console.log(this.firstname + " " + this.lastname + ", " + hometown + ", " + state + ", " + country);
}

// let printMyName = printName.bind(name, "Lucknow");
// printMyName("UP", "India");
let printMyName = printName.bind(name, "Lucknow", "UP");
printMyName("India");

Function.prototype.mybind = function (...args) {
    let obj = this;
    let params = args.slice(1);

    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

// let printMyName2 = printName.mybind(name, "Lucknow");
// printMyName2("UP", "India");
let printMyName2 = printName.mybind(name, "Lucknow", "UP");
printMyName2("India");

