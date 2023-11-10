// Ex-1 Promise.all
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Success"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 Success"), 1000);
//     // setTimeout(() => reject("P2 Fail"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("P3 Success"), 2000);
//     setTimeout(() => reject("P3 Fail"), 2000);
// });

// Promise.all([p1, p2, p3])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// Ex-2 Promise.allSettled
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Success"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 Success"), 1000);
//     // setTimeout(() => reject("P2 Fail"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("P3 Success"), 2000);
//     setTimeout(() => reject("P3 Fail"), 2000);
// });

// Promise.allSettled([p1, p2, p3])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// Ex-3 Promise.race
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Success"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("P2 Success"), 1000);
//     setTimeout(() => resolve("P2 Success"), 5000);
//     // setTimeout(() => reject("P2 Fail"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("P3 Success"), 2000);
//     setTimeout(() => reject("P3 Fail"), 2000);
// });

// Promise.race([p1, p2, p3])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// Ex-3 Promise.any
const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P1 Success"), 3000);
    setTimeout(() => reject("P1 Fail"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 Success"), 5000);
    setTimeout(() => reject("P2 Fail"), 5000);
});

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P3 Success"), 2000);
    setTimeout(() => reject("P3 Fail"), 2000);
});

Promise.any([p1, p2, p3])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
        console.error(err.errors);
    });
