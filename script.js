//---------------Бургер------------------
const openModalButtons = document.querySelectorAll('[data-modal-target]');

const closeModalButtons = document.querySelectorAll('[data-close-button]');

const overlay = document.getElementById('overlay');

openModalButtons.forEach (button => {
   button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal);
   })
})

overlay.addEventListener('click', () => {
   const modals = document.querySelectorAll('.modal.active');
   modals.forEach(modal => {
         closeModal(modal);
   })
})

closeModalButtons.forEach(button => {
   button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
   })
})

function openModal(modal) {
   if (modal == null) return
   modal.classList.add('active');
   overlay.classList.add('active');
}

function closeModal(modal) {
   if (modal == null) return
   modal.classList.remove('active');
   overlay.classList.remove('active');
}


//---------------Счетчик------------------
let number = document.querySelector('.customers__counter');
let numberTop = number.getBoundingClientRect().top;
let start = +number.innerHTML, end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
   if(window.pageYOffset > numberTop - window.innerHeight / 2) {
      this.removeEventListener('scroll', onScroll);
      let interval = setInterval(function() {
         number.innerHTML = ++start;
         if(start == end) {
            clearInterval(interval);
            number.innerHTML='17k';
         }
      }, 5);
   }
});


//---------------Popup-menu------------------
const openPopupModalButtons = document.querySelectorAll('[data-modal-target]');

const closePopupModalButtons = document.querySelectorAll('[data-close-button]');

const popupOverlay = document.getElementById('popup_overlay');

openModalButtons.forEach (button => {
   button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal);
   })
})

popupOverlay.addEventListener('click', () => {
   const modals = document.querySelectorAll('.popup_modal.active');
   modals.forEach(modal => {
         closeModal(modal);
   })
})

closePopupModalButtons.forEach(button => {
   button.addEventListener('click', () => {
      const modal = button.closest('.popup_modal');
      closeModal(modal);
   })
})

function openModal(modal) {
   if (modal == null) return
   modal.classList.add('active');
   popupOverlay.classList.add('active');
}

function closeModal(modal) {
   if (modal == null) return
   modal.classList.remove('active');
   popupOverlay.classList.remove('active');
}