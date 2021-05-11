//estrutura unidimensional, é m vetor ,agrupa elementos que podem ser acessados a partir do indice 0
// é heterogenia , varios tipos de elementos 
const valores = [7.7 , 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])// o js não avisa que esse indice não existe, apenas apresenta um elemento vazio

console.log(valores.length)

valores[4]= 10
console.log(valores)
console.log(valores.length)

valores.push({id:3},false , null, 'teste')
console.log(valores)
