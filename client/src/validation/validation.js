function checkUsername3() {
    let user_name = document.getElementById('firstName');


    let valid = false;
    const min = 3,
        max = 25;

    const input_user_name = user_name.value.trim();
    if (!isRequired3(input_user_name)) {
        showError3(user_name, 'Username cannot be blank.');
    } else if (!isBetween3(input_user_name.length, min, max)) {
        showError3(user_name, `Username must be between ${min} and ${max} characters.`)
    } else {
        if (!validateName(input_user_name)) {
            showError3(user_name, `Username is not valid`)
        }
        else {
            showSuccess3(user_name);
            valid = true;
        }
    }
    return valid;
};

function isRequired3(value) {
    if (value === '')
        return false;
    return true;
}
function isBetween3(length, min, max) {
    if (length < min || length > max)
        return false;
    return true;
}

function validateName(value) {
    console.log("Value :", value)
    const re = /^[a-zA-Z]+$/;
    return re.test(value);
}

function showError3(input, message) {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
}

function showSuccess3(input) {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}



function checkMobileNumberUp2() {
    let mobile_no = document.getElementById('phoneNumber');
    let valid = false;

    const mobile_no_input = mobile_no.value.trim();
    console.log(mobile_no_input);
    if (!isRequired2(mobile_no_input)) {
        showError2(mobile_no, 'Contact cannot be blank.');

    } else if (!ischeckMobileNumberSignUpValid2(mobile_no_input)) {
        showError2(mobile_no, 'Contact is not valid.')
    } else {
        showSuccess2(mobile_no);
        valid = true;
    }
    return valid;
};

function isRequired2(value) {
    if (value == "")
        return false;
    else
        return true;
}
function showError2(input, message) {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
}


function showSuccess2(input) {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}
function ischeckMobileNumberSignUpValid2(mobile_no_input) {
    console.log("check mobile");
    const res = /^[6789][0-9]{9}$/;
    return res.test(mobile_no_input);
};



//Bookin validation 
function checkBookStartTime5() {
    // let bookingstartdate = document.getElementById('bookstartdate');
    let starttime = document.getElementById('startdate');

    let valid = false;
    let bookingstartdate_input = starttime.value.trim();

    if (!isRequired5(bookingstartdate_input)) {
        showError5(starttime, "Select First Date.");
    }
    else {
        let starttime_input = starttime.value.trim();

        if (!isRequired5(starttime_input)) {
            showError5(starttime, "Time cannot be blank.");
        }
        else if (!isValidBookStartTime5(bookingstartdate_input, starttime_input)) {
            showError5(starttime, "invalid Time input");
        }
        else {
            showSuccess5(starttime);
            valid = true;
        }
        return valid;
    }
    return valid;
}
function isRequired5(value) {
    if (value == "")
        return false;
    return true;
}
function isValidBookStartTime5(startdate, starttime) {

    let enteredtime = new Date(`${startdate}T${starttime}`).getTime();
    let currenttime = new Date().getTime();
    if (currenttime > enteredtime)
        return false;
    return true;
}
function showSuccess5(input) {

    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}


export { checkUsername3, checkMobileNumberUp2, checkBookStartTime5 }