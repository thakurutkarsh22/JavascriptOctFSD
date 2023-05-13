// Selectors

const idInputElement = document.getElementById("wall_id");
const colorInputElement = document.getElementById("wall_color");
const applyBtn = document.getElementById("apply-btn");
const resetBtn = document.getElementById("reset-btn");

// get all the walls 

const wallsList = document.querySelectorAll(".block");


// Event LIstners

applyBtn.addEventListener("click", () => {
    const id = idInputElement.value;
    const color = colorInputElement.value;
    console.log("clicked")

    // logic  of filling 
    applyColor(id, color);

    // logic of reseeting the input box 
    resetInput(idInputElement)
    resetInput(colorInputElement)
})

resetBtn.addEventListener("click", (event) => {
    const wallListArr = Array.from(wallsList);

    wallListArr.forEach(wall => wall.style.backgroundColor = "transparent")

// logic of reseeting the input box 
    resetInput(idInputElement)
    resetInput(colorInputElement)
})


// Functions

function applyColor(id, color) {
    const wallElement = document.getElementById(id)
    wallElement.style.backgroundColor = color;
}

function resetInput(inputElement) {
    inputElement.value = ""
}