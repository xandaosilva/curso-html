(function() {
    function calcularImc(peso, altura) {
        var imc = (peso/(Math.pow(altura,2)));
        return imc;
    }

    function mostrarClassificacaoImc(imc){
        var mensagem = "";

        if(imc < 17) mensagem += "Muito abaixo do peso";
        else if(imc < 18.5) mensagem += "Abaixo do peso";
        else if(imc < 25) mensagem += "Peso normal";
        else if(imc < 30) mensagem += "Sobrepeso";
        else if(imc < 35) mensagem += "Obesidade primeiro grau";
        else if(imc < 40) mensagem += "Obesidade segundo grau";
        else mensagem += "Obesidade terceiro grau"
        
        return mensagem;
    }

    var imcCalculado = calcularImc(120, 1.7);
    var imcClassificado = mostrarClassificacaoImc(imcCalculado);

    document.querySelector("#output").innerHTML += "IMC calculado: " + imcCalculado + "<br>Classificação: " + imcClassificado + "<br><hr>";

})();