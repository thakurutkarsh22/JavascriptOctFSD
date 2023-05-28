// 1.  Constructor Method 

// const myFetch = new Promise((resolve, reject) => {

//     // 1 calling the server 
// //    const data =  XMLHttpRequest() // what 

//     try {
//         const data = {status: 500, url: "asdasdas", 
//         data: {
//             name: "utkarsh",
//             address: "streets",
//             rollNumber: 40,
//         }}

//         // 2. judges the data.... 
//         if(data.status === 200) {
//             // good 
//             resolve(data)
//         } else if (data.status === 500) {
//             // error 
//             reject({errorCode: 500, message: "hey the server is down"})
//         }
//     } catch (error) {
//         reject("asdasdasdasdas")
//     }



// });


// fetch("asdasda").then

// myFetch.then(data => {
//     console.log("hey there data");
//     console.log(data)
// })


// fetch ? 

// 1.  calling the server 
// 2. judging the data
    // 2.1 if data is good, OK, Not error, -> Success (data)
    // 2.2 if data is bad, not Ok, error, -> Error 



    /*
        Resolve: -> promise wants to change the status of promise Object (Old status: -> pending) to 
        Fulfilled.

        Same thing with reject it just change the status to Rejected 
    */




// 2. To use Async Keyword 

// function abc() {
//     return 1;
// }

// const result = abc();
// console.log(result, "result");

// async function getTheQuotes() {
//     return 100;
// }

// const result2 = getTheQuotes();
// console.log(result2, "promise Object")



// CONSUME A PROMISE 

// way 1 -> then block.
// result2.then(data => {
//     console.log("my marks", data)
// })

// way 2 -> await.. 
// const result3 = await getTheQuotes();
// console.log(result3, "result 3")





/*
    MicrotaskQueue vs Macro Task Queue ... 

    If MicroTask Queue HAs tasks then event Loop will not see the macroTask queue 
    until n unless the MicroTask Queue Finishes 100% (completly)

*/

// let promise = new Promise((res, rej) => {
//     res("asdasdadas");
// })


// console.log("hello") // 1


// setTimeout(() => {
//     console.log("hello world") //2
// }, 0)

// promise.then(data => console.log(data, "data")) //3

// console.log("Bye") // 4