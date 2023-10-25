//CálculoS dos Preços dos Produtos sem o ICMS e sem o IPI
var somar = (a, b) => a + b
var subtrair = (a, b) => a - b
var calcularICMS = x => x * 0.12
var calcularIPI = x => x * 0.04

var precoProduto = prompt("Insira o preço do produto")
var icms = calcularICMS(precoProduto)
var IPI = calcularIPI(precoProduto)
var somaDosImpostos = somar(icms, IPI)
var valorDoProdutoSemICMS = subtrair(precoProduto, icms)
var valorDoProdutoSemIPI = subtrair(precoProduto, IPI)
var valorDoProdutoSemImpostos = subtrair(precoProduto, somaDosImpostos)

console.log(precoProduto)
console.log(icms)
console.log(IPI)
console.log(somaDosImpostos)
console.log(valorDoProdutoSemICMS)
console.log(valorDoProdutoSemIPI)


alert("Valor do produto com impostos: R$" + precoProduto + ",00")
alert("Valor do ICMS que está pagando (alíquota de 12%): R$" + icms);
alert("Valor do IPI que está pagando (alíquota de 4%): R$" + IPI);
alert("Valor do produto sem o ICMS e sem o IPI: R$" + valorDoProdutoSemImpostos)