/**
 * Exercício feito através do alert
 * var nome = prompt("Digite o seu nome");
 * document.querySelector("#msg").textContent = "Seja bem vindo(a) " + nome;
 * 
 * Em negrito
 * document.querySelector("#msg").innerHTML = "Seja bem vindo(a) <strong>" + nome + "</strong>";
 * 
 * Através de botão 
 * var nomeAux = document.querySelector("#txtNome");
    function escreverNome() {
        var nome = nomeAux.value;
        document.querySelector("#msg").innerHTML = "Seja bem vindo(a) <strong>" + nome + "</strong>";
    }
 * 
 * 
*/

var texto = document.querySelector("#txtNome");
var nome = "Alexandre";
var sobrenome = "Rogério";

document.querySelector("#txtNome").value = nome + " " + sobrenome;
document.querySelector("#txtNome").disabled = true;

