var prog=document.getElementById("prog");
valor=0;
var id=setInterval(function(){
    prog.addEventListener("load",valorProg(50));
},100);

function valorProg(qtd){
    
    if(valor<qtd){
        valor++;
        prog.style.width=valor+"%";
    }else{
        clearInterval(id);
    }
}

// animar menu
const targetMenu=document.querySelectorAll('[data-backGround]');
const targetAnimaSecao=document.querySelectorAll('[data-anime]');

const animaClassMenu="corFundo";
const animaClassSecao="aparecer";

function animaScroll(){
    const windowTopMenu=window.pageYOffset-370;
    const windowTopSecao=window.pageYOffset + ((innerHeight * 3)/4);

    targetMenu.forEach(function(elementMenu){
        if(windowTopMenu > elementMenu.offsetTop){
            elementMenu.classList.add(animaClassMenu);
        }else{
            elementMenu.classList.remove(animaClassMenu);
            elementMenu.style.transition=" all .7s";
        }
    });

    targetAnimaSecao.forEach(function(elementSecao){
        if(windowTopSecao > elementSecao.offsetTop){
            elementSecao.classList.add(animaClassSecao);
        }else{
            elementSecao.classList.remove(animaClassSecao);
        }
    });
    
}

window.addEventListener('scroll', function (){
    animaScroll();
});

