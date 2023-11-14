document.querySelector("#category").addEventListener('click', (e) => {
    console.log("Category Parent Clicked");
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);

    // window.location.href = "/" + e.target.id;

    if (e.target.tagName === "LI") {
        window.location.href = "/" + e.target.id;
    }
});

document.querySelector("#form").addEventListener('keyup', (e) => {

    if (e.target.dataset.uppercase !== undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
});

