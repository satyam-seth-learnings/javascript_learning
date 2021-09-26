// Default Import Class
// import Nokia from "./mobile.js";
// Example-1,2
// const n=new Nokia();
// n.volumeUp();

// Default Import Function
// import show from "./mobile.js";
// Example-3,4
// show();

// Default Import Variable
// Example-5
// import a from "./mobile.js";
// console.log(a);

// Named Import Class
// Example-6,7
// import { Nokia } from "./mobile.js";
// const n=new Nokia();
// n.volumeUp();

// Named Import Function
// import {show} from "./mobile.js";
// Example-8,9
// show();

// Named Import Variable
// Example-10
// import {a} from "./mobile.js";
// console.log(a);

// Named Import
// Example-11
// // import { Nokia,show,a} from "./mobile.js";
// // const n=new Nokia();
// // n.volumeUp();
// // show();
// // console.log(a);

// import * as device from "./mobile.js";
// const n=new device.Nokia();
// n.volumeUp();
// device.show();
// console.log(device.a);

// Default and Named Import
// Example-12
import Nokia,{show,a} from "./mobile.js";
const n=new Nokia();
n.volumeUp();
show();
console.log(a);