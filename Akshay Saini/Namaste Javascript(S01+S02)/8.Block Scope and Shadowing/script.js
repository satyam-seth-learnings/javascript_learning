// Ex-1
// {
//     // Compound Statement
//     var a = 10;
//     console.log(a);
// }

// Ex-2
// // if (true) // Uncaught SyntaxError: Unexpected end of input

// if (true) true;

// if {
//     // Compound Statement
//     var a = 10;
//     console.log(a);
// }

// Ex-3 Block Scope
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a); // 10
//     console.log(b); // 20
//     console.log(c); // 30
// }

// console.log(a); // 10
// console.log(b); // Uncaught ReferenceError: b is not defined
// console.log(c); // Same ReferenceError

// Ex-4 Shadowing
// var a = 100;
// let b = 200;
// const c = 300;

// console.log(a); // 100
// console.log(b); // 200
// console.log(c); // 300

// // {
// //     var a = 10;
// //     let b = 20;
// //     const c = 30;

// //     console.log(a); // 10
// //     console.log(b); // 20
// //     console.log(c); // 30
// // }

// function x() {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a); // 10
//     console.log(b); // 20
//     console.log(c); // 30
// }
// x();

// console.log(a); // 10
// console.log(b); // 200
// console.log(c); // 300

// Ex-5 Illegal Shadowing
// Identifier 'a' has already been declared
// let a = 10;

// {
//     var a = 10;
// }

// Ex-6 Block Scope follows Lexical Scope
const a = 20;
{
    const a = 100;
    {
        const a = 200;
        console.log(a); // 200
    }
    console.log(a); // 100
}
console.log(a); // 20