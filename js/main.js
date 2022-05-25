/************************************
 * Author: Lucas Exequiel Arrejoria *
 ***********************************/
 const cta = document.querySelector('.cta_container'),
       modal = document.querySelector('.modal');

 const buttons = {
    open: document.querySelector('#openBtn'),
    close: document.querySelector('#closeBtn')
}

 const {open, close} = buttons;
 
 open.addEventListener('click', (e) => {
     e.preventDefault();
         cta.classList.replace('active', 'hide');
         modal.classList.replace('hide', 'active');  
 })
 
 close.addEventListener('click', (e) => {
     e.preventDefault();
         modal.classList.replace('active', 'hide');
         cta.classList.replace('hide', 'active');  
 })