function escreva(texto){
    console.log(texto);
}


function espaço(){
    console.log('--------------------------------');
}

// espaço(); ///////////////////////////////////////////////////

function Quadrados(base,altura){
    
        this.base = base;
        this.altura = altura;
        let cor = 'blue'; // let deixa a variavel acessivel somente de dentro da função ou classe
    }
    
    const quadrados = new Quadrados(3,4);
    quadrados.cor = 'red'; // podemos criar o atributo para a cor
    console.log(quadrados.cor);  // ao tentar acessar uma variavel local(let) a cora será undefined no resultado


    // espaço(); ///////////////////////////////////////////////////

    //Factory function

    function createQuadrado(base, altura){

        let cor = 'blue';
      
        return {
          base,
          altura,
          getCor : function() { return cor; }  // metodo criado para acessar o atributo local cor
        };
      
      }

      const quadrado = createQuadrado(3,4);
      console.log(quadrado.getCor());


class Quadrado{
  
  constructor(lado, altura){
    let cor = 'blue';
    this.lado = lado;
    this.altura = altura;
    this.getCor = () => { return cor; };
  }
}

const quadrado1 = new Quadrado(3,4);
console.log(quadrado1.getCor());
