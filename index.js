'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')

const btnsOpenModal = document.querySelectorAll('.show-modal')    

console.log('uo');
console.log(btnsOpenModal);

console.log('printing using the for loop')

for(let i =0; i<3; i++){
    btnsOpenModal[i].addEventListener('click', ()=>{
        console.log('button clicked');

        modal.classList.remove('hidden');

        overlay.classList.remove('hidden');
    })
}


btnCloseModal.addEventListener('click', ()=>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
console.log(btnCloseModal);

overlay.addEventListener('click', ()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
   
})

document.addEventListener('keydown', 
(e)=>{
    console.log(e.key);

    if(e.key ==='Escape'){
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
})




