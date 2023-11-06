// Ex-1 Callbacks vs Promises
// const cart = ["shoes", "pants", "kurta"];

// // without promise - inversion of control
// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId);
// });

// // with promise
// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });

// Ex-2 Deep dive into Promise states
// const GITHUB_API = "https://api.github.com/users/satyam-seth";

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function (data) {
//     console.log(data);
// })

// Ex-3 Promise Chaining
// without promise
// cart -> createOrder -> proceedToPay -> showOrderSummary -> updateWalletBalance
api.createOrder(cart, function () {

    api.proceedToPayment(function () {

        api.showOrderSummary(

            function () {
                api.updateWalletBalance();
            }
        );
    });
});

// with promise
// api.createOrder(cart)
//     .then(function (orderId) {
//         return api.proceedToPayment(orderId);
//     })
//     .then(function (paymentInfo) {
//         return api.showOrderSummary(paymentInfo);
//     })
//     .then(function (paymentInfo) {
//         return api.updateWalletBalance(paymentInfo);
//     });
api.createOrder(cart)
    .then(orderId => api.proceedToPayment(orderId))
    .then(paymentInfo => api.showOrderSummary(paymentInfo))
    .then(paymentInfo => api.updateWalletBalance(paymentInfo));
