(function(){
    "use strict";
    var formulario = document.querySelector("form");
    var usuario = document.getElementById("txtUser");
    var senha = document.getElementById("txtPass");
    var btn = document.getElementById("btn");

    formulario.addEventListener("submit", function(e){
        if(!usuario.value && !senha.value) {
            alert("Preencha todos os campos");
            e.preventDefault();
            usuario.focus();
        }
        if(!usuario.value && senha.value){
            alert("Digite o usuário");
            e.preventDefault();
            usuario.focus();
        }
        if(usuario.value && !senha.value){
            alert("Digite a senha");
            e.preventDefault();
            senha.focus();
        }
    });
})();