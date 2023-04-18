///// ---------- - - - - - - -- - - - - - 



// console.log(a)
// var a = 12;

// console.log(a)



// console.log(b)
// let b = undefined;




// function sum(a ,b) {
//     var c = a + b;
//     return c;
// }


// const result = sum(1,2)

// console.log(result);



/*
        FIRST CLASS FUNCTIONS: the languages which supports FIRST CLASS FUNCTIONS 
        can treat their function like a VARIABLE.

*/

// Variable TREATMENT are as follows -> 

// 1. we can declare variables.
// 2. we can pass variables in functions as their arguments.
// 3. we can return the variables from the function.

// let num1 = 12;
// let num2 = 13;

// function sum(a , b) {
//     //  a, and b are arguments. 
//     let c = a + b;
//     return c;
// }

// let result  = sum(num1, num2)



// function calc(fn, val) {
//     console.log(fn)
//     console.log(val)
// }

// calc(sub, 2)

// function sum(a,b) {
//     return a+ b;
// }

// function sub(a,b) {
//     return a-b
// }




// java -> 


// public static void sum(int a, int b) {
//     return a+ b;
// }

// int res = sum(1,3);


// let num1 = 12;
// let num2 = 13;

// function abcd() {

// }

// function sum(a,b) {
//     return a+b;
// }

// sum(num1, num2);

// I am passing this VARIABLE as an argument of sum




//  murcury -> weapons

// earth -> life support

// jupiter -> food rationis



// spaceShip(lifeSupport, 'utkarshasdasdasdasdas', 24)
// // space ships method 
// function spaceShip(func, num1, num2) {
//     // check for auth 
//     // log 

//     console.log(num1, num2);

//     if(num1 === "utkarsh") {
//         func()
//     } else {
//         console.log('hacking spaceship dectected')
//     }
    


// }

// function weapons() {
//     console.log('weapons acrtivaged');
// }

// function lifeSupport() {
//     console.log('lifeSupport');
// }

// function food() {
//     console.log('food');
// }


// food()

// // call be reference vall byt value 

// food()

// food


// function sum(a,b) {
//     return a + b;
// }

// sum() // function call.

// sum



// Question: what is the difference b/w sum() vs sum 


// function sum(a,b) {
//  let c = a +b;
//  return c;
// }


// let res = sum(1,2)
// console.log(res)


// one big function ... 
// -> // needs to do some important work and then it will call your function.


//logging 
// and then i should add


// function logging(callBackFunc) {
//     // log
//     console.log('logging') // 5 se
//     callBackFunc(1,2)
// }

// function add(a,b) {
//     console.log(a+b)
//     return a+ b
// }

// logging(add)


// logging
// 3



// 
// lgging  sum function 

// function logging() {
//     // google logging
//     // console.log('logging') 
//     return u
// }

// function add(a,b) {
//     console.log(a+b)
//     return a+ b
// }

// logging() // google
// add(1,2)

//logging ?
// requreiment -> 1. need to log and then you need to add. 

3
// logging


// there is a big function, hey do your work and after that you can execute smaller function.
// 



// caclculator -> 

// 

// function calculator(operation) {

//     if(operation === 'add') {
//         return function(a,b) {
//             return a+b
//         }
//     }

// }


// let num1 = 1;
// let num2 = 2;

// calculator('add')




// Functions -----> 


// 1.  function declaration 

// function sum() {

// }

// 2. function Expression -> 


// variable name 
// const sum = function(a,b) {
//     return a +b
// }

// let res = sum(100,21)
// console.log(res)


// 1. named functions 

// 2. anonymous functions

//  named function
// function abc() {

// }

// anynomous function...
// const sum1 = function(a,b) {
//     // anything

// }



//  arrow functions 

// const sumArrow = (a, b) => {
//     return a + b;
// }

// let resultArrow = sumArrow(1,3);
// console.log(resultArrow, "sum arrow")





// ------------------ - - - - - - callbacks -------------- 

// function loggign(callBackFunction) {
//     // please do your woerk
//     console.log('logging') 

//     callBackFunction();

// }

// function add(a, b) {
//     console.log(a+b)
//     return undefined
// }

// loggign(add)


// add vs add()


// ---------------------- higher order functions --------- 

// the functions which can return a function is HOF (calculatorMotherEarth)

// the funciton which can acceept a function as an argument  (loggign)

function calculatorMotherEarth(condition) {

    if(condition === 'add') {
        return function(a,b) {
            return a + b
        }
    } else if (condition === 'sub') {
        return function(a,b) {
            return a-b
        }
    }
}

//  aliens turf

let functionAdd = calculatorMotherEarth('add')

console.log('returned funciton  --------- ')
console.log(functionAdd)


// ........ 




