const menu_bar = document.getElementById('menu-bar');
const nav_links = document.querySelector('.nav-links'); 

menu_bar.onclick = function(){
    nav_links.classList.toggle('mobile-view');
}