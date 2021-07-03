function escreva(texto){
    console.log(texto);
}


function espaço(){
    console.log('--------------------------------');
}

// espaço(); ///////////////////////////////////////////////////

const pessoa = {nome: 'Lucas',idade: 30};

// console.log(pessoa);
// console.log(pessoa.nome);


const quadrado = {
    base:10,
    altura:20,
    calculaArea: function(){return this.base * this.altura}
};

console.log(quadrado.calculaArea());

const agenda = {
    contatos: [
        {nome: 'contato1', telefone:'telefone1'},
        {nome: 'contato2', telefone:'telefone2'},
        {nome: 'contato3', telefone:'telefone3'},
        {nome: 'contato4', telefone:'telefone4'}
    ],
    adicionar : function(novo){this.contatos.push(novo)}
}

console.log(agenda.contatos);