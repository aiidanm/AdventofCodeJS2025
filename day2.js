const fs = require('fs')
const input = fs.readFileSync('day2input.txt', 'utf-8').trim().split(',')
const testinput = fs.readFileSync('day2test.txt', 'utf-8').trim().split(',')


let invalidIdSum = 0
let invalidIds = []
input.forEach((idRange) => {
    let start = parseInt(idRange.split('-')[0])
    let end = parseInt(idRange.split('-')[1])


    for(let i = start; i <= end; i++){
        let stringId = String(i)
        let firstHalf = stringId.slice(0, Math.floor(stringId.length / 2))
        let secondHalf = stringId.slice(Math.floor(stringId.length / 2))

        if(firstHalf === secondHalf){
            invalidIds.push(i)
            invalidIdSum += i

        } else {
        const patternRegex = /^(.{1,})\1+$/
        if(patternRegex.test(stringId)){
            invalidIds.push(i)
            invalidIdSum += i
        }
    }

   }
    
    

})

console.log(invalidIdSum)
console.log(invalidIds)

