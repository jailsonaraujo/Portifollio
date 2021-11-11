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

