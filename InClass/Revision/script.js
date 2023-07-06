


// IIFE

function abc() {
    console.log("abc")
}

abc() // you  as a user executing this thing 


var a = 12;

( () => {
    var a = 99
    console.log("immediately invoked function")
}) ()



// PROMISE and Set time out 

// setTimeout(() => {
//     console.log("hello")
//  }, 0)
 
//  let myFetch = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(1)
//     }, 5000) 
//  })
 
//  myFetch.then(data => console.log(data))

//  // ans ->  Hello  1


//  setTimeout(() => {
//     console.log("hello")
//  }, 0)
 
//  let myFetch1 = new Promise((res, rej) => {

//     res(1)
//  })
 
//  myFetch1.then(data => console.log(data))

 // ans ->    1  hello





//  Closure 



// function outerfunction(x) {
//     function innerfunction(y) {
//         return x  + y;
//     }

//     return innerfunction;
// }

// let a = 12;
// let funf = outerfunction(a);

// a = 99

// let res = funf(2)

// console.log(res)


// 14





// function outerfunction(ob) {
//     function innerfunction(y) {
//         return ob.x  + y;
//     }

//     return innerfunction;
// }

// let obj = {x: 12};
// let funf1 = outerfunction(obj);

// obj.x = 99 

// let res1 = funf1(2)

// console.log(res1)


// 14 
// 101
// 111
// None of these 




// 


var x = 1

function outer() {
    console.log(x);

    var x = 2;

    function inner() {
        console.log(x)
    }

    inner()
}

outer()


// undefined 2




var b = 1;
function outer(){
   var b = 2
   
   function inner(){
    b++;
    var b = 4;
    console.log(b)
   }
   
   inner();
}

let x= outer;
let y= x();



// 4



// Question 


let arr = [1,2,5]

let resfind7 = arr.reduce((accumulator ,value)=>{

return accumulator + value;

}, true); //(It takes by default true is 1)

console.log(resfind7); 

//OutPut => 9


// Explanation: Boolean + Number  = Number; 
// Boolean will change itself to a number (coersion). 





// Question 


function outer(){
    console.log('First',a);
       var a = 2
    function inner(){
        a++;
        console.log('Second',a);
        var a = 4;
        console.log('Third',a);
    }
    inner();
}
outer();


// First Undefined
// Second NaN     -> (undefined  + 1  = NaN)
// Third 4



