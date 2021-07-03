function escreva(texto){
    console.log(texto);
}


function espaço(){
    console.log('--------------------------------');
}

// espaço(); ///////////////////////////////////////////////////

class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
    calculaArea (){
    
        return this.base*this.altura;
    }

    duplicaBase(){
        this.base = 2* this.base;
    }
}



const quadrado = new Quadrado(11,12);
console.log(quadrado.calculaArea());


