populateGrid(100);

const pixels = document.querySelectorAll(".pixel");
const pixelListeners = [];

initEventListeners();

console.log(pixels);


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
    selectedPixel.style.backgroundColor = "black";
}

function initEventListeners() {
    let i = 0;
    pixels.forEach((selectedPixel) => {
        pixelListeners[i++] = selectedPixel.addEventListener("mouseover", () => {
            darkenPixel(selectedPixel);
        });
    });
}