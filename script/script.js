var btn=document.getElementById("botao-menu");

btn.addEventListener("click", function(){
    var menuLink=document.getElementById("menu-link");

    menuLink.classList.toggle("menuL");
});

// BARRAS DE PROGRESSO DA SEÇÂO CONHECIMENTOS

// animação conhecimentos 1
var progSecondary1=document.getElementById("progSecondary1");
var nivelProg1=document.getElementById("nivelProg1");

var width=95;
var tamanho=0;

function animaProg1(){

    if(tamanho>=width){
        clearInterval(intervalo1);
    }else{
        tamanho++;
        progSecondary1.style.width=tamanho+"%";
        nivelProg1.innerHTML=tamanho+"%";
    }
}
var intervalo1=setInterval(animaProg1,10);

// animação conhecimentos 2
var progSecondary2=document.getElementById("progSecondary2");
var nivelProg2=document.getElementById("nivelProg2");

var width2=80;
var tamanho2=0;

function animaProg2(){
    if(tamanho2>=width2){
        clearInterval(intervalo);
    }else{
        tamanho2++;
        progSecondary2.style.width=tamanho2+"%";
        nivelProg2.innerHTML=tamanho2+"%";
    }
}
var intervalo2=setInterval(animaProg2,10);

// animação conhecimentos 3
var progSecondary3=document.getElementById("progSecondary3");
var nivelProg3=document.getElementById("nivelProg3");

var width3=75;
var tamanho3=0;

function animaProg3(){
    if(tamanho3>=width3){
        clearInterval(intervalo3);
    }else{
        tamanho3++;
        progSecondary3.style.width=tamanho3+"%";
        nivelProg3.innerHTML=tamanho3+"%";
    }
}
var intervalo3=setInterval(animaProg3,10);