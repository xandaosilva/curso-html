class Pessoa{
    constructor(nome, email){
        this.nome = nome;
        this.email = email;
    }
}

const pessoa1 = new Pessoa("José", "jose@email.com");
const pessoa2 = new Pessoa("Maria", "maria@email.com");
const pessoa3 = new Pessoa("Antônio", "antonio@email.com");

var pessoas = new Array(pessoa1, pessoa2, pessoa3);

for(let i = 0; i < pessoas.length; i++){
    document.querySelector("#output").innerHTML += "Nome: " + pessoas[i].nome + " - Email: " + pessoas[i].email + "<br><hr>";
}

