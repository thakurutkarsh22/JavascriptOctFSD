// 1. Select 

const container = document.getElementById("container");

// TODO :
window.addEventListener("resize", () => {
    console.log("resized")
    alert("asdas")
})

container.addEventListener("click", (event) => {
    console.log("------ event object -------")
    console.dir(event)

    const buttonContainer = event.target
    console.dir(buttonContainer)


    buttonContainer.style.color = "red"


    // its talks about the Event type,
    //  it talks about from where the event was initiated ....
});




// 1. Event Bubbling ........ 




// 2. Event Capturing ...... 