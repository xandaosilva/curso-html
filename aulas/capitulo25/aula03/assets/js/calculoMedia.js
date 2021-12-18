function calcularMedia(){
    var soma = 0;
    
    for(var i = 0; i < arguments.length; i++){
        soma+= arguments[i];
    }

    return  soma/i;
}