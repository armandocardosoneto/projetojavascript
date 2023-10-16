//Exercício 1
var nome = prompt("Insira seu nome");
var sobrenome = prompt("Insira seu sobrenome");
var resultado = nome + " " + sobrenome;
console.log(resultado)
alert("Olá, " + resultado + "! Preencha os próximos campos para calcularmos o seu índice de massa corpórea!")

//Exercício 2
var anoNascimento = prompt("Insira seu ano de nascimento");
var ano_atual = 2023;
var idade = ano_atual - anoNascimento;
console.log("Idade: " + idade + " anos.");
alert("Idade: " + idade + " anos.");

//Exercício 3
var num1 = prompt("Insira o seu peso em Kg!");
var num2 = prompt("Insira a sua altura em centímetros!");
var num3 = num2 * num2;
var num4 = num3 / 10000;
var resultado = num1 / num4;
console.log("Peso: " + num1 + "Kg");
console.log("Altura: " + num2 + "cm");
console.log("IMC= " + resultado);
alert("IMC= " + resultado);