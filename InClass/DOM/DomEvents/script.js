const container = document.getElementById("container");
console.dir(container);

// container.style.color = "red"
// container.style.border = "1px solid black"
// container.style.width = "100px"
// container.style.height = "60px"

// onclick -> Html 

container.addEventListener("click", (event) => {
    console.log("i am clicked")
})

// 1.  Event type, Target -> , 
// event.target -  ? 
// 3.  preventDefault();


// container.addEventListener("mouseover", () => {
//     console.log("i am hovered")
// })








//  2nd way to listen to the events ..... 

// function containerClick() {
//     console.log("containerClick")
// }





// // Keyboard events  ----- > 


// keyup  KeyDown .. 


// 1.  whenever you are writing (Typing on keyboard) there are 2 steps.
// -> travel of the key goes from top to bottom  -> keyDown
//  -> travel of the key goes from bottom to top. -> keyUp




// Mouse Events 

// https://www.w3schools.com/jsref/obj_mouseevent.asp









