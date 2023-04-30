/*
    ... SELECTORS...
*/


// 1. getElementsByTagName - > HTMLCollection(Array Like thing)

// let paragraphTags = document.getElementsByTagName("p");

// console.log(paragraphTags)


// 2. getElementById -> Single Element.

// let paraElement = document.getElementById("paragraph");
// console.log(paraElement);


// 3. getElementsByClass -> HTMLCollection (Array like)

// let containerElement = document.getElementsByClassName("container")
// console.log(containerElement)


// 4. querySelector -> it takes the CSS SELECTOR .

const paragraphQueryele = document.querySelector("div > p");
console.log(paragraphQueryele);









