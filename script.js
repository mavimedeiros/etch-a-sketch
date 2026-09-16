const container = document.querySelector("#container");
const display = document.querySelector(".display");

// should initialize with a 16x16.
// Creates N amount of squares on the display.
function sketch(numOfSquares) {
    for (i=0; i < numOfSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        display.appendChild(square);
    }
}

// Should initialize with a 16x16.
function calcTotalNumOfSquares(num) {
    const total = num*num;
    return total;
}

const totalNumOfSquares = calcTotalNumOfSquares(16);
console.log("total: ", totalNumOfSquares);
sketch(totalNumOfSquares);

// Choose between these 2 options.
// when i click sizeBtn gives me options to 32x32 and 64x64
// when i click sizeBtn it asks me to choose a size from 16 to 100 integer.

// Mouse Hover effect
display.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "black";
}, 500);

