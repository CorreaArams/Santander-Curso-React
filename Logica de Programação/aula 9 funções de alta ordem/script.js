function espaço(){
    console.log('--------------------------------');
}

espaço(); ///////////////////////////////////////////////////

const subtrair = (a,b) => a-b;
const aplicaOperacao = (a,b,operacao) => operacao(a,b);

let resultado = aplicaOperacao(4,2,subtrair);
console.log(resultado);

espaço(); ///////////////////////////////////////////////////

const somarx = (x) => (y) => x+y;

const somar2 = somarx(2);
console.log(somar2(5));