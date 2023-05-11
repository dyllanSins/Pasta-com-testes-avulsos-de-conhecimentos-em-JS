const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

console.log("Bem-vindo à calculadora em JavaScript!");

rl.question("Digite o primeiro número: ", function(num1) {
    rl.question("Digite o segundo número: ", function(num2) {
        rl.question("Digite a operação (+, -, *, /): ", function(operacao) {

            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            const operacoes = {
                "+": (num1, num2) => num1 + num2,
                "-": (num1, num2) => num1 - num2,
                "*": (num1, num2) => num1 * num2,
                "/": (num1, num2) => num1 / num2
              };
        
              const resultado = operacoes[operacao] ? operacoes[operacao](num1, num2) : "Operação inválida.";
        
              console.log(`O resultado de ${num1} ${operacao} ${num2} é ${resultado}`);
        
              rl.close();
        })
    })
})