function escreva(texto){
    console.log(texto);
}

escreva('saihdfoasdknfoiansdf');

function espaço(){
    console.log('--------------------------------');
}

espaço(); ///////////////////////////////////////////////////

function soma(a,b){
    return a + b;
}

let resultado = soma(1,3);
escreva(resultado);

espaço();///////////////////////////////////////////////////

const somar = function(a,b){return a+b;}
console.log(somar(1,3));

espaço();///////////////////////////////////////////////////

const somar2 = (a,b) => a+b;
console.log(somar2(1,3));