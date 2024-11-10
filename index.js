// Declaração das variáveis
let etanol = 3.75;
let gasolina = 4.75;
let combustivelUsado = gasolina;
let consumoMedio = 2.7;
let distanciaViagem = 250;

// Cálculo do gasto total
let gastoTotal = combustivelUsado * consumoMedio * distanciaViagem;

// Formatação e impressão do resultado
console.log("O gasto total nesta viagem foi: R$", gastoTotal.toFixed(2));