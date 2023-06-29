class Pessoa{
    constructor(nome, cpf, rg, idade, altura, peso, sexo){
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.sexo = sexo;
    }
}

Pessoa.prototype.mostrarInfo = function(){
    var msg = "";
    msg += "Nome: " + this.nome + "<br>CPF: " + this.cpf + "<br>";
    msg += "RG: " + this.rg + "<br>Idade: " + this.idade + "<br>";
    msg += "Altura: " + this.altura + " m<br>Peso: " + this.peso + "Kg<br>";
    msg += "Sexo: " + this.sexo + "<br>";
    return msg;
}

const pessoa1 = new Pessoa("Primeira Pessoa", "111.111.111-11", "MG-111.111.111", 20, 1.5, 50, "F");
const pessoa2 = new Pessoa("Segunda Pessoa", "222.222.222-22", "MG-222.222.222", 30, 1.6, 60, "F");
const pessoa3 = new Pessoa("Terceira Pessoa", "333.333.333-33", "MG-333.333.333", 40, 1.7, 70, "M");
const pessoa4 = new Pessoa("Quarta Pessoa", "444.444.444-44", "MG-444.444.444", 50, 1.8, 80, "M");

var pessoas = [pessoa1, pessoa2, pessoa3, pessoa4];

for(let i = 0; i < pessoas.length; i++){
    document.querySelector("#output").innerHTML += Pessoa.prototype.mostrarInfo.call(pessoas[i]) + "<br><hr>";
}

