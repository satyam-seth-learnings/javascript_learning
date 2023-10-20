// Ex-1
// getName() // Namaste Javascript
// console.log(x); // undefined
// console.log(getName) // getName() { console.log("Namaste Javascript"); }

// var x = 7; // if this line is remove, throws error x is not defined

// function getName() {
//     console.log("Namaste Javascript");
// }

// getName() // Namaste Javascript
// console.log(x); // 7
// console.log(getName) // getName() { console.log("Namaste Javascript"); }


// Ex-2
console.log(x); // undefined
console.log(getName) // undefined
getName() // Uncaught TypeError: getName is not a function

var x = 7; // if this line is remove, throws error x is not defined

// var getName = () => {
//     console.log("Namaste Javascript");
// }

var getName = function () {
    console.log("Namaste Javascript");
}
