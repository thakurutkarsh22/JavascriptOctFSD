

// FORMS 

// 1. Select the element 

const nameInputElement = document.getElementById("name");
const nameAgainInputElement = document.getElementById("nameAgain");
console.dir(nameAgainInputElement)

let name = ""

// this event will only capture the character and not the Backspace not the alt button 

// the implementation keypress is different in different browsers.



//  Key Press Event 

// nameInputElement.addEventListener("keypress", (event) => {
//     console.log("button clicked")
//     // console.log(event)
//     // let key = event.key;
//     // console.log(key)
// })



// Keydown 

// nameInputElement.addEventListener("keydown", (event) => {
//     console.log("button clicked")
//     console.log(event)
//     // let key = event.key;
//     // console.log(key)
// })


//  KeyUp Event -> not used predominantly (throttling)

// nameInputElement.addEventListener("keyup", (event) => {
//     console.log("key up events")
//     // console.log(event)
//     // let key = event.key;
//     // console.log(key)
// })


//  Copy, Paste -> Event 

// nameInputElement.addEventListener("copy", (event) => {
//     console.log("cpoying !!!!")
//     event.preventDefault();
// })


// nameAgainInputElement.addEventListener("paste", (event) => {
//     console.log("pasting !!!!")
//     event.preventDefault();
// })


// FOCUS ->  FOcus is basically blue outline on the element.

// nameInputElement.addEventListener("focus", (event) => {
//     console.log("Hey there i m focused ")
//     console.dir(event)
//     event.target.value = ""
// })


// blur -> Opposite to Focus 


// nameAgainInputElement.addEventListener("blur", (event) => {
//     console.log("blur!!!!")
//     // console.log(event);
//     const value = event.target.value;
//     console.log("value debug", value);

//     if(!/^[a-zA-Z]/.test(value)) {
//         console.log("error here")
//     }

// })




// FORMS event --------


const formElement = document.getElementById("forms");


const nameElement = formElement.elements["name"];
console.log("name Element")

console.dir(nameElement)

const nameAgainElement = formElement.elements["nameAgain"]
console.log("name again element")
console.dir(nameAgainElement)




formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit ")

    const name = nameElement.value;
    const nameAgain = nameAgainElement.value;

    console.log("submitting a name -------", name, nameAgain)
})




