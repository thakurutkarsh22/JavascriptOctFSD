const max = 20;
// const min = -20;




function displayRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 2*max) - 20; // between the range.
    const numElement = document.getElementById("num");
    numElement.innerText = randomNumber;
}