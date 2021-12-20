document.addEventListener("click", function(e){
    const elemento = e.target;

    if(elemento.classList.contains("btn1")) alert("Você clicou no primeiro botão.");

    if(elemento.classList.contains("btn2")) alert("Você clicou no segundo botão.");

    if(elemento.classList.contains("btn3")) alert("Você clicou no terceiro botão.");

    if(elemento.classList.contains("d1")) console.log("Você clicou na div d1.");

    if(elemento.classList.contains("d1Span")) console.log("Você clicou no span dentro da div d1.");

    if(elemento.classList.contains("item-lista")) console.log("Você clicou na li.");
}.bind(this));
