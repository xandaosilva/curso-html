var numero = parseFloat(prompt("Digite um número: "));
var indice = 1;

while(indice <= 1000){
    document.write(numero + " * " + indice + " = " + (numero * indice) + " <br>");
    if(indice % 10 === 0 && indice > 0) document.write("<hr>");
    indice++;
}
