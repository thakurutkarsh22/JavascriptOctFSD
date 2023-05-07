
//  ------- WAY 1 -> Naive Way ---------


// 1. Select all the element (red, green and blue box)

// const green = document.getElementById("green")
// const red = document.getElementById("red")
// const blue = document.getElementById("blue")


// 2. Add event listners to those (Click event )

// green.addEventListener("click", (event) => {
//     console.log("event", event)
//     const targetElement = event.target;
//     targetElement.style.backgroundColor = "green"
// });

// red.addEventListener("click", (event) => {
//     console.log("event", event)
//     const targetElement = event.target;
//     targetElement.style.backgroundColor = "red"
// });

// blue.addEventListener("click", (event) => {
//     console.log("event", event)
//     const targetElement = event.target;
//     targetElement.style.backgroundColor = "blue"
// });


// 3. in EVENT handler you can get the target and change the color or background color. 



// WAY 2 -> EVENT DELEGATION way 

// 1. Select the parent

const parent = document.getElementById("parent");

parent.addEventListener("click", (event) => {
    console.log("parent clicked")
    console.dir(event)

    const elementBox = event.target; // red // green // blue 

    const id = elementBox.id;

    console.log("id", id)


    elementBox.style.backgroundColor = id

}); // Bubbling (By default )





