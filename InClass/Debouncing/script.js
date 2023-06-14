const inputBox = document.getElementById("input");
console.log(inputBox);

const searchCallbackFunction = (e) => {
    // console.log("event ", e)
    const value = e.target.value;
    // api call 

    console.log(value, "value api call");
}

// inputBox.addEventListener("input", searchCallbackFunction)






// Debounce function ..... callbackFunction, delay 


function myDebounce( callback, delay ) {
    let timerNumber;
    return function() {
        const event = arguments[0];       
        
        clearTimeout(timerNumber)

        timerNumber = setTimeout(() => {
            // i shoud 
            callback(event)
        }, delay)
    }
}

const debouncedSearchCallbackFunction 
= myDebounce(searchCallbackFunction, 300)


inputBox.addEventListener("input", debouncedSearchCallbackFunction)
