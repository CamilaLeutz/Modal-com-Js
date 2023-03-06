const openModalButton = document.querySelector("#open-modal");
const closeModaButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[openModalButton, closeModaButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});