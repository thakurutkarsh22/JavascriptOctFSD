const myFetch = new Promise((resolve, reject) => {

    // 1 calling the server 
//    const data =  XMLHttpRequest()

    try {
        const data = {status: 500, url: "asdasdas", 
        data: {
            name: "utkarsh",
            address: "streets",
            rollNumber: 40,
        }}

        // 2. judges the data.... 
        if(data.status === 200) {
            // good 
            resolve(data)
        } else if (data.status === 500) {
            // error 
            reject({errorCode: 500, message: "hey the server is down"})
        }
    } catch (error) {
        reject("asdasdasdasdas")
    }



});


// fetch("asdasda").then

myFetch.then(data => {
    console.log("hey there data");
    console.log(data)
})


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