import * as fs from 'fs'

const input = fs.readFileSync('day5input.txt', 'utf-8').split(/\n\s*\n/)

const idRanges = input[0].split('\n')
const ids = input[1].split('\n')

//work out the total ids that are fresh and filter??
let rangeArr = []
for(const idRange of idRanges){
    let start = parseInt(idRange.split('-')[0])
    let end = parseInt(idRange.split('-')[1])

    rangeArr.push({start, end})
}

// let freshids = new Set()
// for(const id of ids){
//     let numId = parseInt(id)
//     for(const {start, end} of rangeArr){
//         let numStart = parseInt(start)
//         let numEnd = parseInt(end)
//         if(numId >= numStart && numId <= numEnd){
//             freshids.add(id)
//         }
//     }
// }


rangeArr.sort((a, b) => a.start - b.start)

const merged = [rangeArr[0]] //init merged array with starting value of the first object
for(let i = 1; i < rangeArr.length; i++){ // loop through the ranges starting from the second (first is already in merged)
    const lastRange = merged[merged.length - 1] //get the most recent item added to the merged stack
    const curr = rangeArr[i] // assign current range

    if(curr.start <= lastRange.end){ // if the current item starts before the last ranges end
        lastRange.end = Math.max(lastRange.end, curr.end) // find which is later, the last ranges end or the current and assign this to the item in the stack
    } else {
        merged.push(curr) // else just push the current item
    }
}






let result = merged.map(({start, end}) => {
    let totalIds = (end - start) + 1
    return totalIds
})


const total = result.reduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(total)