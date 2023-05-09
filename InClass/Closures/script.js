

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
    Closure -> function + its lexical Environment 
*/

let a = 10; // global ? 
function foo() {
    
    function bar() {
        let c = 30 // local variable / bar Context 
        return a + b + c;
    }

    let b = 20 // foo varible  
    return bar;
}

const result = foo();

console.log(result); // bar function ... 


const resultFinal = result();
console.log(resultFinal, "resultFinal") /// 

