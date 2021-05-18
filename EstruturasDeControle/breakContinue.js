const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5){
        break //ele se relaciona com o for ou while mais próximo, com isso, o programa vai executar as linhas 3 e ao chegar na linha 4, caso x seja igual a 5, o break age e sai da estrutura de repetição
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5){
        continue//nesse caso, o continue faz com que a linha 10 seja executada, a 11 também, mas caso y for igual a 5, o continue age e volta para a linha 10, reiniciando a repetição
    }
    console.log(`${y} = ${nums[y]}`)
}