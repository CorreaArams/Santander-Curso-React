function escreva(texto){
    console.log(texto);
}


function espaço(){
    console.log('--------------------------------');
}

// espaço(); ///////////////////////////////////////////////////

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Carlos',20)
pessoa1.idade = 21;
console.log(pessoa1);

