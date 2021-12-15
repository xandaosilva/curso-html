x = parseInt(prompt(("Digite o primeiro número: ")));

while(x === "")
    x = parseInt(prompt(("Digite o primeiro número: ")));

y = parseInt(prompt(("Digite o segundo número: ")));

while(y === "")
    y = parseInt(prompt(("Digite o segundo número: ")));

soma = x + y;
subtracao = x - y;
multiplicacao = x * y;

alert("A soma é " + soma);
alert("A subtração é " + subtracao);
alert("A multiplicação é " + multiplicacao);

if(y === 0)
    alert("Impossível divisão por 0");
else{
    divisao = x / y;
    alert("A divisão é " + divisao);
}