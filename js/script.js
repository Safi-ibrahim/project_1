// to set fixed navbar when scroll down
window.onscroll = function(){
    if(window.scrollY > 52) {
        document.getElementById('nav').classList.add('navbar_js');
        document.getElementById('reblace_nav_js').classList.add('reblace_nav_js');
    }else{
        document.getElementById('nav').classList.remove('navbar_js');
        document.getElementById('reblace_nav_js').classList.remove('reblace_nav_js');
    }
}