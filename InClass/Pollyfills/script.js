// Pollyfills 




// Map 

const resultMap = [89, 55, 68, 40].map( (item, index ) => {
    return {
        value: item,
    }
} )

console.log(resultMap, "map");


// myMap

/*


*/

Array.prototype.myMap = function( callback ) {

    let arr = this

    const result = []; // this collects the returned val from the callback funciton.

    for(let item of arr) {
        const returnVal = callback(item)
        result.push(returnVal)
    }

    return result
}

//this 

const res = [123,123,123].myMap((item, index ) => {
    return {
        value: item,
    }
} )

console.log(res, "my Map");


// call 

// apply 


// bind 




