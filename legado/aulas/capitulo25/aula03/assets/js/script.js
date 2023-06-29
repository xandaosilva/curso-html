(function(){
    var trs = document.querySelectorAll(".js-tabela tbody .aluno");
    var x = 0;

    while(trs[x]){
        var linha = trs[x];
        var n1, n2, n3, n4, media;
        var tds = linha.querySelectorAll("td");

        n1 = acessarNotas(tds[1]);
        n2 = acessarNotas(tds[2]);
        n3 = acessarNotas(tds[3]);
        n4 = acessarNotas(tds[4]);

        media = calcularMedia(n1, n2, n3, n4);

        linha.querySelector(".aluno-m").textContent = media;

        x++;
    }

    function acessarNotas(td){
        return parseFloat(td.textContent);
    }
})();



