// const modalBtnOpen = document.querySelector('js-open-modal');
// const modalBtnClose = document.querySelector('.js-close-modal');
// const modal = document.querySelector('js-modal');

// modalBtnOpen.addEventListener('click', toggleModal);
// modalBtnClose.addEventListener('click', toggleModal);

// function toggleModal() {
//   modal.classList.toggle('is-open');
// }

(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();

(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openMenuBtn: document.querySelector('[menu-mobile-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeMenuBtn: document.querySelector('[menu-mobile-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    menubar: document.querySelector('[menu-mobile]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.menubar.classList.toggle('is-open');
  }
})();
