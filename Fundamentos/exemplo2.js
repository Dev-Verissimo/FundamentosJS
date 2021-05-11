//objetivo : armazenar uma função em uma variável
const imoprimirSoma = function (a,b){
    console.log(a+b)
}

imoprimirSoma(2,3)

//armazenar uma funcao arrow em uma variavel
const soma = (a,b) =>{//substitui a palavra fuction
    return a+b
}

console.log(soma(2,3))

//retono implícito
const subtracao = (a,b) => a-b
console.log(subtracao(3,2))