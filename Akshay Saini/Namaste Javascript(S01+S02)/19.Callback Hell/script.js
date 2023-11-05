// Ex-1
// // console.log("Namaste");
// // console.log("JavaScript");
// // console.log("Season 2");


// console.log("Namaste");

// // With for 5 seconds
// setTimeout(function () {
//     console.log("JavaScript");
// }, 5000);

// console.log("Season 2");

// Ex-2 Callback Hell
const cart = ["shoes", "pants", "kurta"];

// cart -> createOrder -> proceedToPay -> showOrderSummary -> updateWallet
api.createOrder(cart, function () {

    api.proceedToPayment(function () {

        api.showOrderSummary(

            function () {
                api.updateWallet();
            }
        );
    });
});
