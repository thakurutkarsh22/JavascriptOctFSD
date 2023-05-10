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

// function sum(a, b) {
//     // do something here.
//     return a+b;
// }

// let sumExpression = function(a,b) {
//     if(typeof a == "number" && typeof b == "number") {
//         return a +b;
//     } else {
//         console.log("sahi number do")
//     }
    
// } 

// let res1 = sum(1,2); // 3

// let res2 = sumExpression(1,2); // 3

// console.log(res1, res2);



// TODO: Arrow functions ... (what is callbacks)



//  -------------- REST OPERATOR ----------------------
//  ... -> syntax
 
function child(name, standard, rollNumber, ...otherInfo) {
    console.log(name, standard, rollNumber )

    console.log(otherInfo)
}

console.log("------------------ childs info ----------------");

// child("akashay", "5th stand", 2, "Parent Father", "Parent Mother", "Delhi gali no 4", "Gaming pubg")


// --------------------- default value of Argument -------------

// function child(name, standard, rollNumber = 1) {
//     console.log(name, standard, rollNumber )

// }

// child("akahsy", "5th class") // akahsy 5th class 1
// child("akahsy", "5th class", 100)


// --------------- Pass By Value and PAss By reference  -------------


//  primitives are passed by value. (numbers, boolean);

// let num1 = 1;
// let num2 = 2;

// function sum(a, b) {
//     a = a + 10
//     b = b + 10;

//     console.log(a, b);

//     return a + b
// }

// let resutSum = sum(num1,num2) // pass by value 

// console.log(num1, num2);

// let math = {
//     marks: 100,
//     grade: "A"
// }

// let science = {
//     marks: 80,
//     grade: "B"
// }

// function sum (obj1, obj2) {
//     obj1.marks = 1
//     obj2.marks = 2

//     console.log(obj1.marks, obj2.marks, "obj marks") // ? 1 ->


// }

// sum(math, science)

// console.log(math.marks, science.marks, " subject marks") // ?  2 -> 


// ------- SPREAD OPERATOR 

//  to create copies of any object....


//- --- - - - - - - - --  DEEP CLONE and SHALLOW CLONE  -- - - - - - - - - - -

let math = {
    marks: 100,
    grade: "A"
}

// Scanner scn = new Scanner () ;

// SHALLOW COPY 
let mathClone = { ...math }

// let mathClone = { marks: 100, grade: "A" }

let science = {
    marks: 80,
    grade: "B"
}

let scienceClone = { ...science }

function sum (obj1, obj2) {
    obj1.marks = 1
    obj2.marks = 2

    console.log(obj1.marks, obj2.marks, "obj marks") // ? 1 ->
}

sum(mathClone, scienceClone)

console.log(math.marks, science.marks, " subject marks") // 2 ? 







