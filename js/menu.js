const nav = document.querySelector('#nav ul');
const hamburguer = document.getElementById('hamburguer');

hamburguer.addEventListener('click', ()=>{
    nav.classList.toggle('toggle');
})