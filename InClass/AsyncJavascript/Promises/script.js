// Promise represents a future value, which right now you do not know, but it is assured that
// will get the value in future.. 


// FETCH api to call the server... 


console.log("hello ")

// const promiseOfQuote = 
//     fetch('https://api.kanye.rest/')
//         .then(responseObj => console.log(responseObj))

const promiseOfQuote = 
    fetch('https://api.kanye.rest12/').the // 10 sec 1 min 12 min resposne ? 
        .then(responseObj => {
            // something 
            console.log(responseObj.status, " this is the status ")
            return responseObj.json() //1 sec // line changes theresponseObj to Real data. 
        })
        .then(data => {
            //  operations here ... 
            const quote = data.quote;
            // 1. create an element, edit that element
            const h1Element = document.createElement('h1');
            h1Element.innerText = quote;
            // 2. Push that element inside the DOm tree. 

            const body = document.body;
            body.appendChild(h1Element)

            console.log(data, "real data")
        }).catch(error => {
            // handle that error 
            // new beautiful page and i wl add it to the body 
            console.log('Error is here')
            console.log(error)
        })

console.log(promiseOfQuote)


console.log("bye")


/* Question : take the quote and push it inside the dom(body).

*/
