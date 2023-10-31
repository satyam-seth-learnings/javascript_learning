// Ex-1
// function outer() {
//     var a = 10;

//     function inner() {
//         console.log(a);
//     }

//     return inner;
// }

// // outer()(); // 10

// Ex-2
// function outer() {
//     var a = 10;

//     function inner() {
//         console.log(a);
//     }

//     return inner;
// }

// var close = outer();
// close(); // 10

// Ex-3
// function outer() {

//     function inner() {
//         console.log(a);
//     }

//     var a = 10;
//     return inner;
// }

// var close = outer();
// close(); // 10

// Ex-4
// function outer() {

//     function inner() {
//         console.log(a);
//     }

//     let a = 10;
//     return inner;
// }

// var close = outer();
// close(); // 10

// Ex-5
// function outer(b) {

//     function inner() {
//         console.log(a, b);
//     }

//     let a = 10;
//     return inner;
// }

// var close = outer("helloworld");
// close(); // 10 'helloworld'

// Ex-5
// function outest() {
//     var c = 20;

//     function outer(b) {

//         function inner() {
//             console.log(a, b, c);
//         }

//         let a = 10;
//         return inner;
//     }

//     return outer;
// }

// var close = (outest())("helloworld");
// close(); // 10 'helloworld' 20

// Ex-6
// function outest() {
//     var c = 20;

//     function outer(b) {

//         function inner() {
//             console.log(a, b, c);
//         }

//         let a = 10;
//         return inner;
//     }

//     return outer;
// }

// var a = 100;
// var close = (outest())("helloworld");
// close(); // 10 'helloworld' 20

// Ex-7
// function outest() {
//     var c = 20;

//     function outer(b) {

//         function inner() {
//             console.log(a, b, c);
//         }

//         return inner;
//     }

//     return outer;
// }

// var a = 100;
// var close = (outest())("helloworld");
// close(); // 100 'helloworld' 20

// Ex-7
// function outest() {
//     var c = 20;

//     function outer(b) {

//         function inner() {
//             console.log(a, b, c);
//         }

//         return inner;
//     }

//     return outer;
// }

// var close = (outest())("helloworld");
// // Uncaught ReferenceError: a is not defined
// close();

// Ex-8
// // var counter = 0;

// // function incrementCounter() {
// //     counter++;
// // }

// function counter() {
//     var count = 0;

//     function incrementCounter() {
//         count++;
//     }
// }

// // Uncaught ReferenceError: count is not defined
// console.log(count);

// Ex-9 Data Privacy Using Closures
// function counter() {
//     var count = 0;

//     return function incrementCounter() {
//         count++;
//         console.log(count);
//     }
// }

// var counter1 = counter();
// counter1(); // 1
// counter1(); // 2

// var counter2 = counter();
// counter2(); // 1
// counter2(); // 2

// Ex-10 Function Construction
// function Counter() {
//     var count = 0;

//     this.incrementCounter = function () {
//         count++;
//         console.log(count);
//     }

//     this.decrementCounter = function () {
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new Counter();
// counter1.incrementCounter(); // 1
// counter1.incrementCounter(); // 2
// counter1.incrementCounter(); // 3

// Ex-11
function a() {
    var x = 0, z = 10;

    return function b() {
        console.log(x);
    }
}

var y = a();
//...

y(); // 0
// z's memory free by Smart Garbage collection by V8 JS Engine in Chrome 