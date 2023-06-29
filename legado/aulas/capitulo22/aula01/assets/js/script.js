var dias = new Array("Domingo", "Segunda-feira" , "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");
var dataAtual = new Date();
var diaDaSemana = dataAtual.getDay();


alert("Bem vindo, hoje é " + dias[diaDaSemana]);