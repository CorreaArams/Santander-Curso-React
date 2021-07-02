function espaço(){
    console.log('--------------------------------');
}

espaço(); ///////////////////////////////////////////////////

// reduce reduz a um valor ou a um objeto

const vetor = [1,2,3,4,5,6];

const soma = vetor.reduce((estado,item)=>estado+item);
console.log(soma);

