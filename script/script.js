var prog=document.getElementById("progresso");
valor=0;
var id=setInterval(valorProg,100);

function valorProg(qtd){
    
    if(valor<qtd){
        valor++;
        prog.value=valor;
    }else{
        clearInterval(id);
    }
}

