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
