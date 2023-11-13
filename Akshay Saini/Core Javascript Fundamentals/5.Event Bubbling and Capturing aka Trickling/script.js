// Ex-1 bubbling
// document.getElementById("grand-parent").addEventListener('click', () => {
//     console.log("Grand Parent Clicked!")
//     // });
// }, false);

// document.getElementById("parent").addEventListener('click', () => {
//     console.log("Parent Clicked!")
//     // });
// }, false);


// document.getElementById("child").addEventListener('click', () => {
//     console.log("Child Clicked!")
//     // });
// }, false);


// Ex-2 capturing
// document.getElementById("grand-parent").addEventListener('click', () => {
//     console.log("Grand Parent Clicked!")
// }, true);

// document.getElementById("parent").addEventListener('click', () => {
//     console.log("Parent Clicked!")
// }, true);

// document.getElementById("child").addEventListener('click', () => {
//     console.log("Child Clicked!")
// }, true);


// Ex-3 bubbling and capturing mix
// document.getElementById("grand-parent").addEventListener('click', () => {
//     console.log("Grand Parent Clicked!")
// }, true); // capturing

// document.getElementById("parent").addEventListener('click', () => {
//     console.log("Parent Clicked!")
// }, false); // bubbling

// document.getElementById("child").addEventListener('click', () => {
//     console.log("Child Clicked!")
// }, true); // capturing


// Ex-4 bubbling and capturing mix
// document.getElementById("grand-parent").addEventListener('click', () => {
//     console.log("Grand Parent Clicked!")
// }, true); // capturing

// document.getElementById("parent").addEventListener('click', () => {
//     console.log("Parent Clicked!")
// }, false); // bubbling

// document.getElementById("child").addEventListener('click', () => {
//     console.log("Child Clicked!")
// }, false); // bubbling


// Ex-5 stop propagation
// document.getElementById("grand-parent").addEventListener('click', () => {
//     console.log("Grand Parent Clicked!")
// }, false);

// document.getElementById("parent").addEventListener('click', (e) => {
//     console.log("Parent Clicked!")
//     // e.stopPropagation();
// }, false);

// document.getElementById("child").addEventListener('click', (e) => {
//     console.log("Child Clicked!")
//     e.stopPropagation();
// }, false);


// Ex-6 stop propagation
document.getElementById("grand-parent").addEventListener('click', (e) => {
    console.log("Grand Parent Clicked!")
    // e.stopPropagation();
}, true);

document.getElementById("parent").addEventListener('click', () => {
    console.log("Parent Clicked!")
}, true);

document.getElementById("child").addEventListener('click', (e) => {
    console.log("Child Clicked!")
    // e.stopPropagation();
}, true);