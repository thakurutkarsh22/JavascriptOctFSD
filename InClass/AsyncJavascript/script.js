// console.log("Hello utkarsh")

// console.log("hello")

// setTimeout( () => {
//     console.log("utkarsh")
// }, 5000)

// console.log("bye");

// alert("hey utkarsh")

// console.log("Hey there");

// Settimeout says I am going to wait for x seconds then i am going to 
// execute your function (callbackFunction)
// setTimeout( () => {
//     alert("hey utkarsh after 5 seconds")
// }, 5000)


// Behaviour ...... 

// EVENT LOOP -> Algo 
// THis algo of event loops bascially runs again n again 
// for ex 1000 times/ second
/*
    1. to ask if task queue has anything
        NO ->  do nothing 
        YES -> 

        1. Ask Question to stack are you EMPTY 
            NO -> do nothing 
            YES -> 

            1. Pop the 1st task from MACRO-TASK QUEUE
            2. Put the task inside the stack.
*/

// Question -> 

// console.log("a");

// setTimeout(() => {
//     console.log("c")
// }, 4000)


// console.log("b")
// 10 millioin lines -> 10seconds execute 


// THe above question will get c after 10 seconds 
// reason: setTimeout is saying 4 seconds which is Guranteed min time 
// after which you will get c but the max time depends the MAIN THREAD (Stack is empty)


//  ----- MULTIPLE SET TIMEOUTS ---------


console.log("start")

setTimeout(() => {
    console.log("c");
}, 8000)


setTimeout(() => {
    console.log("b")
}, 4000)




console.log("end")