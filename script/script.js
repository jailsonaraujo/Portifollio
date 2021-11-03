window.addEventListener("scroll", function(){
    if(window.scrollY>410){
        setInterval(frame1, 80);
        setInterval(frame2, 80);
        setInterval(frame3, 80);
    }
});

// javascript **************************************
var elemento1=document.getElementById("barra1");
var width1=0;
var tamanho1=50;
// var id1=setInterval(frame1, 10);

function frame1(){
    if(width1 < tamanho1){
        width1++;
        elemento1.style.width=width1+'%';
        document.getElementById("painel1").innerHTML=width1 * 1+'%';
    }else{
        // clearInterval(id1);
    }
}

// css ***********************************************
var elemento2=document.getElementById("barra2");
var width2=0;
var tamanho2=85;
// var id2=setInterval(frame2, 20);

function frame2(){
    if(width2 < tamanho2){
        width2++;
        elemento2.style.width=width2+'%';
        document.getElementById("painel2").innerHTML=width2 * 1+'%';
    }else{
        // clearInterval(id2);
    }
}

// html *******************************************************
var elemento3=document.getElementById("barra3");
var width3=0;
var tamanho3=90;
// var id3=setInterval(frame3, 30);

function frame3(){
    if(width3 < tamanho3){
        width3++;
        elemento3.style.width=width3+'%';
        document.getElementById("painel3").innerHTML=width3 * 1+'%';
    }else{
        // clearInterval(id3);
    }
}

// animando o dataset automatico com scroll
const target=document.querySelectorAll('[data-anime]');
const animaClass="animation";

function animaScroll(){
    const windowTop=pageYOffset;
    target.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animaClass);
        }else{
            element.classList.remove(animaClass);
        }
    })
    
}

window.addEventListener("scroll", animaScroll);
