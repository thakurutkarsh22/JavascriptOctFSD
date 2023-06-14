//                      ---- scope -----
// 0. you can redeclare the variable  (var)
// 1. the js file is itself global.
// 2. scope of Var -> Global & functional
// 3. VAR dosent care about {} (BLOCK)

// KING RULE -> Var has the scope of (EXECUTION Context)



// console.log("abcd")

// var a = 12; // golbal  scope

// console.log(a) // 12


// if(true) {
//     var b = 10; // global
//     console.log(a) // 12 // if the parent scope have the VARIABLE then child scope will also have the access.
//     console.log(b) // 10
// }

// console.log(b)// 10



// var a = 12; // glob

// console.log(a) // 12


// if(true) {
//     var a = 10; // global
//     console.log(a) // 10
// }

// console.log(a)



//  -> functional scope 

// var a = 12;
// console.log(a); //  12


// function abc() {
//     var a = 100;
//     console.log(a); // 100
//     return a;
// }

// let result = abc();

// console.log(result) // 100

// console.log(a); // 12
















//  ----- LET and CONST

// 1. let and cost have a scope of {}
// 2. Let and const have BLOCK SCOPE ..... LIKE we have it with (int, char, String)


// let a  = 12;

// console.log(a) // 12

// if(true) {
//     let b = 100;
//     console.log(b) // 100
//     console.log(a) // 12
// }

// console.log(b) // ? error


// const a  = 12; // global

// // a = 12  i cant do this 

// console.log(a) // 12

// if(true) {
//     const b = 100;
//     console.log(b) // 100
//     console.log(a) // 12
// }

// console.log(b) // ? error

// let a = 12; // global 

// let a = 11; //global


// const a = 11;

// const a = 10;

// var a = 13;

// console.log(a)





//  Question: what will be the output ..

// var a = 12;
// console.log(a) //12

// if(true){
//     var a = 13;
//     console.log(a) //13
// }

// console.log(a) //13

// function abc() {
//     var a = 12;
//     console.log(a) //12
//     return a;
// }

// abc()
// // console.log(result1) // 12

// console.log(a)// 13


// ----  output of the question


// for(var i=0; i<8;i++) {
    
//         console.log(i);

//  } // 0 1 2 3 4 5 6 7



// for(var i=0; i<8;i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 2000)
// }

// 8 8 8 8 8 8 8 8


// if you want to improve this 

// for(let i=0; i<8;i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 2000)
// } // 0 1 2 3 4 5 6 7


// var a = 99;

// globla scop
// let i = 0;
// (() => {
//     // functional scope 
//     var a = 12;
//     console.log(a)
// })()


// function abc() {
//     var a = 0;
//     console.log(a)
// }

// abc();

// console.log(a)


// globl? 

// for(var i=0; i<8;i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 2000)
// } // 0 1 2 3 4 5 6 7

for (var i = 0; i < 4; i++) {
    console.log("index", i);
    ( (index) => { 
        
        setTimeout(() => {
            console.log(index, "hey there")
            return undefined;
        }, 2000)

        return undefined;
        
    } ) (i)
    
}

// console.log(a)

// function sum(a,b) { //

// }

// sum(1,2)// function invocation 