

// grandparent


console.log("hello vishal ")

const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");


// console.dir(grandParent);
// console.dir(parent);
// console.dir(child);



// -------- Capturing -------------- (this is not used most of the times )

// grandParent.addEventListener("click", (event) => {
//     console.log("grandparent clicked")

//     event.stopPropagation();

// }, true)

// grandParent.addEventListener("dragover", ())


// parent.addEventListener("click", () => {
//     console.log("parent clicked")

// }, true)



// child.addEventListener("click", () => {

//     console.log("child Clicked") 
// }, true)





// ---------  Bubbling  -------- (This by default this is used.... )
// grandParent.addEventListener("click", abc, false)


// parent.addEventListener("click", (event) => {
//     console.log("parent clicked")

// }, false)

// function abc(abc) {
//     console.log("grandparent clicked")
//     // this callback function will be attaced to the element 

//     console.dir(grandParent)
// }



// child.addEventListener("click", (event) => {

//     console.log("child Clicked") 
//     event.stopPropagation();
// }, false)



//  HOW TO STOP the EVENT  -> event.stopPropogation();


// -> THis will stop the event object there only (on that element), that 
// event propogation will be FREZED. 



// addEventListner is basically adding an object in the memory 
// more you add this Listner more memory it is going to take.






//  -------- Removal of Listner (removeEventListener) -------------

const button = document.getElementById("button");

button.addEventListener("click", buttonClickHandler)


function buttonClickHandler(event) {
    console.log("click me ")


}


// after 5 seconds ecexute this code
// setTimeout(() => {
    
    
//     button.removeEventListener("click", buttonClickHandler)



// }, 5000)




document.addEventListener("unload", () => {
    button.removeEventListener("click", buttonClickHandler)
})





