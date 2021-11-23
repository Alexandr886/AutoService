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
const openPopupModalButtons = document.querySelectorAll('[data-popupmodal-target]');

const closePopupModalButtons = document.querySelectorAll('[data-popupclose-button]');

const popupOverlay = document.getElementById('popupoverlay');


openPopupModalButtons.forEach (button => {
   button.addEventListener('click', () => {
      const popupmodal = document.querySelector(button.dataset.popupmodalTarget)
      openPopupModal(popupmodal);
   })
})

popupOverlay.addEventListener('click', () => {
   const popupmodal = document.querySelectorAll('.popupmodal.active');
   popupmodal.forEach(popupmodal => {
         closePopupModal(popupmodal);
   })
})

closePopupModalButtons.forEach(button => {
   button.addEventListener('click', () => {
      const popupmodal = button.closest('.popupmodal');
      closePopupModal(popupmodal);
   })
})

function openPopupModal(popupmodal) {
   if (popupmodal == null) return
   popupmodal.classList.add('active');
   popupOverlay.classList.add('active');
}

function closePopupModal(popupmodal) {
   if (popupmodal == null) return
   popupmodal.classList.remove('active');
   popupOverlay.classList.remove('active');
}



//---------------Модальная форма------------------
const openFormModalButtons = document.querySelectorAll('[data-formmodal-target]');

const closeFormModalButtons = document.querySelectorAll('[data-formclose-button]');

const formOverlay = document.getElementById('formoverlay');


openFormModalButtons.forEach (button => {
   button.addEventListener('click', () => {
      const formmodal = document.querySelector(button.dataset.formmodalTarget)
      openFormModal(formmodal);
   })
})

formOverlay.addEventListener('click', () => {
   const formmodal = document.querySelectorAll('.formmodal.active');
   formmodal.forEach(formmodal => {
         closeFormModal(formmodal);
   })
})

closeFormModalButtons.forEach(button => {
   button.addEventListener('click', () => {
      const formmodal = button.closest('.formmodal');
      closeFormModal(formmodal);
   })
})

function openFormModal(formmodal) {
   if (formmodal == null) return
   formmodal.classList.add('active');
   formOverlay.classList.add('active');
}

function closeFormModal(popupmodal) {
   if (formmodal == null) return
   formmodal.classList.remove('active');
   formOverlay.classList.remove('active');
}