/*
    Functions
*/

const { futimesSync } = require("fs");

// -> input (box) -> output

// ------------  function declaration  -----------
function functionName(a, b) {
    //  a and b are PARAMETERS
}


// java ->

// public static int sum(int a, int b) {

// }



// function sum(a, b) {
//     return a + b;
// }


// let ans = sum(1,2);
// console.log(ans)



// ---- variables 


// let c = 12;

// function sum(a,b) {
//     return a+ b + c;
// }

// let result = sum(1,2);

// console.log(result);



// Default Values -> 


// function sum(a,b = 1) {
//     return a+b;
// }


// let result = sum(99);
// console.log(result) // 100


// function sum(a,b = 1) {
//     return a+b;
// }


// let result = sum(99,2);
// console.log(result) // 101




// -> what a function returns.... 


// function sum(a,b) {
//     console.log(a,b);
// }

// let result = sum(1,2);
// console.log(result, "result is here")


// -------------- Function Expression --------------- 

function sum(a, b) {
    // do something here.
    return a+b;
}

let sumExpression = function(a,b) {
    if(typeof a == "number" && typeof b == "number") {
        return a +b;
    } else {
        console.log("sahi number do")
    }
    
} 

let res1 = sum(1,2); // 3

let res2 = sumExpression(1,2); // 3

console.log(res1, res2);



// TODO: Arrow functions ... (what is callbacks)




