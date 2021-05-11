{
    {
        {
            {
                var sera = 'sera???'
            }
        }
    }
}
//var é global
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}
teste()
//console.log(local) --- isso dá erro pois var não existe fora da funçaõ
