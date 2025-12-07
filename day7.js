import * as fs from 'fs'
import path from 'path'
const manifold = fs.readFileSync('day7input.txt', 'utf-8').split('\n')



// let beamPos = new Set()
// let grid = []
// let testSet = new Set()

// beamPos.add(manifold[0].indexOf('S'))
// let hatCount = 0

// for(let r = 0; r < manifold.length; r++){
//     //loop through each row 
//     for(let c = 0; c < manifold[r].length; c++){
//         //loop through each column
//         let currentChar = manifold[r][c]
//         if(beamPos.has(c)){
//             if(currentChar === '^'){
//                 hatCount++
//                 beamPos.delete(c)
//                 beamPos.add(c + 1)
//                 beamPos.add(c - 1)
//             }
//         }
//     }
//     grid.push([...beamPos])
// }


let pathCount = new Array(manifold[0].length).fill(1)


const first = manifold.shift()

const reversed = manifold.reverse()

console.log(reversed)

for(const line of reversed){
    for(let c = 0; c < line.length; c++){
        if(line[c] === '^'){
            pathCount[c] = pathCount[c-1] + pathCount[c + 1]
        }
    }
}



console.log(pathCount[first.indexOf('S')])





//loop reverse from bottom up

