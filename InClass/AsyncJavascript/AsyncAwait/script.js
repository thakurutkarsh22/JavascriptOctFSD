// Async Await 

// Await -> it looks like that the JS executor waits for the completion of the line.

// function which is using async keyword 


// async function returns a promise.


// function abc() {
//     return 1; 
// }

// const abcResult = abc()
// console.log(abcResult, "abc result")

// //  who's promise is this ? 
// async function fun() {
//     // await fetch("asdasdasdasd")

//     return 1978
// }

// const funPromise = fun();

// funPromise.then(data => {
//     console.log("fun promise data", data)
// })
// console.log(funResult, "fun result ");




/*
    Implement Kanyes quote with async wait 
*/


async function fetchQuotes() {
    try {
        const response = await fetch("https://api.kanye.rest/")
        console.log(response)
        const data = await response.json()
        console.log(data); 
    
        const {quote} = data;
        console.log(quote)
    
        addTotheDom(quote)
    } catch (error) {
        // handle

        // resoponse error handling 


        // data error handling 


        // adding to the dom error handling 

        // 
    }

}

function addTotheDom(quote) {
    const h1Element = document.createElement("h1");
    h1Element.innerText = quote;

    const body = document.body;
    body.appendChild(h1Element)
}


fetchQuotes()






// fetch 


fetch()


