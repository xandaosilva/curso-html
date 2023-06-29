(function(){
    'use strict';

    var txtMsg = document.getElementById('msg');
    var restaContainer = document.getElementById('restaContainer');
    var resta = document.getElementById('resta');
    var maxima = txtMsg.maxLength;
    
    function mostrarContainerResta(){
        restaContainer.style.display = 'block';
    }
    
    function checkLength(e){
        var numeroLetrasDigitadas = this.value.length;
        var caracteresRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas);
        mostrarCaracteresRestantes(caracteresRestantes);
    }
    
    function mostrarCaracteresRestantes(n){
        resta.textContent = n;
    }

    mostrarContainerResta();
    mostrarCaracteresRestantes(maxima);
    txtMsg.addEventListener('input', checkLength);

})();