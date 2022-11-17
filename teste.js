const entradas = [8,2];
let i = 0;


function gets(){
    const valor = entradas[i];
    i = i + 1;
    return valor;
}
function print(texto){
    console.log(texto);
}
const media = gets();

if (media < 5 ) {
    print('Reprovado');
} else if ( media >= 5 &&  media < 7){
    print('Recuperação');
} else {
    print('Aprovado');
}
print(media);


