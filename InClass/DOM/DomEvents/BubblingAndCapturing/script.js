

// grandparent


console.log("hello vishal ")

const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");


// console.dir(grandParent);
// console.dir(parent);
// console.dir(child);



// -------- Capturing -------------- (this is not used most of the times )

// grandParent.addEventListener("click", () => {
//     console.log("grandparent clicked")
// }, true)


// parent.addEventListener("click", () => {
//     console.log("parent clicked")

// }, true)



// child.addEventListener("click", () => {

//     console.log("child Clicked") 
// }, true)




// ---------  Bubbling  -------- (This by default this is used.... )
grandParent.addEventListener("click", abc, false)


// parent.addEventListener("click", (event) => {
//     console.log("parent clicked", event)

// }, false)

function abc(abc) {
    console.log("grandparent clicked", event)
    
    
    // this callback function will be attaced to the element 

    console.dir(grandParent)
}





child.addEventListener("click", (event) => {

    console.log("child Clicked", event) 
}, false)



// DOM -> Traverse -> Changes -> String Name 

// DOM traversal is VVV consly 

// //  Parent node 


// React Virtual DOM VS REAL Dom 


console.dir(grandParent);
console.dir(parent);
console.dir(child);




// Painting and resizing 