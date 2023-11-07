// Ex-1 Creating a Promise and error handling
// const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart); // orderId
// console.log(promise);

// promise.then(function (orderId) {
//     console.log(orderId);
//     // proceedToPayment(orderId);
// }).catch(function (err) {
//     console.log(err.message);
// });

// /// Producer
// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         // CreateOrder
//         // validateCart
//         // orderId

//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }

//         // logic for createOrder
//         const orderId = "12345";
//         if (orderId) {
//             // resolve(orderId);

//             // fake delay
//             setTimeout(function () {
//                 resolve(orderId);
//             }, 5000);
//         }
//     });

//     return pr;
// }

// function validateCart(cart) {
//     // return true;
//     return false;
// }

// Ex-2 Promise chaining
// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart)
//     .then(function (orderId) {
//         console.log(orderId);
//         return orderId;
//     })
//     // .catch(function (err) {
//     //     console.log(err.message);
//     // })
//     .then(function (orderId) {
//         return proceedToPayment(orderId);
//     })
//     .then(function (paymentInfo) {
//         console.log(paymentInfo);
//     })
//     .catch(function (err) {
//         console.log(err.message);
//     });
// // .then(function () {
// //     console.log("No matter what happens, I will definitely be called.");
// // });

// /// Producer
// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         // CreateOrder
//         // validateCart
//         // orderId

//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }

//         // logic for createOrder
//         const orderId = "12345";
//         if (orderId) {
//             // resolve(orderId);

//             // fake delay
//             setTimeout(function () {
//                 resolve(orderId);
//             }, 5000);
//         }
//     });

//     return pr;
// }

// function proceedToPayment(orderId) {
//     return new Promise(function (resolve, reject) {
//         resolve("Payment Successful");
//     });
// }

// function validateCart(cart) {
//     return true;
//     // return false;
// }

// H.W.
const cart = ["shoes", "pants", "kurta"];

function validateCart(cart) {
    return true;
}

function isEnoughBalance() {
    return true;
}

function createOrder() {
    return new Promise((resolve, reject) => {
        if (!validateCart()) {
            reject("Cart is not valid!");
        }

        const orderId = "#E73464";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 1000);
        }
    });
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        if (!isEnoughBalance()) {
            reject('you do not have enough balance in your wallet for payment!');
        }

        setTimeout(() => {
            resolve(`payment for ${orderId}  has been done successful..`);
        }, 1000);
    });
}

function showOrderSummary(paymentStatus) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Your order summary is displayed here..');
        }, 1000);
    });
}

function updateWallet(orderSummary) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Your wallet balance has been updated..');
        }, 1000);
    });
}

createOrder(cart)
    .then((orderId) => {
        console.log('Your OrderId : ' + orderId);
        return orderId;
    })
    .then((orderId) => {
        return proceedToPayment(orderId);
    })
    .then((paymentStatus) => {
        console.log(paymentStatus);
        return showOrderSummary(paymentStatus);
    })
    .then((orderSummary) => {
        console.log(orderSummary);
        return updateWallet();
    })
    .then((walletUpdated) => {
        console.log(walletUpdated);
    })
    .catch((error) => {
        console.log(error);
    });