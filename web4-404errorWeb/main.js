const open = document.querySelector('.nav-toggle');
const close = document.querySelector('.nav-close');
const menu = document.querySelector('.nav-menu');

open.addEventListener('click',()=>{
    menu.classList.add('active')
})
close.addEventListener('click',()=>{
    menu.classList.remove('active')
})

const sr = ScrollReveal({
    distance:'90px',
    duration: 3000,
})

sr.reveal('.text',{origin:'top',delay:400})
sr.reveal('.img',{origin:'bottom',delay:600})
// sr.reveal('.footer',{origin:'bottom',delay:800})