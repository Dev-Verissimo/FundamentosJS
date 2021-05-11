//funçao é um verbo, uma ação, executo uma sequencia sentenças de codigos, define- se por bloco, que pode ser usado nas partes do programa que se deseja 
function imprimirSoma(a,b){ //nome dos parametros que se deseja receber
console.log(a+b)
}

imprimirSoma(2,3)

function soma(a,b = 1){
    return a+b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())