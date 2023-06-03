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

// const obj1 = {
//     name: "utkarsh",
//     class: 9,
//     rollNumber: 8900,

//     name: "akash",
// }

// console.log(obj1) // name: akash and not "utkarsh"



// --------------- Object Destructuring -------------------

const objDes = {
    name: "utkasrsh",
    class: 9,
    rollNumber: 90,
    choiceOfAirways: "Go Airways"
}

// console.log(objDes.choiceOfAirways)



// const {rollNumber, choiceOfAirways} = objDes

// --> this destructing is as good as these two lines
// const rollNumber = objDes.rollNumber;
// const choiceOfAirways = objDes.choiceOfAirways;

// console.log(rollNumber,choiceOfAirways, "destructured" )


//  ----------- Destructuring ALIAS 

const {rollNumber: rollCall, choiceOfAirways} = objDes

// const rollCall = objDes.rollNumber;

// console.log(rollCall, choiceOfAirways, "rollcall")



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



/*
    Property Descriptors ..... 
*/


// ---------------   1. Enumerable -> ....

// let obj2 = {
//   name : "utkarsh",
//   rollNumber: 45,
//   address: "road",

// //   cashInHand: 42

// }

// Object.defineProperty(obj2, 'cashInHand', {
//     value: 42,
//     enumerable: false
// });

// console.log(obj2)

// obj2.asdasd = "asdasd"

// propertyIsEnumerable

// console.log(obj2.propertyIsEnumerable("name"), "isName Enumerable")
// console.log(obj2.propertyIsEnumerable("rollNumber"), "is rollNumber Enumerable")
// console.log(obj2.propertyIsEnumerable("address"), "is address Enumerable")
// console.log(obj2.propertyIsEnumerable("cashInHand"), "is cashInHand Enumerable")

// console.log(obj2)

// for (const key in obj2) {
//     console.log(key)
    
//     // const element = object[key];
        
// }




// Enumerable -> the properties which are enumerable willbe part of for in 
// else  that property wiill not be part 

// for in 




//  ------------- 2. Writable ------------

// writable basically means the value can be changed ... 

// let obj3 = {
//     name : "utkarsh",
//     rollNumber: 45,
//     address: "road",  
//   }


//   Object.defineProperty(obj3, "cashInHand", {
//     value: 100,
//     writable: false,
//     enumerable: true,
//     configurable: true

//   })

// //    YOU cant do this bec indside defineProperty, the propert is checked. 
//   Object.defineProperty(obj3, "cashInHand", {
//     value: 100,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   })


//   console.log(obj3, "obj3")
  
//   console.log(obj3.cashInHand) // ? 100 

//   obj3.cashInHand = 99;

//   console.log(obj3.cashInHand) // ? 99

//   delete obj3.cashInHand

// 3  --------- configurable ------------ 

// add delete 


// const obj4 = {
//     name: "utkarsh",
// }

// Object.defineProperty(obj4, "class", {
//     value: "9th class",
//     enumerable: true,
//     configurable: false,
//     writable: true,
// })

// obj4.class = "12th class"

// // console.log(obj4, "obj4")

// delete obj4.class



// console.log(obj4, "obj4")


/*
    writable -> cant edit the vlaue of property, but can delete it,
    Configurable -> cant delete the property but can change the value of the property,
    enumerable -> to be part of for in loop.
*/




// properties of an object can be modified, deleted and new property added, 


// 4. ---------------- Own Property ------
//  the property of an object which is directly in the  object and not in the Prototype.



// class Car {
//     canmove

//    func(){
//     console.log("car audi");
//    }
// }


// const carObj = {
//     canMove: true,
//     func: function() {
//         console.log("carObj", carObj);
//     }
// }

// console.log(carObj)

// const descriptors = Object.getOwnPropertyDescriptor(carObj, "func")
// console.log(descriptors, "descriptors fuc")


// let carAudi = new Car();

// console.log(carAudi)

// const descriptors1 = Object.getOwnPropertyDescriptor(carAudi, "func")
// const descriptors2 = Object.getOwnPropertyDescriptor(carAudi, "canmove")
// console.log(descriptors1, "descriptors fuc")
// console.log(descriptors2, "descriptors canMove")

// console.log(carAudi, "c;lass car")
// carAudi.func()



/*
    Few Derivative () properties of Object .. 

*/

// Object.seal -> you cant DELETE the existing properties and you cant ADD new Properties.
//  you can modify the value of existing properties


// const object1 = {
//     property1: 42
//   };
  
// Object.seal(object1);


// console.log(Object.getOwnPropertyDescriptor(object1, "property1"))

// // delete object1.property1;

// // adding new property
// object1.abcd = "sdasdas"

// console.log(object1)



// -----------  Object.freeze  --------
// freeze is superset of seal -> 
// no ADDITION, DELETION and EDITION of properties.

// const object1 = {
//     property1: 42
//   };
// Object.freeze(object1)

// console.log(Object.getOwnPropertyDescriptor(object1, "property1"))


// // cant add property
// object1.abcd = "asdasdasdd"

// // cant edit the property
// object1.property1 = 99;

// // cant delete the property

// delete object1.property1

// console.log(object1)


/*
    Date and Time Object.... 
*/


// const rightNowDate  = new Date()
// console.log(rightNowDate)

// Date, 

// console.log(rightNowDate.getTime(), "time") // time in MIlli seconds from 1970 Jan 1 
// console.log(rightNowDate.getDay(), "Day") 
// console.log(rightNowDate.getDate(), "Date")
// console.log(rightNowDate.getFullYear(), "year")


// EDITING DATE OBJECT ->  SET 

// date
// rightNowDate.setDate(15)

// rightNowDate.setFullYear(2099)

// rightNowDate.

// edit the milliseconds
// minutes, hours, seconds.

// console.log(rightNowDate)


//  ------  get UTC time -----------

// const rightNowDate  = new Date() // IST 
// console.log(rightNowDate, "IST time");

// const utcTime = rightNowDate.toUTCString();

// console.log(utcTime, "utc time");

// // const offset = new Date(utcTime).

// console.log(offset, "offset")


// -------- MATH ----------------------

// let date = new Date();


// let dateAdd2Hrs = new Date()

// //  added 5 min 
// dateAdd2Hrs.setTime(date.getTime() + 300000)

// console.log(dateAdd2Hrs, date)


// console.log( dateAdd2Hrs - date)




/*

    SUGGESTION: see the MOMENT library ..
*/


















