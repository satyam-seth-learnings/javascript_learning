// Ex-1 What is async function
// // always returns a promise
// async function getData() {
//     return "Namaste";
// }

// const dataPromise = getData();
// console.log(dataPromise);

// dataPromise.then((res) => console.log(res));


// Ex-2 What is async function
// // always returns a promise
// const p = new Promise((resolve, reject) => {
//     resolve("Promise Resolve Value!!");
// });

// async function getData() {
//     return p;
// }

// const dataPromise = getData();
// console.log(dataPromise);

// dataPromise.then((res) => console.log(res));

// Ex-3 Handle promises without using async and await
// const p = new Promise((resolve, reject) => {
//     resolve("Promise Resolve Value!!");
// });


// function getData() {
//     p.then((res) => console.log(res));
// }

// getData();

// Ex-4 Handle promises using async and await
// const p = new Promise((resolve, reject) => {
//     resolve("Promise Resolve Value!!");
// });


// // await can only be used inside an async function
// async function handlePromise() {
//     const val = await p;
//     console.log(val);
// }

// handlePromise();

// Ex-5 then vs async await
// const p = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("Promise Resolve Value!!");
//     }, 10000);
// });

// // using async await
// async function handlePromise() {
//     console.log("Hello World!!");
//     // JS Engine will wait for promise to be resolved
//     const val = await p;
//     console.log("Namaste JavaScript");
//     console.log(val);
// }

// // Hello World!!
// // Namaste JavaScript
// // Promise Resolve Value!!
// handlePromise();

// // using then
// // function getData() {
// //     // JS Engine will not wait for promise to be resolved
// //     p.then((res) => console.log(res));
// //     console.log("Namaste JavaScript");
// // }

// // getData();
// // Namaste JavaScript
// // Promise Resolve Value!!

// Ex-6 Diving deep into async await
// const p = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("Promise Resolve Value!!");
//     }, 10000);
// });

// // using async await
// async function handlePromise() {
//     console.log("Hello World!!");
//     // JS Engine will wait for promise to be resolved
//     const val1 = await p;
//     console.log("Namaste JavaScript 1");
//     console.log(val1);

//     const val2 = await p;
//     console.log("Namaste JavaScript 2");
//     console.log(val2);
// }

// // Hello World!!
// // ------------ after 5 sec all 4 logs printed
// // Namaste JavaScript 1
// // Promise Resolve Value!!
// // Namaste JavaScript 2
// // Promise Resolve Value!!
// handlePromise();

// Ex-7 Diving deep into async await
// const p1 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("Promise Resolve Value 1 !!");
//     }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("Promise Resolve Value 2 !!");
//     }, 5000);
// });


// // using async await
// async function handlePromise() {
//     console.log("Hello World!!");
//     // JS Engine will wait for promise to be resolved
//     const val1 = await p1;
//     console.log("Namaste JavaScript 1");
//     console.log(val1);

//     const val2 = await p2;
//     console.log("Namaste JavaScript 2");
//     console.log(val2);
// }

// // Hello World!!
// // ------------after 5 sec all 4 logs printed
// // Namaste JavaScript 1
// // Promise Resolve Value 1 !!
// // Namaste JavaScript 2
// // Promise Resolve Value 2 !!
// handlePromise();

// Ex-8 Diving deep into async await
// const p1 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("Promise Resolve Value 1 !!");
//     }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("Promise Resolve Value 2 !!");
//     }, 10000);
// });


// // using async await
// async function handlePromise() {
//     console.log("Hello World!!");
//     // JS Engine will wait for promise to be resolved
//     const val1 = await p1;
//     console.log("Namaste JavaScript 1");
//     console.log(val1);

//     const val2 = await p2;
//     console.log("Namaste JavaScript 2");
//     console.log(val2);
// }

// // Hello World!!
// // ------------after 5 sec all 4 logs printed
// // Namaste JavaScript 1
// // Promise Resolve Value 1 !!
// // ------------after 10 sec all 4 logs printed
// // Namaste JavaScript 2
// // Promise Resolve Value 1 !!
// handlePromise();

// Ex-9 Real World example
// const API_URL = "https://api.github.com/users/satyam-seth";

// async function handlePromise() {
//     const data = await fetch(API_URL);

//     const jsonValue = await data.json();

//     // fetch().then(res => res.json()).then(res => console.log())

//     console.log(jsonValue);
// }

// handlePromise();

// Ex-10 Handling error
// // const API_URL = "https://api.github.com/users/satyam-seth";
// const API_URL = "https://abcdefghijklmnopqrstuv.wxyz";

// async function handlePromise() {
//     try {
//         const data = await fetch(API_URL);
//         const jsonValue = await data.json();

//         console.log(jsonValue);
//     } catch (err) {
//         console.log(err);
//     }
// }

// handlePromise();

// Ex-11
// const API_URL = "https://api.github.com/users/satyam-seth";
const API_URL = "https://abcdefghijklmnopqrstuv.wxyz";

async function handlePromise() {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);

}

handlePromise().catch((err) => console.log(err));