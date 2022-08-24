/* CONTAINER WAS DEFINED IN SCRIPTS.JS */
/* CLOSEMODAL WAS DEFINED IN FORM SCRIPTS.JS */
/* FORM WAS DEFINED IN FORM VALIDATION.JS */
/* INPUTS WAS DEFINED IN FORM VALIDATION.JS */

const submitButton = document.querySelector('#submitForm');

submitButton.addEventListener('click', approved);
closeModal.addEventListener('click', resetForm);

function approved() {
   if(inputs[0 , 1, 2 , 3].value.length < 3) {
   form.style.display = 'flex'

   } else {
    form.style.display = 'none';
    container.classList.add('approved');
   }
};

function resetForm() {
    container.classList.remove('approved');
    form.style.display = 'flex';
    form.reset();
    inputs[0, 1, 2, 3].style.border = 'initial';
};

