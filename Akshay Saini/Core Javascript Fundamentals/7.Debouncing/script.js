// Debouncing
let counter = 0;

const getData = () => {
    // calls an API and gets Data
    console.log("Fetching Data ..", counter++);
}

const doSomeMagic = function (fn, d) {
    let timer;

    return function () {
        clearTimeout(timer);
        timer = setTimeout(fn, d);
    }
}

// const betterFunction = getData;
const betterFunction = doSomeMagic(getData, 300);