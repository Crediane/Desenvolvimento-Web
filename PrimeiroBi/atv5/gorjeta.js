const valorConta = 100
const percentualGorjeta = 15

function calcularValorTotalConta(valorConta, percentualGorjeta){

    return valorConta + calcularGorjeta(valorConta, percentualGorjeta)
}
function calcularGorjeta(valorConta, percentualGorjeta){
    
    return valorConta * (percentualGorjeta/100)
}

const gorjetaCalculada = calcularGorjeta(valorConta, percentualGorjeta);
const totalCalculado = calcularValorTotalConta(valorConta, percentualGorjeta);

console.log(
`Valor da Conta: R$${valorConta.toFixed(2)}, Gorjeta (${percentualGorjeta}%): R$${gorjetaCalculada.toFixed(2)}, Total a pagar: R$${totalCalculado.toFixed(2)}`
);