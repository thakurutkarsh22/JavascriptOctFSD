// ...... arrays ..... 


// let arr1 = [10,2,31,42,5,65,7,8]

// const arr2 = [1,2,3,4,5,6,7,8]

// let arr3 = arr1;
// console.log(arr3, 'this is arr 3')

// const a = 1
// const b = 1

// console.log(a === b, 'a and b equation ')

// console.log(arr3 === arr1)

// let isEqual = arr1 === arr2
// console.log(isEqual) // false


//  /1. Push 


// let lengthOfArr = arr1.push(7)

// console.log(arr1)
// console.log(arr1.length)

// 2. pop 

// console.log(arr1.pop(), "pop val")
// console.log(arr1.length)


// 3. slice : It retrun a shallow copy of the array.
// console.log(arr1)

// let slicedArr = arr1.slice(2,5)
// console.log(slicedArr)

// console.log(arr1 === slicedArr)

// 4. splice
// console.log(arr1)

// let splice = arr1.splice(1, 2)
// console.log(splice)

// console.log(arr1)


// 5. Sort 

// let orgArr = [1,5,7,3,2,9,8]
// console.log(orgArr, 'org arr BEFORE sorting')


// let ansSorted = orgArr.sort()

// console.log(orgArr, 'org arr AFTER sorting')

// console.log(ansSorted)

// console.log(orgArr === ansSorted, "sorting ")

// let orgArr = [1,5,7,3,2,9,8, 45, 21, 11, 19, 103, 391, 231];

// orgArr.sort((a, b) => a - b ) // ascending order
// orgArr.sort((a, b) => b - a ) // descending order



// console.log(orgArr)


// comparator 
// 


//  shift and unshift is just similar to push and pop 
// but shift and unshift does it operation in the start. 

// 6. Shift 

// console.log(arr1)

// arr1.shift()

// console.log(arr1)

// 7. unshift

// console.log(arr1)

// arr1.unshift(0)

// console.log(arr1)



//  ---------------------- ARRAY DESTRUCTURING --------------------

const arrDes = [100,212,3,4]

const [firstVal, second, , fourthValue] = arrDes

// it is as same as ->

// const firstVal = arrDes[0];
// const second = arrDes[1];

console.log("array destructuring", firstVal, second, fourthValue)




// / --- ------------ - - - - -- - - Looping   -----------------

// 1. for, while 

// for(let i = 0; i<arr1.length; i++) {
//     console.log(arr1[i])
// }


// 2. for of loop  ---> this will print the values values 

// for (let item of arr1) {
//     console.log(item)
// }

//  for in loop -> this will print the key 

// for (let item in  arr1) {
//     console.log(item)
// }


// ----------------- Extra fun Array callbacks --------------------


// forEach -> 
// map
// reduce
// 1. filter
// find 

    // let arr = [5,8,900,3,1,2,18,19,20,25,100,189];

    // function filterUtkarsh() {
        
    // }

    // (item) => {
    //     return item > 19
    // }

    // let ans = arr.filter((item) => {
    //     return item > 99
    // })

    // console.log(ans)


    // 1. --------- - - for each  -- ---------------

    // let arr = [19,21,37,44,51,69,77,89];

    // 1 parent -> forEach
    // 2.callback -> () => {
        //print out element
    //} // uSers function  ARROW function 


    // 1. for each is GOING to every index 

    // arr.forEach((value, index, array) => {
    //         console.log(value, index, array, 'hey there i am traversing')
    //     }
    // )


    // arr.forEach(() => {
    //     console.log('hello world')
    // })

    // arr.forEach((value, index) => {
    //     console.log(value, " at index : ", index)
    // })

    // arr.forEach(utkarshFunction) // function pass


    // function utkarshFunction(value, index, arr) {
    //     console.log("anything")
    // }

    // function sum (a, b, c, d, e,f) {
    //     return a + b;
    // }
    // let res1 = sum(1,2,3,4,5,)

    // const sumFun = (a,b) => {
    //     return a + b;
    // }

    // let res2 = sumFun(1,2)

    // console.log(res1, res2)


// function sum(ab,) {

// }

// sum(1,2,3); // me calling 




// function calling 

// sum()

// sum


// 2. ------------------ MAP ----------------

// return value can be anything boolean , int , number, Object

// let arr = [19,21,29,44,51,69,77,89];


//     let beautifulArr = arr.map((value, index, array) => {
//         console.log(value + " map at the index of: ", index)

//         let rank = ''
//         if(value < 22) {
//             rank = 'undergrad'
//         } else if (value >=22 && value < 30) {
//             rank = 'passed out'
//         } else if (value >=30) {
//             rank = 'Experienced people'
//         }

//         let obj = {
//             age: value,
//             rank: rank,
//         }

//         return obj;
//     })

//     console.log(arr);
//     console.log(beautifulArr)


// < 22 -> undergrads

// <30 > 22 -> pass out peeps
// >30 -> Experience people 
// {
//     age: 19,
//     rank: 'undergrad'
// }

