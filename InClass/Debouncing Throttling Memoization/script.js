// const inputBox = document.getElementById("input");
// console.log(inputBox);

// const searchCallbackFunction = (e) => {
//     // console.log("event ", e)
//     const value = e.target.value;
//     // api call 

//     console.log(value, "value api call");
// }

// inputBox.addEventListener("input", searchCallbackFunction)






// Debounce function ..... callbackFunction, delay 


// function myDebounce( callback, delay ) {
//     let timerNumber;
//     return function() {
//         const event = arguments[0];       
        
//         clearTimeout(timerNumber)

//         timerNumber = setTimeout(() => {
//             // i shoud 
//             callback(event)
//         }, delay)
//     }
// }

// const debouncedSearchCallbackFunction 
// = myDebounce(searchCallbackFunction, 1000)


// inputBox.addEventListener("input", debouncedSearchCallbackFunction)





// throttling 

// const fireBullets = (event) => {

//     console.log("hello window");
// }

// function throttle( callback, delay ) {

//     let flag = true;

//     return function() {

//         const event = arguments[0]; 
        
//         if(flag) {
//             // callback.call(this, )//  we should do this , set the context as well 
            
//             callback(event)
//             flag = false;
//             setTimeout(() => {
//                 flag = true;
//             }, delay);
//         }

//     }
// }



// // window.addEventListener("resize", fireBullets); // event argument

// const throttleFireBullets = throttle(fireBullets, 3000);


// window.addEventListener("resize", throttleFireBullets); // better function // 1 argument event 




// Memoize 

function fibbo(n) {

    //  dp 

    if(n <= 1) {
        return 0
    }

    if( n === 2 || n === 3) {
        return 1;
    }

    return fibbo(n-1) + fibbo(n-2)

}

function memiozation( callback ) {
    
    let cacheMemory = {};

    return function() {
       const n = arguments[0]; 
    //    console.log(cacheMemory);
       if(cacheMemory[n]) {
         return cacheMemory[n];
       } else {
        // expensive functon
        const results = callback(n);
        cacheMemory[n] = results;
        return results;
       }

    }
}


const improvedFibbo = memiozation(fibbo);

// const abc = fibbo(45);
const abc1 = improvedFibbo(45); // 1st expensive call 
const abc2 = improvedFibbo(45);
const abc4 = improvedFibbo(45);
console.log(abc1, "delayed"); // very delayed 
console.log(abc2, "fast");
console.log(abc4, "fast 45 again");