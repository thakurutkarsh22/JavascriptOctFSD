// Pollyfills 




// Map 

// const resultMap = [89, 55, 68, 40].map( (item, index, array ) => {
//     return {
//         index,
//         value: item,
//     }
// } )

// console.log(resultMap, "map");


// // myMap

// /*
//     1. Go to every element 
//         1.1 call the callback function
//         1.2 whatever result you got from the call you need to save that.

// */

// Array.prototype.myMap = function( callback ) {
//     // context -> this

//     let arr = this

//     const result = []; // this collects the returned val from the callback funciton.

//     for(let index = 0; index < arr.length ; index++){
//         const item = arr[index];
//         const returnVal = callback(item, index)
//         result.push(returnVal)
//     }
//     return result
// }

// //this 

// const callback = (item, index ) => {
//     return {
//         index,
//         value: item,
//     }
// }

// const res = [123,124,125].myMap( callback ) // callsite ?? binding ? implicit 

// console.log(res, "my Map");


// call 

// apply 


// bind 



// Filter ----- >>

// const callbackFilter = (item, index) => {
//     return item > 7
// }

// const resultFilter = [1,2,3,4,5,6,7,8,9,10].filter( callbackFilter ) // [8 , 9 10]

// console.log(resultFilter, "filter");


// Array.prototype.myFilter = function( callback ) {

//     let arr = this;

//     let resultArr = [];

//     for(let i = 0; i<arr.length; i++) {
//         const item = arr[i];
//         const res = callback(item,i );

//         if(res) {
//             resultArr.push(item);
//         }
//     }

//     return resultArr;
// }

// const resultMyFilter = [1,2,3,4,5,6,7,8,9,10].myFilter( callbackFilter )
// console.log(resultMyFilter, "result MyFilter");




//  Reduce ------> 


// const resultReduce = [2,3,4,5,6,7].reduce( (accumulator, currentVale ) => {
//     return accumulator + currentVale
// } )

// console.log(resultReduce, "reduce");





// Array.prototype.myReduce = function( callback, initialValue ) {
//     let array = this;

//     let accumulator = initialValue ? initialValue : 0 ;
//     for (let index = 0; index < array.length; index++) {
//         const item = array[index];
//         accumulator = callback(accumulator ,item)
//     }

//     return accumulator;
// }


// const resultMyReduce = [2,3,4,5,6,7].myReduce( (accumulator, currentVale ) => {
//     return accumulator + currentVale
// } )

// console.log(resultMyReduce, "my reduce");



// Object

// call apply bind,

// Promises

// setInteval();



/*
    Call Apply Bind
*/

const obj1 = {
    name: "akash"
}

const obj2 = {
    name: "utkarsh",
    foo: function(a ,b,c,d) {
        console.log(this.name, a,b,c,d);
    }
}


obj2.foo.call(obj1, 10,11,12,13) // javasciprt

// obj2.foo.apply(obj1, [10, 11,12,13])

// const fooCopy =  obj2.foo.bind(obj1, 10, 11,12,13) // !call site 

// fooCopy();

// const obj1 = {
//     name: "akash",
//  fnName : foo
// }

// obj1.foo = obj2.foo


// obj1.foo(1,2,3,4)


// obj2.foo.apply(obj1, [10, 11,12,13])

// obj2.foo.myCall 


Function.prototype.myCall = function (context, ...args) { // rest operator 
    const func = this;
    const copyContext = {...context}
    copyContext.fnName = func
    copyContext.fnName(...args)
}

obj2.foo.myCall(obj1, 10,11,12,13)



