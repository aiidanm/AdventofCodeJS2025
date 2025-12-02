import * as fs from 'fs'

let input : string[] = fs.readFileSync('day1input.txt', 'utf-8').trim().split('\n')


let Zerocount : number = 0
let acc : number = 50

input.forEach((l : string) => {
    let direction : string = l[0]
    let value : number = parseInt(l.slice(1))

    let fullturns : number = Math.floor(value / 100)
    Zerocount += fullturns
    
    let remainder : number = value % 100
    for(let i = 0; i < remainder; i++){
    if(direction === 'R'){
        acc++
    } else if(direction === 'L'){
        acc--
    }


    acc = (acc % 100 + 100) % 100

    if(acc === 0){
        ++Zerocount
    }
    }

    

})

    console.log(acc)




