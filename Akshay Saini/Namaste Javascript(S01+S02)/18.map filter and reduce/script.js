// Ex-1 map
// const arr = [5, 1, 3, 2, 6];

// // Double - [10, 2, 6, 4 12]
// function double(x) {
//     return x * 2;
// }

// const output1 = arr.map(double);
// console.log(output1);

// // Triple - [15, 3, 9, 6, 18]
// function triple(x) {
//     return x * 3;
// }

// const output2 = arr.map(triple);
// console.log(output2);

// // Binary - ["101", "1",  "11", "10", "110"]
// function binary(x) {
//     return x.toString(2);
// }

// // const output3 = arr.map(binary);

// // const output3 = arr.map(function (x) {
// //     return x.toString(2);
// // });

// const output3 = arr.map((x) => x.toString(2));

// console.log(output3);

// Ex-2 filter
// const arr = [5, 1, 3, 2, 6];

// // filter odd values
// function isOdd(x) {
//     return x % 2;
// }

// const output1 = arr.filter(isOdd);
// console.log(output1);

// // filter even values
// function isEven(x) {
//     return x % 2 === 0;
// }

// const output2 = arr.filter(isEven);
// console.log(output2);

// // filter grater than 4 values
// function isGraterThan4(x) {
//     return x > 4;
// }

// // const output3 = arr.filter(isGraterThan4);

// // const output3 = arr.filter(function isGraterThan4(x) {
// //     return x > 4;
// // });

// const output3 = arr.filter(x => x > 4);


// console.log(output3);

// Ex-3 reduce
// const arr = [5, 1, 3, 2, 6];

// // sum
// function findSum(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }

//     return sum;
// }

// console.log(findSum(arr));

// const output1 = arr.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// })

// console.log(output1);

// // max

// function findMax(arr) {
//     let max = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return max;
// }

// console.log(findMax(arr));

// const output2 = arr.reduce(function (max, curr) {
//     if (curr > max) {
//         max = curr;
//     }

//     return max;
// }, 0)

// console.log(output2);

// Ex-4 tricky map
// const users = [
//     { firstName: "akshayl", lastName: "saini", age: 26 },
//     { firstName: "donald", lastName: "trump", age: 75 },
//     { firstName: "elon", lastName: "musk", age: 50 },
//     { firstName: "deepika", lastName: "padukone", age: 26 }
// ]

// // list of full name of all users
// // ['akshayl saini', 'donald trump', 'elon musk', 'deepika padukone']
// const output = users.map(x => x.firstName + " " + x.lastName);
// console.log(output);

// Ex-4 tricky reduce
const users = [
    { firstName: "akshayl", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 }
]

// {26: 2, 50: 1, 75: 1}
const output1 = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }

    return acc;
}, {});

console.log(output1);

// user firstName of all the people who's age is less than 30
const output2 = users.filter(x => x < 30).map(x => x.firstName);
console.log(output2);

// H.W.
const output3 = users.reduce(function (acc, curr) {
    if (curr.age < 30) {
        acc.push(curr.firstName);
    }

    return acc;
}, []);

console.log(output3);