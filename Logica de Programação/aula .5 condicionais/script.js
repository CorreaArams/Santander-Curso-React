// let estaSol = false;

// if(estaSol){
//     console.log('vou pra praia');
// }
// else{
//     console.log('vou pro campo');
// }


// let numero =3;
// let paridade = numero %2 == 0 ? 'par' : 'impar';  // atribuição sem if e else

// console.log(paridade);

let sinal = 'verde';
switch(sinal){
    case 'verde' : 
        console.log('pode passar');
        break;
    case 'amarelo' :
        console.log('prestes a fechar, cuidado...');
        break;
    case 'vermelho':
        console.log('fechado, não passe');
        break;
    default:
        console.log('esse não é um valor válido');
        break;
}
