//  ---------- -- - - - - - - - - - - -Hoisting ---------------------
// -> variables, and functions DECLARATION are hoisted. (it will treat function 
// and variable if they are on the top of the file.)

// console.log(a);
// var a = 12;

// sum() 

// function sum() {
//     console.log('inside the sum function');
// }


// sum()


// Let and const are hoisted in TEMPORARAL_DEADZONE..

// console.log(a)
// let a = 122;


// console.log(name)
// const name = "utkarsh"

// console.log(asda)



//  ---------------- ----------- Basis Math (assignment, operators, ) -----------

// console.log(1 +2);


// console.log(10 % 2) //0

// console.log(Math.pow(2, 3)) // 8
// console.log(2 ** 3); // 8


// let val1 = +"123" + 2;

// console.log(val1)




/*
    -----------  comparision --------

*/

// <, >, <=, >=, ==, !=, ===,

console.log("A" > 'D') //false

console.log('Ram' > 'Rbm') //false


// console.log(1 > 2); // false

// const val = 1;
// console.log(val==1) // true


console.log(1 == "1") // true


console.log(1 === "1") // false




// === is doing 2 things
// 1. checking the value.
// 2. checking the type


/*
        Few Programmings ...
*/

// if else 

if(true) {
    // do something 
} else {
    //  do somethign 
}


// ----> Loops 

let arr = [1,2,3,4,5];

// for(let i=0; i<arr.length;i++) {
//     console.log(arr[i])
// }

let j =0

// while(j < arr.length) {
//     console.log(arr[j])
//     j++;
// }

// for in -> loops over object and its properties.  
// for of -> arrays and (ITERABLE objects) -> array is a default iterable object.

// let arr1 = [1,2,3,4,5,6,7,8,9,10];


// for(item of arr1) {
//     console.log(item)
// }


// let obj = {
//    name: "utkarsh",
//    age: 99,
//    canDrive: false
// }

// for (const key in obj) {
//    console.log(key)
//    console.log(obj[key])
// }



// --> Switch 

// switch(condition) {
//     case 1: 
//         console.log("1")
//         break;

//     case 2: 
//         console.log("2")
//         break;

//     default: 
//         console.log("balh")
// }


// Grouping of switch case .... 



// switch(condition) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("podium position");
//         break;
//     case 4:
//         console.log("consolidation position")
//         break;

//     default:
//         console.log("partisipated in race")
//         break;
// }


// numer 

// typeof -> what is the type of the value that is assigned to you 
// const a = 12; // nuber
// const a = "abcd"; //string
// const a = {
//     name: "utkawrsh"
// };

// const a = true; // bolea
// const a = null // null

const sum = function() {

}

console.log(typeof sum);





