(function(){
    var trs = document.querySelectorAll(".js-tabela tbody .aluno");
    var x = 0;

    while(trs[x]){
        var linha = trs[x];
        var tds = linha.querySelectorAll("td");
        var notas = acessarNumerosDasColunas(tds);
        var media = calcularMedia.apply(this, notas);
        
        linha.querySelector(".aluno-m").textContent = media;
        x++;
    }

    function acessarNotas(td){
        return parseFloat(td.textContent);
    }

    function acessarNumerosDasColunas(tds){
        var x = 0;
        var vet = [];

        while(tds[x]){
            if(!isNaN(tds[x].textContent) && tds[x].textContent !== "") vet.push(acessarNotas(tds[x]));
            x++;
        }
        return vet;
    }
})();



