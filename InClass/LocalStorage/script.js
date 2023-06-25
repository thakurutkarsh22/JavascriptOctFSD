

// Save in Local storage ...... 

// localStorage.setItem("name", "uktarsh"); // 0.0000001 sec

localStorage.setItem("name", "huggeeee data"); // 10 sec sec  
localStorage.setItem("namecc", "huggeeee data111"); // 10 sec sec 

console.log("console ans"); 


/*
    Question: Will I see console ans in CONSOLE or will I see "huge data" in your local Storage ? 

    will js Wait for 10 sec for the localStorage setItem operation ? // yes or no ?

    Yes it will wait bec localStorage operation are synchronous ..... 

*/

// console.log(localStorage.length, "length of the local storge")




// Get from Local Storage 


const nameKey  = localStorage.getItem("name")
console.log(nameKey, "name Key");




// make sure every Object you are string in the localStorage that is CONVERTED to strings 
// bec LocalStorage dosent Have capability to store objects


// localStorage.setItem("item", {name: "utkarsh", class: 9}); // this will not work
localStorage.setItem("item", JSON.stringify({name: "utkarsh", class: 9})); // this will not work


// Now you need the object back 

let stringObj = localStorage.getItem("item")

// now we need to convert this stringObj to real Object

const realObj = JSON.parse(stringObj)


console.log(realObj);


