let numSquares = 6;
let colors;
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");

let modeButtons = document.querySelectorAll(".mode");


function setUpMode(){
    for (let i = 0; i < modeButtons.length; i++) {
        //mode buttons event listeners
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                //how many squares to show
                numSquares = 3;
            } else if (this.textContent === "Medium"){
                //how many squares to show
                numSquares = 6;
            }
            else{
                //how many squares to show
                numSquares = 9;
            }
            //update page to reflect pages
            reset();
        });
    }
}
function setUpSquares(){
    for (let i = 0; i < squares.length; i++) {
        //add initial colors to squares
        //add event listener for clickeds square
        squares[i].addEventListener("click", function () {
            // grab color of clicked square
            var clickedColor = squares[i].style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    }
    reset();
}
function reset() {
    colors = generateRandomColors(numSquares);
    //picked new a new random color
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    //change the colors of the squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"
        }
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue"
}
resetButton.addEventListener("click", function () {
    reset();
});

//loop through the colors
for (let i = 0; i < squares.length; i++) {
    //add event listener for clicked square
    squares[i].addEventListener("click", function () {
        // grab color of clicked square
        var clickedColor = squares[i].style.backgroundColor;
        console.log(clickedColor, pickedColor)
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!"
            resetButton.textContent = "Play again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    });
}
function changeColors(color) {
    //loop through all squares
    for (let i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}
function pickColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}
function generateRandomColors(num) {
    // make an empty array
    let arr = []
    //add num random colors to array
    for (let i = 0; i < num; i++) {
        //get random color
        arr.push(randomColor())
    }
    //return array
    return arr;
}
function randomColor() {
    //pick a red from 0-255
    let r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    let g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    let b = Math.floor(Math.random() * 256);
    "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}