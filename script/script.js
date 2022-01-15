// Animar nome e titulo cargo
const nomePessoa=document.getElementById('nome-pessoa')
const tituloCargo=document.getElementById('titulo-cargo')

function animarNomes(np,tc){
    // animacção do primeiro elemento
    let nome = np.innerHTML.split('')
    nomePessoa.innerHTML=''
    nome.forEach((letra,id1)=>{
        setTimeout(()=>{
            nomePessoa.innerHTML+=letra
        },100*id1)
    })

    // animacção do segundo elemento
    let titulo = tc.innerHTML.split('')
    tituloCargo.innerHTML=''
    titulo.forEach((caracter,id2)=>{
        setTimeout(()=>{
            tituloCargo.innerHTML+=caracter
        },100*id2)
    })
}
setInterval(()=>{
    animarNomes(nomePessoa,tituloCargo)
},4000)
// mostrar menu mobile

document.getElementById("btnAmburguer").addEventListener("click", function(){
    // var btnAmburguer=document.getElementById("btnAmburguer");
    // btnAmburguer.style.zIndex="5";
    document.querySelector(".ul").classList.toggle("menuLateral");
});

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

