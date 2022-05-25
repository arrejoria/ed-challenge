/************************************
 * Author: Lucas Exequiel Arrejoria *
 ***********************************/


const showModal = document.querySelector('#openBtn');
 const closeModal = document.querySelector('#closeBtn');
 const cta = document.querySelector('.cta_container');
 const modal = document.querySelector('.modal');

 showModal.addEventListener('click', (e) => {
     e.preventDefault();
         cta.classList.replace('active', 'hide');
         modal.classList.replace('hide', 'active');  
 })
 closeModal.addEventListener('click', (e) => {
     e.preventDefault();
         modal.classList.replace('active', 'hide');
         cta.classList.replace('hide', 'active');  
 })