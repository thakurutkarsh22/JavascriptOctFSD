// someligc 
let name = "utkarsh"
let key = "parentsName"

let obj = {
    name: name,
    rollNumber: 1,
    class: "9thClass",
    [key]: "parent 1 parent2"
}
console.log(obj, "1st obj")

// {
//     name: "utkarsh",
//     rollNumber : 1,
//     class: "9thClass",
//     parentsName: "parent 1 parent2"
// }

// get 

console.log(obj.name)
console.log(obj["rollNumber"])

// Add 

obj["newProperty"] = 12;
// obj[name] = "asdkjsadlkjasldkj"
console.log(obj)

//  add the dynamic key 
// let obj = {
//     name: name,
//     rollNumber: 1,
//     class: "9thClass",
//     [key]: "parent 1 parent2"
// }


// delete 

// setTimeout(() => {
    
//     console.log(obj)
// }, 5000)

delete obj.rollNumber

// console.log(obj)


// COPY ....... ?

const user = {
    name: "utse",
    age: 24,
}

// This is not how you create a copy
const userCopy1 = user;

// SHALLOW COPY 

const userCopy2 = { ...user }

console.log(user === userCopy1, "user copy 1")
console.log(user === userCopy2, "user copy 2")



