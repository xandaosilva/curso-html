(function(){
    var paragrafos = document.querySelectorAll("p");
    
    for(let i = 0; i < paragrafos.length; i++){
        paragrafos[i].textContent = i + " - Este parágrafo foi hackeado por Alexandre Rogério";
    }
})();
