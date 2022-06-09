const palavras = document.querySelectorAll("[draggable='true']");
const soltar = document.querySelector('.container-drag');

function comecoArrastar(){
    // console.log('Coemcou');

    this.classList.add('arrastando');
}

function entrouSoltar() {
    // this.classList.add("hover");
    const elementoArrastado = document.querySelector(".arrastando");
    this.appendChild(elementoArrastado);
}

function saiuSoltar() {
    
}

palavras.forEach((palavra)=>{
    palavra.addEventListener("dragstart", comecoArrastar);
})

soltar.addEventListener("dragover", entrouSoltar);
soltar.addEventListener("dragleave",saiuSoltar);