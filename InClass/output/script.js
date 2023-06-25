// Global execution context

/*
    Question1: 

    Explanation: Var a = b= 3, only a is declared and not b. 
    so b = 3 tries to assign value in FEC but dont find b there, then it goes to GEC 
    there also it dosent find the b, but the forgiving nature of JS  makes a new Variable 
    b in GEC ans assigns the value 3.
*/

(function(){
  // Function execution contexrt
    var a = b = 3;

    // This upper code does not correspond to this 
    // var a = 3
    // var b = 3
    
})();

//
console.log(a) // Error
console.log(b) // 3


/*
    Question2: 

    function getPersonInfo(one, two, three) {
      console.log(one);
      console.log(two);
      console.log(three);
    }
    const person = 'Lydia';
    const age = 21;

getPersonInfo`${person} is ${age} years old`;

    
*/


