const form = document.getElementById('form');
const inputs = document.querySelectorAll('.inputsRequired');
const errors = document.querySelectorAll('.errorMessage');
const emailRegex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


form.addEventListener('submit', (e) => {
    e.preventDefault();
   nameValidate();
   emailValidate();
   mainPasswordValidate();
   mainPasswordValidate();
   secondPasswordValidate();
});


function setError(index) {
   inputs[index].style.border = '2px solid #e63636';
   errors[index].style.display = 'block';
}

function removeError(index) {
    inputs[index].style.border = '';
    errors[index].style.display = 'none';
}

function nameValidate() {
    if(inputs[0].value.length < 5) {
       setError(0);
      
    } else {
       removeError(0);
    }
};

function emailValidate() {
    if(!emailRegex.test(inputs[1].value)) {
       setError(1);

    } else {
       removeError(1); 
    }
};

function mainPasswordValidate() {
    if(inputs[2].value.length < 5) {
        setError(2);
    } else {
        removeError(2);
    }
};

function secondPasswordValidate() {
    if(inputs[3].value != inputs[2].value) {
        setError(3);
    } else {
        removeError(3);
    }
};

