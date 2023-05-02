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

// const paragraphQueryele = document.querySelector("div > p");
// console.log(paragraphQueryele);




/*
    Updation
*/


// 1. innerHtml -> dangerous should be used carefully.

// 3. innerText

// 2. textContent -> formatting will not be saved. 


// InnerHtml

// -> space in html : &nbsp

// const card = document.getElementById("card"); // div ? 

// console.log("------ card ------ ")
// console.dir(card);

// card.innerHTML = "hey I am changed"
// card.innerHTML = `
// <h1> I am &nbsp &nbsp &nbsp &nbsp &nbsp a student</h1> 
// <p> ipsem lorem para</p>

// `

// this innerHtml is securityThreat as the script tag can be used 
// and js can access cookies.
// indexedDB .... 





// --->  innerText

// all the  fomatting except space will be saved, new line, tab 

// \n -> new line 
//  space -> \u00A0 ,  &nbsp

// card.innerText = `abcd
// defg
// uiop
// qwer
// klkkl  \u00A0     mnbvc
// `



//  ------- textContent -------- 
// formatting will be lost .. 

// card.textContent = `hey this is allet for someone whi is associate with sadkjhaskdjh
//  lajsbdlasjkflasjbflasjdfblasdjflasj   flasjbdflasdjbflaskjbhf 
//  laksdjbflasdjfhladskjbflasdkjfblasdkjhf 
//  lkadsjbflkadsjhbfjkds
// defg
// uiop      asjdasdjasjd
// qwer
// klkkl                    mnbvc
// `;



// style 

// card.style.color = "purple"



// <!-- Question -->
// <!-- you task is to write a function searches for the perticular name -->


// 1. Select the element

const elemnt = document.getElementById("names")
console.log("------- element -------")

console.dir(elemnt)

const childrens = elemnt.children; // HTML Collection (Array Like structure)

// Html collection does not have forEach Method.

// childrens.forEach(liElement => {
//     if(liElement.textContent === "varun") {
//      console.log('result is true')
//     }
//  })

const childrenArray = Array.from(childrens);

console.log(childrens, "html collection")

console.log(childrenArray, "Array ")

function SearchName(name) {
    return childrenArray.find(liElement => {
        return liElement.textContent === name
    })
}



// Queston -> change the last name .... 

// childrenArray[childrenArray.length -1].textContent = "utkarsh"



// ----- ------  Addtion in the DOM...... 

// 1. Create element 
const liElement = document.createElement("li"); 
// console.log("liElement new ", liElement)

// 2. Edit the element  -> edit the name

liElement.innerText = "Utkarsh"


// 3. Adding 

// Way 1 -> append

const unorderedList = document.getElementById("names");// [li, li li li li ]


// // -> Adding things in the last .

// unorderedList.append(liElement);


//  Way 2 -> innerHtml


unorderedList.innerHTML =  unorderedList.innerHTML + "<li>Utkarsh</li>\n"



// ------ Removal of Element -------------


// 1. Select the element to be Removed
// 2. To basically do a .remove() on that element

/////// -----  to remove the whole list
// const elementThatIWantToRemove = document.getElementById("names")

// elementThatIWantToRemove.remove();


// const removeLastElement = document.querySelector("#names > li:nth-child(6)");
// removeLastElement.remove();
// console.log(removeLastElement);
























