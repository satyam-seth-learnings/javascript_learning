// Ex-1
// function x() {
//     var a = 7;

//     function y() {
//         console.log(a); // 7
//     }

//     y();
// }

// x();


// Ex-2
// you can assign functions to a variable
// function x() {
//     var a = function y() {
//         console.log('Hello');
//     }

//     a();
// }

// x();

// Ex-3
// you can pass functions to a function
// function x(myFun) {
//     console.log(myFun)
// }

// x(function y() {
//     console.log('Hello');
// });

// Ex-4
// you can pass functions to a function
// function x(myFun) {
//     console.log(myFun)
// }

// x(function y() {
//     console.log('Hello');
// });

// Ex-5
// you return functions from a function
// function x() {
//     var a = function y() {
//         console.log('Hello');
//     }

//     return a;
// }

// console.log(x());

// Ex-6
// function x() {
//     var a = 7;

//     // function y() {
//     //     console.log(a);
//     // }

//     // return y;
//     return function y() {
//         console.log(a);
//     }
// }

// var z = x();
// console.log(z);
// // ..........
// z(); // 7

// Ex-7
// function x() {
//     var a = 7;

//     function y() {
//         console.log(a);
//     }

//     a = 100;

//     return y;
// }

// var z = x();
// console.log(z);
// // ..........
// z(); // 100

// Ex-8
function z() {
    var b = 900;

    function x() {
        var a = 7;

        function y() {
            console.log(a, b);
        }

        y();
    }

    x();
}

z(); // 7 900