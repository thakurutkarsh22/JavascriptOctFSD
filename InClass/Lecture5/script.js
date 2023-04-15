

// var a  =12;
// var b = 13;

// function abc() {
//     var a = 100;
//     console.log(a)
//     console.log(b)
// }

// abc()

// console.log(a)
// console.log(b)



//  --------------------------- try and catch -----------------------

console.log("hello")

function calculator(a, b, action) {
    try {
        let res;
        if(action === "add") {
            //  google server // google error add
            // throw Error('google error add')
            res = a + b;
        } else if (action === "sub") {
            // microsfot server // micro error sub
            throw Error('micro error sub')

            res = a - b;
        } else if (action === "multiply") {
            // digital ocean server
            res = a * b;
        }
        return res;
    } catch(error) {
        console.log('error is here')
        // console.log(error.message)

        if(error.message === "google error add") {
            console.log('G error')
        } else if (error.message === "micro error sub") {
            console.log('M error')
        }
    }
    
}

let result2  = calculator(1,2, 'sub') // -1
console.log(result2, " sub")

let result3  = calculator(1,2, 'multiply') // 2
console.log(result3, " multiply")


let result1  = calculator(1,2, 'add') // 3
console.log(result1, " add")



// console.log(result1, result2, result3 );