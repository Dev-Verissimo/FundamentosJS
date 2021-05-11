//par nome/valor
const saudacao = 'opa' //contexto lexico 1

function exec(){
    const saudacao= 'Falaaa'//contexto léxico 2
    return saudacao// essa constante não ira interferir na outra mesmo que tenha o mesmo nome pois essa está dentro do bloco e a outra está fora, ou seja ,estão em contextos lexicos diferentes
}

//objetos são grupos aninhados de pares nome/valor
const client = {
    nome: 'nat',
    idade: 21,
    peso: 64,
    endereco: {
        logradour: 'Rua Muito Legal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
