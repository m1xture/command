const refs = {
  openModalBtn: document.querySelector('[data-open-modal-tablet]'),
  closeModalBtn: document.querySelector('[data-close-modal-tablet]'),
  backdrop: document.querySelector('[data-backdrop-tablet]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

refs.backdrop.addEventListener('click', logBackdropClick);

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
}

function logBackdropClick() {
  console.log('Це клік в бекдроп');
}
