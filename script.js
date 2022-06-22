const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('Cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const userValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passValue = password2.value.trim();


    if (userValue === '') {
        setErrorFor(userName, 'No username found!');
    } else {
        setSuccessFor(userName);
    }


    if (emailValue === '') {
        setErrorFor(email, 'No email username found!');
    } else {
        setSuccessFor(email);
    }


    if (passwordValue === '') {
        setErrorFor(password, 'No password found!');
    } else {
        setSuccessFor(password);
    }

    if (passValue === '') {
        setErrorFor(password2, 'No password found!');
    } else if (passwordValue !== passValue) {
        setErrorFor(password2, 'Password does not match!');
    }
    else {
        setSuccessFor(password2);
    }

    
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}