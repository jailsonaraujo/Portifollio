var btn=document.getElementById("botao-menu");

btn.addEventListener("click", function(){
    var menuLink=document.getElementById("menu-link");

    menuLink.classList.toggle("menuL");
});