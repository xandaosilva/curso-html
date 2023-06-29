var x = parseInt(prompt(("Digite o primeiro número: ")));

while(x === "")
    x = parseInt(prompt(("Digite o primeiro número: ")));

var y = parseInt(prompt(("Digite o segundo número: ")));

while(y === "")
    y = parseInt(prompt(("Digite o segundo número: ")));

soma = x + y;
subtracao = x - y;
multiplicacao = x * y;
potencia = Math.pow(x, y);

alert("A soma é " + soma);
alert("A subtração é " + subtracao);
alert("A multiplicação é " + multiplicacao);
alert("O número " + x + " elevado a " + y + " é: " + potencia);

if(y === 0)
    alert("Impossível divisão por 0");
else{
    divisao = x / y;
    resto = x % y;
    alert("A divisão é " + divisao);
    alert("O resto da divisão de " + x + " por " + y + " é: " + resto)
}