// someligc 
let name = "utkarsh"
let key = "parentsName"

let obj = {
    name: name,
    rollNumber: 1,
    class: "9thClass",
    [key]: "parent 1 parent2"
}
// console.log(obj, "1st obj")

// {
//     name: "utkarsh",
//     rollNumber : 1,
//     class: "9thClass",
//     parentsName: "parent 1 parent2"
// }

// get 

// console.log(obj.name)
// console.log(obj["rollNumber"])

// Add 

obj["newProperty"] = 12;
// obj[name] = "asdkjsadlkjasldkj"
// console.log(obj)

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

// console.log(user === userCopy1, "user copy 1")
// console.log(user === userCopy2, "user copy 2")



//  -------- Value of the key would be the latest one 

const obj1 = {
    name: "utkarsh",
    class: 9,
    rollNumber: 8900,

    name: "akash",
}

// console.log(obj1) // name: akash and not "utkarsh"



// --------------- Object Destructuring -------------------

const objDes = {
    name: "utkasrsh",
    class: 9,
    rollNumber: 90,
    choiceOfAirways: "Go Airways"
}

console.log(objDes.choiceOfAirways)



// const {rollNumber, choiceOfAirways} = objDes

// --> this destructing is as good as these two lines
// const rollNumber = objDes.rollNumber;
// const choiceOfAirways = objDes.choiceOfAirways;

// console.log(rollNumber,choiceOfAirways, "destructured" )


//  ----------- Destructuring ALIAS 

const {rollNumber: rollCall, choiceOfAirways} = objDes

// const rollCall = objDes.rollNumber;

console.log(rollCall, choiceOfAirways, "rollcall")



// Objects Methods  ---- - - - - - - - - - - > 

// 1. Object.assign 

const sourceObject1 = {name: "utkarsh", class: 9}
const sourceObject2 = {name1: "akash", class1: 10}
const targetObject = {a: 100000}


// Object.assign(targetObject, sourceObject1)

Object.assign(targetObject, sourceObject1, sourceObject2)

// console.log(targetObject) // {name: utkarsh, class9, }


// 2. Object.create()

// -> 1st wat to create object {}
// name and rollNumber -> (OwnProperties)
const person = {
    name: "blah",
    rollnumber: 1
}


//  -> 2nd way Object.create

// name and rollNumber -> these PROPERTIES will be created but in prototype 
// i.e, these properties are not OWN PROPERTIES


const newPerson = Object.create(person)

// newPerson.name = "utkarsh"


// console.log("preson", person)
// console.log("newPerson", newPerson)

// console.log(person.name, newPerson.name, newPerson.rollnumber)


// 3. Object.getOwnPropertyNames()

// const prersonOwnPropertyArr = Object.getOwnPropertyNames(person);
// const newPrersonOwnPropertyArr = Object.getOwnPropertyNames(newPerson);
// console.log("prersonOwnPropertyArr", prersonOwnPropertyArr, newPrersonOwnPropertyArr)



// 4. Object.keys()
const keysPerson = Object.keys(person)
const keysNewPerson = Object.keys(newPerson)
// console.log("keysPerson", keysPerson, newPerson)



// 5. Object.Values()


const valuePerson = Object.values(person)
// console.log("valuePerson", valuePerson)



// 6. Object.entries()


const entryPerson = Object.entries(person);
// console.log("entryPerson" ,entryPerson)

// for (const arr of entryPerson) {
//     console.log(`${arr[0]}: ${arr[1]} asdkasdasdlkasj`);
//   }










