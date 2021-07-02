let vetor = [10,20,30,40,50]; // vetores iniciam na posição 0

console.log(vetor[2]);  //mostra no console a terceira posição do vetor

//mudar o elemento do vetor pelo indice:
vetor[2] = 60;
console.log(vetor[2]); 
vetor[3] = 'trinta'
console.log(vetor[3]); 


console.log("----------------------------------------"); 
// para definir o vetor vazio:
let vetor2 = [];
for(let i =0; i<10;i++){
    vetor2.push(i); //push acrescenta no final do vetor
}

console.log(vetor2);

console.log("----------------------------------------"); 

let vetor3 = [10,20,30,40,50,60,70,80,90];

for(let i = 0; i < vetor3.length; i++){  //lenght é o tamanho do vetor
    console.log(vetor3[i]);
}
console.log("----------------------------------------"); 
for(let numero of vetor3){   //outra maneira de percorrer o vetor
    console.log(numero);
}
console.log("----------------------------------------"); 
for(let indice in vetor3){   //mostra a posição(indice)do vetor
    console.log(indice);
}

console.log("----------------------------------------"); 
for(let indice in vetor3){   
    console.log(vetor3[indice]);//percorre o vetor pelo indice/posição.
}

console.log("----------------------------------------"); 

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let linha of matriz){
    for (let elemento of linha){
        console.log(elemento);
    }
}

