const funcs =[]

for (var i = 0; i< 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//ambos resultados foram 10 pois var não está em uma função então e´global