class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
}

Produto.prototype.mostrarInfo = function() {
    var mensagem = "";
    mensagem += "Nome do produto : " + this.nome + "<br>" + "Preço do produto : " + this.preco + "<br>" + "Estoque do produto : " + this.estoque + "<br>";
    return mensagem;
}

Produto.prototype.comprar = function(quantidade){
    var mensagem = ""
    if(!quantidade) mensagem += "Informe a quantidade que desaja comprar<br>";
    if(quantidade > this.estoque) mensagem += "Quantidade informada maior do que o estoque disponível<br>";
    else{
        this.estoque-= quantidade;
        var mensagem = "Produto comprado com sucesso<br>";
    }
    mensagem += Produto.prototype.mostrarInfo.call(this);
    return mensagem;
}

var produto1 = new Produto("Caneta", 2.2, 10);
var produto2 = new Produto("Caneca", 20, 100);

document.querySelector("#output").innerHTML += Produto.prototype.mostrarInfo.call(produto1) + "<br>";
document.querySelector("#output").innerHTML += Produto.prototype.comprar.call(produto1, 20) + "<br>";
document.querySelector("#output").innerHTML += Produto.prototype.mostrarInfo.call(produto2) + "<br>";
document.querySelector("#output").innerHTML += Produto.prototype.comprar.call(produto2, 90) + "<br>";
