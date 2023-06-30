const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('#closed');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',clo);

function show(){
  mainMenu.style.display = 'flex'
  mainMenu.style.top = '0';
}

function clo(){
    mainMenu.style.top ='-100%';
}