function checkUsername() {
    let user_name = document.getElementById('firstName');

    let valid = false;
    const min = 3,
        max = 25;

    const input_user_name = user_name.value.trim();
    if (!isRequired(input_user_name)) {
        showError(user_name, 'please enter Full Name');
    } else if (!isBetween(input_user_name.length, min, max)) {
        showError(user_name, `Username must be between ${min} and ${max} characters.`)
    } else {
        if (!validateName(input_user_name)) {
            showError(user_name, `Username is not valid`)
        }
        else {
            showSuccess(user_name);
            valid = true;
        }
    }
    return valid;
};

function isRequired(value) {
    if (value === '')
        return false;
    return true;
}
function isBetween(length, min, max) {
    if (length < min || length > max)
        return false;
    return true;
}

function validateName(value) {
    const re = /^[a-z A-Z]+$/;
    return re.test(value);
}


function checkContactNumber() {
    let mobile_no = document.getElementById('phoneNumber');
    let valid = false;

    const mobile_no_input = mobile_no.value.trim();
    if (!isRequired(mobile_no_input)) {
        showError(mobile_no, 'enter contact number');

    } else if (!isValidContactNumber(mobile_no_input)) {
        showError(mobile_no, 'enter valid contact number')
    } else {
        showSuccess(mobile_no);
        valid = true;
    }
    return valid;
};


function isValidContactNumber(mobile_no_input) {
    const res = /^[6789][0-9]{9}$/;
    return res.test(mobile_no_input);
};

//check user plateform
function checkPlatform() {

    let user_city = document.getElementById('platform');
    let valid = false;
    let user_city_input = user_city.value.trim();

    if ((!isRequired(user_city_input)) || (user_city_input == "")) {
        showError(user_city, " please Select  platform.")
    }
    else {
        showSuccess(user_city);
        valid = true;
    }
    return valid;
}


//Bookin validation
function checkStartTime() {
    let starttime = document.getElementById('startdate');
    let valid = false;

    let starttime_input = starttime.value.trim();
    if (!isRequired(starttime_input)) {
        showError(starttime, "please select time");
    }
    else if (!isValidStartTime(starttime_input)) {
        showError(starttime, "Please enter a time at least 20 minutes later");
    }
    else {
        showSuccess(starttime);
        valid = true;
    }
    return valid;
}

function isValidStartTime(starttime) {
    const now = new Date();
    const currentDateString = now.toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format
    const enteredTimeString = `${currentDateString}T${starttime}`;
    const enteredTime = new Date(enteredTimeString).getTime();
    let currentTime = now.getTime();
    currentTime = currentTime + (20 * 60 * 1000);
    if (currentTime > enteredTime)
        return false;
    return true;
}

function checkFormData() {
    if (checkUsername() && checkContactNumber() && checkStartTime() && checkPlatform()) {
        return true;
    }
    else {
        checkUsername();
        checkContactNumber();
        checkStartTime();
        checkPlatform();
        return false;
    }
}


function showError(input, message) {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
}


function showSuccess(input) {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


export { checkUsername, checkContactNumber, checkStartTime, checkPlatform, checkFormData }