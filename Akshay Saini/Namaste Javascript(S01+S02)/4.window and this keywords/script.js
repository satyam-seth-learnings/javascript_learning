// Ex-1

// Ex-2
var a=10;

function b() {
    var x=10;
}

console.log(a) // 10
console.log(this.a) // 10
console.log(window.a) // 10
console.log(x) // Uncaught ReferenceError: x is not defined