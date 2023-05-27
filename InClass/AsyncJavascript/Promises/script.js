/*
    Why callbacks are not used 

    1. Pyramid of doom 
    2. Order of execution of inner callbacks is confusing (out of normal human recognizable pattern)


    // Oder of execution.....

// function googleCall('onbeading mails', (work) => {

//     console.log(1);
//     // 1 work ... 

//     function googleGetReplies('funcalasdkha', (playwithReplies) => {
//         // 2. replies 
//         console.log(3)
//     })

//     console.log(2);
//     googleGetReplies();

// } ) 
*/




// Promise represents a future value, which right now you do not know, but it is assured that
// will get the value in future.. 


// FETCH api to call the server... 


// console.log("hello ")

// const promiseOfQuote = 
//     fetch('https://api.kanye.rest/')
//         .then(responseObj => console.log(responseObj))

// const promiseOfQuote = 
//     fetch('https://api.kanye.rest/') // 10 sec 1 min 12 min resposne ? 
//         .then(responseObj => {
//             // something 
//             console.log(responseObj.status, " this is the status ")
//             return responseObj.json() //1 sec // line changes theresponseObj to Real data. 
//         })
//         .then(data => {
//             //  operations here ... 
//             const quote = data.quote;
//             // 1. create an element, edit that element
//             const h1Element = document.createElement('h1');
//             h1Element.innerText = quote;
//             // 2. Push that element inside the DOm tree. 

//             const body = document.body;
//             body.appendChild(h1Element)

//             console.log(data, "real data")
//         }).catch(error => {
//             // handle that error 
//             // new beautiful page and i wl add it to the body 
//             console.log('Error is here')
//             console.log(error)
//         })

// console.log(promiseOfQuote)


// console.log("bye")


/* Question : take the quote and push it inside the dom(body).

*/



/*
        Behind the scenes 

*/

// console.log("hello")
// fetch('https://api.kanye.reetfaks/')
//         .then(response => {
//             return response.json()
//         }).then(data => {
//             console.log("data")
//         }).catch(error=> {
//             console.log("erro")
//         })

// console.log("bye")


/* 
    Promise Chaining

*/


// console.log("hello")
// fetch('https://api.kanye.restasaSas/')
//         .then(response => {
//             // response handler 
//             // throw Error("aasdasdas")
//             return response.json()
//         }).then(data => {
//             // data handler 
//             console.log("data handler 0", data)

//             return "1 output"
//         }).then(data => {
//             // number 1 handler 
//             console.log("data handler 1", data)
//         }).then(data => {
//             // num 2 handler
//         }).then(data => {
//             // num3 handler 
//         }).catch(erro => {
//            console.log("errro block") 
//         }).finally(() => {
//             console.log("Https call is done  ")
//         })

// console.log("bye")



/*
    Error Handling 

    When you get an error in any level, the error Handling WILL ALWAYS BE BELOW THAT LEVEL 
*/

console.log("hello")
fetch('https://api.kanye.rest/')
        .then(response => {
            // response handler 
            throw Error("Error created by utkarsh ")
            return response.json()
        }, 
        (error) => {
            console.log("i am error handlor inside the then", error)


        }
        
        
        )
        .then(data => {
            // data handler 
            console.log("data handler 0", data)

            return "1 output"
        }).catch(erro => {
            console.log("error level 2", erro)

            return 10
        })
        .then(data => {
            // number 1 handler 
            console.log("data handler 1", data)
            return 1
        }).then(data => {
            // num 2 handler
            throw Error("error in down level")
            console.log("data handler 2", data)

        }).then(data => {
            // num3 handler 
        }).catch(erro => {
           console.log("errro block Level6", erro) 

           // code for handling response handler

        //    asdasda

            // code for data handler 


            // code for number 1 handler 
        })

console.log("bye")







