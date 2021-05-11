console.log('01)','1'==1 ) //no js essa afirmativa é verdadeira pois o java se preocupa apenas com a valor e não com o tipo da variável, '1' é um string ja 1 é um número
console.log('02)', '1'===1)//falso pois '1' é string e 1 é number, tres iguais leva em comparação o tipo também
console.log('03)','3' !=3 )//falso pois leva em comparação apenas o valor
console.log('04)','3' !==3 ) //diferente pois um é do tipo string e a outra, number, com isso, a afirmativa é verdadeira, eles são estritamente diferentes

console.log('05)', 3<2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3>=2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09', d1 === d2)
console.log('10', d1== d2)
console.log('11', d1.getTime()===d2.getTime())

console.log('12', undefined == null)
console.log('13', undefined === null)