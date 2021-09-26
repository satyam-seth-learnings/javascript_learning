// Default Export Class
// Example-1
// export default class Nokia{
//     volumeUp(){
//         console.log("High Volume");
//     }
// }

// Example-2
// class Nokia{
//     volumeUp(){
//         console.log("High Volume");
//     }
// }
// export default Nokia;

// Default Export Function
// Example-3
// export default function show(){
//     console.log("Hello Module");
// }

// Example-4
// function show(){
//     console.log("Hello Module");
// }
// export default show();

// Default Export Variable
// Example-5
// const a=10;
// export default a;

// Named Export Class
// Example-6
// export class Nokia{
//     volumeUp(){
//         console.log("High Volume");
//     }
// }

// Example-7
// class Nokia{
//     volumeUp(){
//         console.log("High Volume");
//     }
// }
// export {Nokia};

// Named Export Function
// Example-8
// export function show(){
//     console.log("Hello Module");
// }

// Example-9
// function show(){
//     console.log("Hello Module");
// }
// export {show};

// Named Export Variable
// Example-10
// const a=10;
// export {a};

// Named Export
// Example-11
// class Nokia{
//     volumeUp(){
//         console.log("High Volume");
//     }
// }

// function show(){
//     console.log("Hello Module");
// }

// export const a=10;

// export {Nokia,show};

// Default and Named Export
// Example-12
class Nokia{
    volumeUp(){
        console.log("High Volume");
    }
}

function show(){
    console.log("Hello Module");
}

export const a=10;
export default Nokia;
export {show};