const { gets, print } = require('./funcoes-auxiliares');

const salario = gets();
const beneficio = gets();


function calcImposto(valor, percentual){
    return valor * (percentual / 100);   
}
function pegarPercentualComBaseNoSalario(salario){
    if (salario > 0 && salario < 1100){
        return 5;
    } else if (salario > 1100 && salario < 2500){
        return 10;
    } else{
        return 15;
    }
}
const valorTranferir = salario - (calcImposto(salario, pegarPercentualComBaseNoSalario(salario))) + beneficio; 
print(valorTranferir);




print(calcImposto(salario, 10));
print(pegarPercentualComBaseNoSalario(salario))