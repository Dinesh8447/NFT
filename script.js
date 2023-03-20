const menu=document.querySelector('#mobilemenu')
const menulinks=document.querySelector('.navbar-menu')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')

})