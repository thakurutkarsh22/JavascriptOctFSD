// 1. innerHtml
// 2. append -> it take the element and add it to the last 


// ---------- Insertion Ways  --------------

// 1. append -> it take the element and add it to the last  (Node, string)

// const body = document.body;
// console.dir(body);


// Creation of H1 tag 

// const headingTag = document.createElement("h1");
// headingTag.textContent = "Selector Adv Topic - "

// body.append(headingTag)


// const headingTag2 = document.createElement("h2");
// headingTag2.textContent = "Selector subtopic ---- "

// body.append(headingTag2)



// 2. Prepend -> inserting the element in the first position

// const headingTag3 = document.createElement("h2");
// headingTag3.textContent = "We are the start"
// headingTag3.style.color = "red"

// body.prepend(headingTag3)




// const unorderedList = document.getElementById("names");


// const newMember = document.createElement("li") 
// newMember.textContent = "Avinash"

// unorderedList.prepend(newMember)


// 3. before -> inserts the elements before the selected element.


// const unorderedList = document.getElementById("names");

// const heading = document.createElement("h1");
// heading.textContent = "Heres the list of all the engineers";

// unorderedList.before(heading);



// 4.  after -> inserts the elements after the selected element.

// const unorderedList = document.getElementById("names"); 

// const paragraph = document.createElement("p");
// paragraph.textContent = "This is the end of the engineers list";

// unorderedList.after(paragraph);




// *** document.write -> do not use this, you can find this yourself


// ------- 4 new methods Insertion  (insertAdjacentHtml) ----------------- 


// const unorderedList = document.getElementById("names"); 

// unorderedList.insertAdjacentHTML("afterbegin" , "<li>Akash first</li>")
// unorderedList.insertAdjacentHTML("beforeend" , "<li>Akash last</li>")

// after Begin  -> will act as prepend.
//  before End -> will act as append



// 1. before Begin
// 2. before End

// 3. after Begin  -> before 
// 4. after End. -> after  

















