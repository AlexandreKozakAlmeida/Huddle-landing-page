const closeModal = document.querySelector("#close");
const openModal = document.querySelector('#register');
const container = document.querySelector(".container");

openModal.addEventListener('click', modalToggle);
closeModal.addEventListener('click', modalToggle);

function modalToggle() {
    container.classList.toggle('active');
};



