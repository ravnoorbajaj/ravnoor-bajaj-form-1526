let form = document.getElementById("contactForm");
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let message = document.getElementById("message");

function formValidator(ev) {
    //preventing default behaviour
    ev.preventDefault();

    let errors = [];
    let data = {};
    const checkEmailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //Validation for full name

    if (fullName.value !== "") {
        data.firstName = fullName.value;
    } else {
        errors.push("Full name is missing");
    }

    //Validation for email

    if (email.value !== "") {
        if(checkEmailRegex.test(email.value)){
            data.emaildata = email.value;
        }
        else {
            errors.push("Email Pattern is invalid");
        }
    } else {
        errors.push("Email is missing");
    }

    //Validation for msg

    if (message.value !== "") {
        data.msg = message.value;
    } else {
        errors.push("Message is missing");
    }

    //checking if errors array is empty or not

    if (errors.length != 0) {
        console.log("ERRORS\n");
        console.log(errors);
    } else {
        console.log("COLLECTED DATA");
        console.log(data);
    }
    
    // Clear text fields
    fullName.value = '';
    email.value = '';
    message.value = '';

}

form.addEventListener("submit", formValidator);
