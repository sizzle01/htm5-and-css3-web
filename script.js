// function expression to select elements
const selectElement = (s) => document.querySelector(s);

//open menu on click
selectElement((s: ".open")).addEventListener("click", () => {
    selectElement((s: ".nav-list")).classList.add("active");
});

//close menu on click

selectElement((s: ".close")).addEventListener("click", () => {
    selectElement((s: ".nav-list")).classList.remove("active");
});