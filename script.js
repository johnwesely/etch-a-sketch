let selectedSideLength = document.querySelector("#side-length").value;
populateGrid(selectedSideLength);

let pixels;
let pixelListeners = [];

initEventListeners();

const button = document.querySelector("#restart");
console.log(button);
const buttonListener = button.addEventListener("click", () => {
        console.log("button click");
        resetGameBoard()
    });

console.log(buttonListener);


function populateGrid(gridSideLength) {
    const parent = document.querySelector("#grid-container");
    const childDimensions = `height: ${100 / gridSideLength}%; width: ${100 / gridSideLength}%;`

    for (let i = 0; i < gridSideLength * gridSideLength; ++i) {
        const child = document.createElement("div");
        child.classList.add("pixel");
        child.setAttribute("style", childDimensions);
        parent.appendChild(child);
    }
}

function darkenPixel(selectedPixel) {
    selectedPixel.style.backgroundColor = "rgb(78, 88, 75)";
}

function initEventListeners() {
    pixels = document.querySelectorAll(".pixel");
    let i = 0;
    pixels.forEach((selectedPixel) => {
        pixelListeners[i++] = selectedPixel.addEventListener("mouseover", () => {
            darkenPixel(selectedPixel);
        });
    });
}

function resetGameBoard() {
    deleteAllChildren(document.querySelector("#grid-container"));
    selectedSideLength = document.querySelector("#side-length").value;
    console.log(selectedSideLength);
    populateGrid(selectedSideLength);
    initEventListeners();
}

function deleteAllChildren(parentElement) {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}