

// A function can return a function 


// function sum() {
//     return 1+ 2;
// }

// const res = sum(); // 3

// function foo() {

//     function bar () {
//         console.log("bar!!")
//     }
    
//     return bar
// }

// const result = foo();

// console.log("result ka ans: ", result)

// result()



/*
    Closure -> function + its lexical Environment (surrounding env)
*/

// let a = 10; // global ? 

// function foo() {
    
//     // nested function 
//     function bar() {
//         let c = 30 // local variable / bar Context 
//         return a + b + c + abcd;
//     }

//     let b = 20 // foo varible  

//     let abcd = 1000;
    
//     return bar;
// }

// const result = foo(); // bar ? 

// console.log(result); // bar function ... 


// const resultFinal = result(); //bar
// console.log(resultFinal, "resultFinal") /// 










// ----- Basic Example 


// function abc() {

//     // local environment ... 

//     var c = 14
//     console.log(a) // 
//     console.log(c)
// }

// var a = 12;
// abc()



// / exercise

function foo() {

    let var1 = 10;
    
    function bar() {
        var1 = var1 + 1;
        console.log("value of var 1 debug", var1)
    }

    return bar;
}


let resultOfExcesice = foo();
resultOfExcesice(); // bar 11
resultOfExcesice(); // bar 12
resultOfExcesice(); // bar 13
resultOfExcesice(); // bar 14









