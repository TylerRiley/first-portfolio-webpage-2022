const form = document.getElementById('form');
const FullName = document.getElementById('FullName');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const FullNameValue = FullName.value.trim();
    const emailValue = email.value.trim();

    if(FullNameValue === '' ){
        setError(FullName, 'Name is Required');
    } else {
        setSuccess(FullName);
    }

    if(emailValue === '' ){
        setError(email, 'Email is Required');
    } else if(!isValidEmail(emailValue)) {
        setError(email, 'This Email is Invalid');
    }
     else {
        setSuccess(email);
     }
};
 