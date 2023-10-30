// Ex-1
// function x() {
//     var i = 1;

//     setTimeout(function () {
//         console.log(i);
//     }, 3000);

//     console.log("Namaste JavaScript");
// }

// x();
// // Namaste JavaScript
// // after 3sec 1

// Ex-2
// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }

//     console.log("Namaste JavaScript");
// }

// x();
// // Namaste JavaScript
// // 6
// // 6
// // 6
// // 6
// // 6

// Ex-3
// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }

//     console.log("Namaste JavaScript");
// }

// x();
// // Namaste JavaScript
// // 1
// // 2
// // 3
// // 4
// // 5

// Ex-4
function x() {
    for (let i = 1; i <= 5; i++) {

        function close(x) {
            setTimeout(function () {
                console.log(i);
            }, x * 1000);
        }

        close(i);
    }

    console.log("Namaste JavaScript");
}

x();
// Namaste JavaScript
// 1
// 2
// 3
// 4
// 5
