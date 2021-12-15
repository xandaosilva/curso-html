var x = parseInt(prompt("Digite o primeiro número :"));

while(x === "")
    x = parseInt(prompt("Digite o primeiro número :"));

var y = parseInt(prompt("Digite o segundo número :"));

while(y === "")
    y = parseInt(prompt("Digite o segundo número :"));


if(x === y) alert("Empate");
else{
    var aleatorio = parseInt(Math.random() * 2);
    alert("Número aleatório gerado: " + aleatorio);
    (aleatorio === 0 && x < y || aleatorio === 1 && x > y) ? alert("Jogador 1 venceu") : alert("Jogador 2 venceu");
}
