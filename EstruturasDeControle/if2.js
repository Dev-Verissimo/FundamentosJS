function teste1(num) {
    if(num > 7)
        console.log(num)//apenas essa sentença será tida como pertencente ao if
        console.log('Final')//o js desconsidera identação, então, essa linha será executada independente do if
}

teste1(6)
teste1(8)