let menu= document.querySelector('#menu');
let navbar= document.querySelector('.barramenu');
let videoBtn=document.querySelectorAll('.vid-btn');
/*para abrir menu en responsive */ 
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('activar');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('activar');
}

/*abrir busqueda*/ 
document.querySelector('#busca').onclick = () =>{
    document.querySelector('#busqueda').classList.toggle('activar');
}

document.querySelector('#cerrar').onclick = () =>{
    document.querySelector('#busqueda').classList.remove('activar');
}

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controles .activo').classList.remove('activo');
        btn.classList.add('activo');
        let src= btn.getAttribute('data-src');
        document.querySelector('#deslizar').src = src;
    });
});