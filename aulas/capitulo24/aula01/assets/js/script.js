(function(){
    function calcularMedia(){
        var soma = 0;
        
        for(var i = 0; i < arguments.length; i++){
            soma+= arguments[i];
        }

        return  soma/i;
    }

    var primeiraMedia = calcularMedia(3,4,5);
    var segundaMedia = calcularMedia(4,6);
    var terceiraMedia = calcularMedia(4, 0, 10, 10);

    document.querySelector("#output").innerHTML += "Média: " + primeiraMedia + "<br><hr>";
    document.querySelector("#output").innerHTML += "Média: " + segundaMedia + "<br><hr>";
    document.querySelector("#output").innerHTML += "Média: " + terceiraMedia + "<br><hr>";
})();

