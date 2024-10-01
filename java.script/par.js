function verificaParOuImpar(numero) {
    
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}


const numero = parseInt(prompt("Digite um número: "));
const resultado = verificaParOuImpar(numero);
console.log(`O número ${numero} é ${resultado}.`);