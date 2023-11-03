// Ex-1 What is a Callback Function in JavaScript
// setTimeout(function () {
//     console.log("timer");
// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }

// x(function y() {
//     console.log("y");
// });

// Ex-2 Event Listeners
// document.getElementById("clickMe").addEventListener('click', function xyz() {
//     console.log("Button Clicked");
// });

// Ex-3 Print no of time button clicked
// // var count = 0;
// let count = 0;
// document.getElementById("clickMe").addEventListener('click', function xyz() {
//     console.log("Button Clicked", ++count);
// });

// Ex-4 Closures along with Event Listeners
function attachEventListeners() {
    let count = 0;

    document.getElementById("clickMe").addEventListener('click', function xyz() {
        console.log("Button Clicked", ++count);
    });
}

attachEventListeners();