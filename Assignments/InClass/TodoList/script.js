

// Selector -> 1. Select the input box so that i can get the TASK
// 2. TO get the button so that we can listen to the click 
// 3. so that i can append and delete items from the TODO LIST.

const inputBox = document.querySelector(".todo-input");
const addTodoItemButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");




// EVENT LISTNERS 

addTodoItemButton.addEventListener("click", addTodoItem)



// FUNCTIONS 

// Responsibility of this function will be to add an item in the TODO list
function addTodoItem(event) {
    // Prevent the page reload 
    event.preventDefault();

    // name: 
    const todoName = inputBox.value;

    // THis is for Efficiency so that blank tod does not get added up in the list.
    if(!todoName) {
        return;
    }

    // Create new Element
    const newTodoDiv = document.createElement("div")

    // How to add a class 
    newTodoDiv.classList.add("todo") // any class 

    // Creating list item 
    const newTODO = document.createElement("li")
    newTODO.innerText = todoName;
    newTODO.classList.add("todo-item")

    newTodoDiv.appendChild(newTODO);


    // Button Complete 
    const completeButton = document.createElement("button");
    completeButton.innerText = "Completed";
    completeButton.classList.add("complete-btn")
    completeButton.onclick = markItCheck

    newTodoDiv.appendChild(completeButton);


    // DeleteButton

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("trash-btn")
    deleteButton.onclick = deleteItem 

    newTodoDiv.appendChild(deleteButton);


    // Appedning the Div (buttons, todo item ) to the list 
    todoList.appendChild(newTodoDiv)


    // 2. Task would be to clear the text field 
    inputBox.value = ""
}

function markItCheck(event) {
    const parentElemtn = event.target.parentElement
    const nameOfTODOElement = parentElemtn.firstChild;

    // nameOfTODOElement.classList.add("completed")
    nameOfTODOElement.classList.toggle("completed") 

    // check if element has class or not
        //  -> not have a class  -> add the class
        // -> if element has the class -> remove the class
}


function deleteItem(event) {
    console.log("delete items")
    console.log(event)
    const parentElemtn = event.target.parentElement // div (buttons, todo item)
    parentElemtn.remove()
}








