function mostrarMensagemAlert(){
    var lado = parseFloat(prompt("Digite o valor do lado da área"));
    var altura = parseFloat(prompt("Digite o valor da altura da área"));

    try {
        var area = calcularArea(lado, altura);   
    } catch (error) {
        area = error;
    }

    alert("A área total é : " + area);
}

function mostrarMensagemOutput(){
    var lado = parseFloat(prompt("Digite o valor do lado da área"));
    var altura = parseFloat(prompt("Digite o valor da altura da área"));
    
    try {
        var area = calcularArea(lado, altura);   
    } catch (error) {
        area = error;
    }

    document.querySelector("#container-resposta").innerHTML = "A área total é : " + area;
}

function calcularArea(lado, altuta){
    if(lado === undefined || altuta === undefined)
        throw new Error("A função calcular precisa receber dois números .");
    if(isNaN(lado) || isNaN(altuta))
        throw new Error("Informe apenas números .");
    return lado * altuta;
}

mostrarMensagemAlert();