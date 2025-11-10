const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

/*text*/

var typed= new Typed(".text", {
    strings: ["tecnico em informática" , "desenvolvedor Web" , "desenvolvedor python" , "aux. administrativo"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});