function escreva(texto){
    console.log(texto);
}


function espaço(){
    console.log('--------------------------------');
}

// espaço(); ///////////////////////////////////////////////////

class Quadrado{
  
  constructor(lado, altura){
    this._cor = 'blue'; // coloco com o underline para definir o atributo guardar temporariamente. para representar uma propriedade privada
    this.lado = lado;
    this.altura = altura;
    
  }
  get cor(){return this._cor;}
  set cor(cor){this._cor = cor;}
}


const quadrado = new Quadrado(3,4);

quadrado.cor = 'red';
console.log(quadrado.getCor());
