var vetor = new Array(25, 30, 45, 28, 0, 12, 78, 64);

function somarPares(vetor) {
    var soma = 0;

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 === 0 && !isNaN(vetor[i])) soma+= vetor[i];
    }
    return soma;
}

var somaDosNumerosPares = somarPares(vetor);

document.write("A soma dos números pares é : " + somaDosNumerosPares);
