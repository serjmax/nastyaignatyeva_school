var nav = document.getElementById('nav');
var toggle = document.querySelector('.top-bar__button');

toggle.onclick = function(){
    console.log("test")
    nav.classList.toggle('open');
}
