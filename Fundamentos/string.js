

//é uma cadeia de caracteres, entre aspas duplas, simples ou crases//
const escola = "Cod3r"

console.log(escola.charAt(4))
//localização do caractere na posição 4//
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))/* para saber qual é a localização do termo 3 na string*/

console.log(escola.substring(3)) //apenas exibira a depois do terceiro elemento//
console.log(escola.substring(0,3)) //vai do 0 ao 2//

console.log('Escola ' .concat(escola).concat("!"))//isso é concatenar//
console.log(escola.replace(3, 'e'));


