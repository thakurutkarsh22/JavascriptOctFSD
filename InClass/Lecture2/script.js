// Variables ---- > 

// 1.let 
// 2. const 


let age = 12;
// console.log(age) // this is heavily used to debug... 
// alert(age) // old banking sites use 



// Data types --- 

// 1. strings => "adasdasda"
// 2. numbers  => 123, 12
// 3. boolean => true, false

// 4. null => is set by User/ Developer.
// 5. undefined => is can be set by user/ but it is initially set by Program only 

let user = [{
    name: "utkasrsh",
    parents: [{
        name: "mother",
        age: 50
    }, {
        name: "father",
        age: 55,
    }]
}]

// console.log(user);

user = null; // this is right and good practise.
// user = undefined // this is bad practise, not wrong but bad practise.

// console.log(user);



// -------------------- ---- -- - -Objects  --------------------

// -> in java you cant create PROPERTY NAME WITH SPACE. But in js it is allowed.

let car = {
    wheels: "yes",
    seats: 4,
    ac: true,
    sports: false,
    powerWheels: true,
    "engine version": 8, // this should not be done , this is not good practise. // beat him 
    engineVersion: 8, // this is good practise
    "year": 2019,
    "aw sad": true
}

// car = null;


// console.log(car)

// --get 
// console.log(car.wheels, car.seats)

// console.log(car.year, car.seats, car["engine version"] , "purchse year");

// console.log(car["seats"], "seats are there");



// --edit
// car.seats = 2
car["engine version"] = "v8"
// console.log(car.wheels, car.seats, car["engine version"]);


// --delete 
delete car.wheels
delete car["powerWheels"] 
delete car["engine version"]

// console.log(car)


// -- 

// Car car = new Car();

// car {
//     wheels: "yes",
//     seats: 4,
//     Ac: true,
// }




// ----------------------------- Arrays ---------------------------------

// int[] arr = {1,2,3,4,5} // {1,2,3, "abcd", 5}

// inside js "", '', ``,
// let arr = [1,5, `abcd`, 6, true, 'c'];
// console.log(arr);

// let char = 'c';
// let charStr = "c";

// get 
// console.log(arr[0], arr[2], arr[4])


// edit.. 

// arr[0] = "start"

// console.log(arr)

// --length of array ..
// console.log(arr.length, "length of array")

// weird thing 

// arr.length = 0; // this is not good.

// console.log(arr, "hey there array")

// arr = null


//  ------ arrays properties .... 


// 1. push.

let arr = [1,2,3,4];
console.log(arr)
arr.push(5);

console.log(arr)

// 2. pop -> removes the last element from array 

arr.pop();

console.log(arr)

// 3. shift -> it removes the 1st element from array.
arr.shift()

console.log(arr)