// {
//     age: 37,
//     rank: 'expderienced People'
// }

// {
//     age: 21,
//     rank: 'undergrad'
// }




// let ar2 = ["asdasd", "casdasd", "asdasda"]

// let arr1 = [
//     {
//         name: 'utkarsh',
//         age: 25
//     },
//     {
//         name: 'akash',
//         age: 26
//     },
//     {
//         name: 'bhanu',
//         age: 95
//     },
// ]





//  3. -------------- Filter ---------------------

// filter accepts return value (yes)
// all of them no 


// let arr = [19,21,29,44,51,69,77,88];

//     let filterdArray = arr.filter((value) => {
//         if(value % 2 ==0) {
//             return true;
//         } else {
//             return false;
//         }
//     })

//     console.log(filterdArray)



    // 1. go to every element 
    // 2. execute the function 
    // 3. except (foreach) every function cares about return value.


    // FIND and FIND INDEX -> its going to search from the start



    // 4. Array .find 

    // let arr = [1,2,3,4,5,6,7,9,99,104,231,89,00, 99];

    // let restFindArr = arr.find( (value) => {
    //     if(value == 9999) {
    //         return true
    //     }
    // } )

    // console.log(restFindArr)


    // 5. Findindex

    // let arr = [1,99,2,3,4,5,6,7,9,99,104,231,89,00 ];

    // let indexOf99 = arr.findIndex( (value) => {
    //     if(value == 99) {
    //         return true;
    //     }
    // } )

    // console.log(indexOf99)


    // 6. Find last 

    // let arr = [1,99,2,3,4,5,6,7,9,99,104,231,89,00 ];

    // let result = arr.findLast((value) => {
    //     if(value == 99) {
    //         return true;
    //     }
    // })


    // 7. FindLastIndex
    // let arr = [1,99,2,3,4,5,6,7,9,99,104,231,89,00 ];

    // let result = arr.findLastIndex((value) => {
    //     if(value == 99) {
    //         return true;
    //     }
    // })
    



    // ******** WARNING *********

    // this is different from the others ...... 



    // 7. array. reduce 


    // let sumArr = [1,2,3,4,5,6,7,8,9,10] // 55

    let sum = 0;

    // ---- way 1
    // for(let item of sumArr) {
    //     sum += item
    // }

    // console.log(sum);

    // ---- way 2

    // for(let i = 0; i<sumArr.length; i++) {
    //     sum += sumArr[i]
    // }

    // ---- way 3

    // sumArr.forEach((value) => {
    //     sum += value
    // })

    // console.log(sum);


    // 1. Iterate go to every element 
    // 2. Call the callback function 

    let sumArr = [1,2,3,4,5,6,7,8,9,10] // 55


    // let ans = sumArr.reduce( (accumulator, value) => {
    //     return accumulator + value
    // }, [])

    // console.log("accumiulator", ans)


    // /Ques you want sum of all odd numbers 


    // let result = sumArr.reduce((accumulator, value) => {
    //     if(value % 2 !== 0) {
    //         return accumulator + value;
    //     } else {
    //         return accumulator
    //     }
    // }, 0);

    // console.log(result)


    // [2,4,6,8,10,12,14] -> ans
    // [1,2,3,4,5,6,7] ; -> // input 


    //------- map 

    // let arr = [1,2,3,4,5]; //-> input 
    // // output [ 2, 4, 6, 8, 10 ]
    // let ansArr = arr.map( (value) => {
    //     return value * 2;
    // });


    // console.log(ansArr, "ansArr of map")


    // let arr = [20,12,33,84,51];

    // let result = arr.reduce( (accum, value) => {
    //      accum.push(2* value)
    //      return accum
    // }, [])

    // console.log(result);






    // ----------- COPY an ARRAY 



    //  ----- this is not how you should copy ..... 
    // let arr = [1,2,3,4,5,6]

    // let arrCopy = arr;


    // arrCopy.push(99)

    // console.log(arr, "org array") 
    // console.log(arrCopy, "copy array") 



    //  --------- COPY -----------------

    // let arr = [1,2,3,4]


    //------ way 1 FOR loop

    // let newArr =[];

    // for (const item of arr) {
    //    newArr.push(item);
    // }

    // newArr.push(100);

    // console.log(arr, "org array") 
    // console.log(newArr, "copy array") 


    //----- Way 2 MAP


    // let arr = [1,2,3,4]


    // let newArr = arr.map( (value) => {
    //     return value
    // } )

    // newArr.push(100)

    // console.log(arr, "org array") 
    // console.log(newArr, "copy array") 




    // ------ way 3 SPREAD OPERATOR ---- 

    let arr = [1,2,3,4, 5] // abc@ 123

    let newArr = [...arr] // abc@345
    
    newArr.push(180)


    console.log(arr, "org array") 
    console.log(newArr, "copy array") 


    //  ------ way 4 REDUCE ----- HW //// 













    // 





