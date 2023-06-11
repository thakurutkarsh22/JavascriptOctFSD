const errorDiv = document.getElementById("errors-holder");
const resultDiv =  document.getElementById("result-holder");
const submitButton = document.getElementsByTagName("button")
const inputBox = document.getElementById("q_age");

function ageChange(e){
    let age = parseInt(e.target.value);
    // if(age) {
    //     age = age.trim(); // white spaces trimming from the input.
    // }
    if(age < 5) {
        errorDiv.textContent = "You need to be atleast 5 years old to participate"
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
        resetError()
    }

}

function handleSubmit(e){
    resetError()
    e.preventDefault()

    let age = parseInt(inputBox.value);
    console.log("age", age);

    if(age === 0) {
        errorDiv.textContent = 'Please choose age';
        return;
    }


    const ownPhoneCheckbox = document.getElementById("q_owns_phone").checked;

    if(ownPhoneCheckbox) {
        if(age < 13) {
            resultDiv.textContent = 'You are too young to have a phone';
        } else {
            resultDiv.textContent = "Use your phone in moderation";
        }
    } else {
        if(age < 13) {
            resultDiv.textContent = 'You will get a phone soon';
        } else {
            resultDiv.textContent = 'You should get a phone';
        }
    }
}

function resetError() {
    errorDiv.textContent = ""
}