// Ex-1
// let arr = ["Akshay", "Aditya"];
// let object = {
//     name: "Akshay",
//     city: "Dehradun",
//     getIntro: function () {
//         console.log(this.name + "from " + this.city);
//     }
// };

// function fun() {

// }


// Ex-2
// let object = {
//     name: "Akshay",
//     city: "Dehradun",
//     getIntro: function () {
//         console.log(this.name + " from " + this.city);
//     }
// };

// let object2 = {
//     name: "Aditya"
// };

// // Never do this
// object2.__proto__ = object;

// console.log(object2.name); // Aditya
// console.log(object2.city); // Dehradun
// object2.getIntro(); // Aditya from Dehradun

// Ex-3
Function.prototype.mybind = function () {
    console.log("abcd");
};

function fun() { }

fun.__proto__.mybind(); // abcd
fun.mybind(); // abcd