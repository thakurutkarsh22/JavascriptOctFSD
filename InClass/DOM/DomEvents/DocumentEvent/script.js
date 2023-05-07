
// 1. DOMContentLoaded -> It is the event which will be used when The DOM tree has bee fully created


document.addEventListener('DOMContentLoaded', () => {

    console.log("------------------ inside -------- ")
    const containerDiv = document.getElementById("container");

    console.dir(containerDiv);
})


console.log("----------  outside--------- ")

// const containerDiv = document.getElementById("container");

// console.dir(containerDiv);




// 2.  load -> When external resources are fully loaded (Images, CSS, etc)..

// -> resources .. 

// document.addEventListener("load", () => {
// hey image i want to play with you 
// })


// 3. beforeunload -> This event is basically called when a user is moving away from the web page.
// Cleaning purpose
// document.addEventListener("beforeunload", () => {
//     // cancel  all event lister, 
//     // cleaning 
//     // saving the form if accidental reload.. 


// }) 

// 4. unload
{/* <li> he they </li>


<li> he they </li>
<li> he they </li>
<li> he they </li>


MAC -> option 

Window -> alt  */}






