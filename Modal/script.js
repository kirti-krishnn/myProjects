'use strict';

class Modal {
  constructor() {
    this.btnOpenModal = document.querySelectorAll('.show-modal');
    this.btnCloseModal = document.querySelector('.close-modal');
    this.modal_window = document.querySelector('.modal');
    this.overlay = document.querySelector('.overlay');
  }

  init() {
    this.addEventListeners();
  }

  openModal() {
    this.modal_window.classList.remove('hidden');
    this.overlay.classList.remove('hidden');
  }
  closeModal() {
    this.modal_window.classList.add('hidden');
    this.overlay.classList.add('hidden');
  }

  handlekeyPress(e) {
    if (e.key === 'Escape' && !this.modal_window.classList.contains('hidden')) {
      this.closeModal();
    }
  }

  addEventListeners() {
    for (let i = 0; i < this.btnOpenModal.length; i++) {
      this.btnOpenModal[i].addEventListener('click', this.openModal.bind(this));
    }
    this.btnCloseModal.addEventListener('click', this.closeModal.bind(this));
    this.overlay.addEventListener('click', this.closeModal.bind(this));
    document.addEventListener('keydown', this.handlekeyPress.bind(this));
  }
}

const md = new Modal();
md.init();
