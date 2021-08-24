var btn=document.getElementById("botao-menu");

btn.addEventListener("click", function(){
    var menuLink=document.getElementById("menu-link");

    menuLink.classList.toggle("menuL");
});

// BARRAS DE PROGRESSO DA SEÇÂO CONHECIMENTOS
var progSecondary1=document.getElementById("progSecondary1");
var nivelProg1=document.getElementById("nivelProg1");

var progSecondary2=document.getElementById("progSecondary2");
var nivelProg2=document.getElementById("nivelProg2");

var width=90;
var tamanho=0;

function animaProg(){
    if(tamanho>=width){
        clearInterval(intervalo);
    }else{
        tamanho++;
        progSecondary1.style.width=tamanho+"%";
        nivelProg1.innerHTML=tamanho+"%";
    }
}
var intervalo=setInterval(animaProg,10);