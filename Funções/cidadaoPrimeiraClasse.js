//Um dos recursos da programação funcional presentes no JavaScript são as Funções de Primeira Classe, isso é possível por que em JavaScript funções também são tratadas como Objetos de Primeira Classe, isso significa que podemos tratar funções como valores, e armazená-las em variáveis e constantes, passar funções como parâmetros em outras funções e até ter funções como retorno de outras funções

//tipos de criação de função

//-criar de forma literal 
function fun1() {}
//uma função sempre retorna algo, ou undefine ou o conteudo do return

//-armazenar em uma variável
const fun2 = function () {}

//-armazenar em um array 
const array = [function(a,b) {return a + b}, fun1 , fun2]
console.log(array[0](2,3))

//-armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa' }
console.log(obj.falar())

//- função como parametro
function run(fun) {
    fun()
}

run(function () { console.log('Executando ...')})

//- uma função pode retornar/conter uma função
function soma(a,b) {
    return function(c){
        console.log(a+b+c)
    }
}

//soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)