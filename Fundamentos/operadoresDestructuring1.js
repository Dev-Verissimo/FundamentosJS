const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro:'rua abc',
        numero:1000
    }
}

const {nome, idade } = pessoa //tirar nome e idade do objeto pessoa
console.log(nome,idade)

const { endereco:{ logradouro , numero, cep}}= pessoa
console.log(logradouro , numero, cep)