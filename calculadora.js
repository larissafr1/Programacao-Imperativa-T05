// Exercicio calculadora aula 6

function adicionar(a,b) {
    return a + b 
}

function substrair(a,b) {
    return a - b 
}

function multiplicar(a,b) {
    return a * b 
}

function dividir (a,b) {
    return a / b 
}


// Calculadora - Nível II

console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log(adicionar(4,5));

console.log(substrair(10,5));

console.log(multiplicar(2,3));

console.log(dividir(8,0));

// Calculadora - Nível III - Funções Extras


// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
// Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().

function quadradoDoNumero (a) {
    return multiplicar (a, a)
}
console.log (quadradoDoNumero(5));


// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
// Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.
function mediaDeTresNumeros (a, b, c) {
    return (a + b + c) / 3
}
console.log (mediaDeTresNumeros(5,5,5)) 


// Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
//Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 
function calculaPorcentagem (total, porcentagem) {
    return  porcentagem/100*total;
}
console.log (calculaPorcentagem(300,15));


// Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
//Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).
function geradorDePorcentagem (a, b) {
    return (a * 100) / b 
}
console.log (geradorDePorcentagem(2,200));

