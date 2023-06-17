

// function sum (a,b) {
//     return a + b;
// }

// sum(1,2); //3


/*
    Question: How can you get it? 
    sum(1)(2) //3
    fun (2)
*/

function sum(num1) { //1
//
    function innerSum (num2) { //2 
        return num1 + num2;
    } 

    return innerSum;
//
}


// const sumWithOne = sum(1); // 

// // sumWithOne would be InnerSUm + ClosureObj -> {num1: 1}

// const ans = sumWithOne(2)

// console.log(ans, "answer");

console.log(sum(1)(2), "hey there ans")



/*
    Problem TODO: How to achieve
    sum(1)(2,3)(4,5,6,7)(8)()

    ans: 36
*/


