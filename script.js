const container = document.querySelector("#container");
const display = document.querySelector(".display");


// element.querySelectorAll(selectors) - returns a “NodeList” containing 
// references to all of the matches of the selectors.

// create a function that loops an amount of times and creates a n amount of divs.
// use "element.querySelectorAll(selectors)" to append all elements as child divs of display.
// const grid = document.querySelectorAll(".square");

// should initialize with a 16x16.

function sketch(numOfSquares) {
    for (i=0; i < numOfSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        // square.textContent = "DIV";
        // without content the div doesn't show, should specify a width and height.
        // use calc CSS property?
        // calculate elements .square height and width based on display height and width;
        // calc total width of display in pixels /  numOfSquares.
        // calc total height of display in pixels / numOfSquares

        display.appendChild(square);
    }
}

// should initialize with a 16x16.
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


// mouse Hover effect
display.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "black";
}, 500);

