// const form = document.getElementById('form');
// const userName = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('Cpassword');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     checkInput();
// });

// function checkInput() {
//     const userValue = userName.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const passValue = password2.value.trim();


//     if (userValue === '') {
//         setErrorFor(userName, 'No username found!');
//     } else {
//         setSuccessFor(userName);
//     }


//     if (emailValue === '') {
//         setErrorFor(email, 'No email found!');
//     } else {
//         setSuccessFor(email);
//     }


//     if (passwordValue === '') {
//         setErrorFor(password, 'No password found!');
//     } else {
//         setSuccessFor(password);
//     }

//     if (passValue === '') {
//         setErrorFor(password2, 'No password found!');
//     } else if (passwordValue !== passValue) {
//         setErrorFor(password2, 'Password does not match!');
//     }
//     else {
//         setSuccessFor(password2);
//     }

    
// }


// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');
//     small.innerText = message;
//     formControl.className = 'form-control error';
// }

// function setSuccessFor(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
// }


const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');


const contant1 = document.getElementById('tab-contant1');
const contant2 = document.getElementById('tab-contant2');
const contant3 = document.getElementById('tab-contant3');
const contant4 = document.getElementById('tab-contant4');

function openMain() {
    contant1.style.visibility = 'visible';
    contant2.style.visibility = 'hidden';
    contant3.style.visibility = 'hidden';
    contant4.style.visibility = 'hidden';

    btn1.classList.add('active-btn');
    btn4.classList.remove('active-btn');
    btn2.classList.remove('active-btn');
    btn3.classList.remove('active-btn');
};

function openAwards() {
    contant1.style.visibility = 'hidden';
    contant2.style.visibility = 'visible';
    contant3.style.visibility = 'hidden';
    contant4.style.visibility = 'hidden';

    btn2.classList.add('active-btn');
    btn1.classList.remove('active-btn');
    btn4.classList.remove('active-btn');
    btn3.classList.remove('active-btn');
};


function openExperiance() {
    contant1.style.visibility = 'hidden';
    contant2.style.visibility = 'hidden';
    contant3.style.visibility = 'visible';
    contant4.style.visibility = 'hidden';

    btn3.classList.add('active-btn');
    btn1.classList.remove('active-btn');
    btn2.classList.remove('active-btn');
    btn4.classList.remove('active-btn');
};


function openEducation() {
    contant1.style.visibility = 'hidden';
    contant2.style.visibility = 'hidden';
    contant3.style.visibility = 'hidden';
    contant4.style.visibility = 'visible';

    btn4.classList.add('active-btn');
    btn1.classList.remove('active-btn');
    btn2.classList.remove('active-btn');
    btn3.classList.remove('active-btn');

};



// =========== nav scroll fixing ********============

let navbar = document.getElementById('navbar');

window.onscroll = function () {
    scrollNav();
}

function scrollNav() {
    if (document.body.scrollTop>400) {
        navbar.classList.add('nav-scroll');
    } else {
        // navbar.style.transform = 'translateY(-100)';
        navbar.classList.remove('nav-scroll');
    }
}


// ************************** dark mode start********************************

let darkMode = document.getElementById('dark-mode');
let lightkMode = document.getElementById('light-mode');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-them')

    if (document.body.classList.contains('dark-them')) {
        lightkMode.style.visibility = 'visible';
        darkMode.style.visibility = 'hidden';
    } else {
        darkMode.style.visibility = 'visible';
        lightkMode.style.visibility = 'hidden';
    }
});

// darkMode.onclick = function () {
//     document.body.classList.toggle('dark-them')
// };



// ************************** dark mode end**********************************