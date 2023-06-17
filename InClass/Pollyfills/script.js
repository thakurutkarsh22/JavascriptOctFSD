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


//  ----- Push  ------- 


// Array.prototype.myPush = function () {
//     let va1 = arguments[0]
//     let arr = this;

//     let lenth = arr.length;
//     arr[lenth] = va1;

//     //  arr.push(va1);
//      return arr.length;
     
//  }

// let arr = [1,2,3];
// let arr2 = [];

// console.log(arr); // [1,2,3]

// const resturnVal = arr.myPush(99); // 

// console.log(arr); // [1,2,3,33]
// console.log(resturnVal); // 4


// -------- shift ------------ 

// Array.prototype.myShift = function() {
//     let arr = this;

//     let returnVal = arr[0];

//     let copyArr = [...arr];
//     arr.length = 0; // this is how you are going to make array empty.

//     for (let index = 1; index < copyArr.length; index++) {
//         const element = copyArr[index];
//         arr[index - 1 ] = element
//     }
//     return returnVal;
// }

// let arr = [10,2,3,4];
// let returnVal  = arr.myShift(); 

// console.log(arr); // [2, 3 ,4 ];
// console.log(returnVal); // 10



// Object

// call apply bind,

// Promises

// setInteval();



/*
    Call Apply Bind
*/

// const obj1 = {
//     name: "akash"
// }

// const obj2 = {
//     name: "utkarsh",
//     foo: function(a ,b,c,d, e) {
//         console.log(this.name, a,b,c,d, e);
//     }
// }


// obj2.foo.call(obj1, 10,11,12,13, "call") // javasciprt
// obj2.foo.apply(obj1, [10,11,12,13, "apply"]) // javasciprt




// Function.prototype.myCall = function () { // rest operator 
//     const func = this; // foo
    
//     let context = arguments[0];
//     const args = [...arguments];
//     console.log(args);
//     args.shift();


//     // console.log(arguments)


//     const copyContext = {...context} // {name: "akash"}
//     copyContext.fnName = func // {name: 'akash', fnName: func/foo }
    
//     copyContext.fnName(...args)
// }

// obj2.foo.myCall(obj1, 10,11,12,13, "mycall")


// Function.prototype.myApply = function () { // rest operator 

//     let context = arguments[0];
//     let args = arguments[1];


//     const func = this; // foo

//     const copyContext = {...context} // {name: "akash"}
//     copyContext.fnName = func // {name: 'akash', fnName: func/foo }
    
//     copyContext.fnName(...args)
// }


// obj2.foo.myApply(obj1, [10,11,12,13, "myAapply"]) // javasciprt



const obj1 = {
    name: "akash"
}

const obj2 = {
    name: "utkarsh",
    foo: function(a ,b,c,d, e) {
        console.log(this.name, a,b,c,d, e);
    }
} 

const fooBindedFunc = obj2.foo.bind(obj1, 1,2,3,4, "bind");
fooBindedFunc()


Function.prototype.myBind = function(context, ...args) {
    let func = this;

    return function() {
        func.call(context, ...args);
    }

}

const fooBindedFuncMyBind = obj2.foo.myBind(obj1, 1,2,3,4, "mybind");
fooBindedFuncMyBind();









///// ------ 


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