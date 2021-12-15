var numero = parseFloat(prompt("Digite um número"));

function mostrarInfo(parametro){
    var resposta = document.querySelector("#container-resposta");
    resposta.innerHTML = parametro;
}

function iniciarCalculo(operador){
    var primeiroNumero = parseFloat(document.querySelector("#container-resposta").textContent);
    var segundoNumero = parseFloat(prompt("Digite um número"));
    var resposta = calcular(primeiroNumero, segundoNumero, operador);
    mostrarInfo(resposta);
}

function calcular(primeiroNumero, segundoNumero, operador) {
    var resposta = null;

    if(operador === "+")
        resposta = primeiroNumero + segundoNumero;
    else if(operador === "-")
        resposta = primeiroNumero + segundoNumero;
    else if(operador === "*")
        resposta = primeiroNumero + segundoNumero;
    else
        resposta = primeiroNumero + segundoNumero;
    return resposta;
}

mostrarInfo(numero);