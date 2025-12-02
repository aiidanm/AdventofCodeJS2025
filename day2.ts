import * as fs from 'fs'

const input : string[] = fs.readFileSync('day2input.txt', 'utf-8').trim().split(',')

let invalidIdSum : number = 0
for (const idRange of input){ // loop through array of id ranges
    let start : number = parseInt(idRange.split('-')[0]) //get the start of the range
    let end : number = parseInt(idRange.split('-')[1])  

    for(let i = start; i <= end; i++){
        let stringId: string = String(i) //converts id to string so we can iterate over its characters and split in 2
        let firstHalf : string = stringId.slice(0, Math.floor(stringId.length / 2))
        let secondHalf : string = stringId.slice(Math.floor(stringId.length / 2))

        if(firstHalf === secondHalf) {
            invalidIdSum += i
        }else {
            const patternRegex = /^(.{1,})\1+$/
            if(patternRegex.test(stringId)){
                invalidIdSum += i

            }
        }

        

    }
}

console.log(invalidIdSum)