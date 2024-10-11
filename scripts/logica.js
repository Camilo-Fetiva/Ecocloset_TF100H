const abrir=document.getElementById('abrir-modal');
const popup_container=document.getElementById('popup_container');
const salir=document.getElementById('salir');

abrir.addEventListener('click', () =>{
    popup_container.classList.add('show');
});

salir.addEventListener('click', () =>{
    popup_container.classList.remove('show');
});