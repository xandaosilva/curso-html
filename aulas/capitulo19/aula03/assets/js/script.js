var ano = 1004;

while(ano <= 2021){
    if((ano % 400 === 0)  || !(ano % 100 === 0)) document.write(ano + "<br><hr>");
    else document.write(ano + " não é bissexto<br><hr>");
    ano+= 4;
}