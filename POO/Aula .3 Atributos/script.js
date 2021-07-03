function escreva(texto){
    console.log(texto);
}


function espaço(){
    console.log('--------------------------------');
}

// espaço(); ///////////////////////////////////////////////////

class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "informação não numérica"   // isNaN verifica se é um numero throw lança o erro
        this.base = base;
        this.altura = altura;
        this.cor = undefined; // digo que ele é opciomal
    }
}

const quadrado = new Quadrado('11','doze');
console.log(quadrado);