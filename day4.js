import * as fs from 'fs'

const input = fs.readFileSync('day4.txt', 'utf-8').split('\n')

const arr = input.map((line) => line.split(""))

const directions = [[-1,-1], [-1,0], [0,-1], [1,0], [0,1], [1,1], [1, -1], [-1, 1]]

let paperCount = 0

function removePaper(grid, dirs){
    let toRemove =[]
    for (let row = 0; row < grid.length; row++){
    for(let col = 0; col < grid[row].length; col++){
        let char = grid[row][col]
        if(char !== "@") continue
        let neighbourCount = 0
        for (const [dr, dc] of dirs){
            let newRow = row + dr
            let newCol = col + dc
            if(newRow >=0 && newRow < grid.length && newCol >=0 && newCol < grid[row].length)
            if(grid[newRow][newCol] === "@"){
                neighbourCount++
            }


        }
        if(neighbourCount < 4){
            toRemove.push([row, col])
        }
        

    }
}
        for(const [row, col] of toRemove){
            grid[row][col] = "."
        }
    
    let removedCount = toRemove.length
    return removedCount
}



function checkRecurse(grid, dirs){
    while(true){
            let removedThisTime = removePaper(grid, dirs)
            paperCount += removedThisTime
            if(removedThisTime === 0 ) break
    } 
}
checkRecurse(arr, directions)
console.log(paperCount)