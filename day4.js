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


/* basic logic (for my own proof of knowledge)

Create a directions lookup array that contains relation coords for each position to check. e.g the current char is 0,0
the input is split into each line and then an array (mainly for part 2)
loop through each row while the row number is less than the length of the "grid" e.g the amount of rows [[row], [row2]]
nested loop through each column while column value is less than the current row length
    assign the current char which is the input[row][col] e.g input[1][2].   
    if the current char is not the one we are looking for, break the loop
    if it is, we need to check each direction
    so loop through the directions array and calculate the new row and column values to check e.g if the current pos is row 5, colum 2, it will calculate the new post to check for [1, -1] as row 6 column 1, diagonal left down of the current pos
    check that value is the paper (only if the new row and columns actually exist) e.g row > 0 and less than the amount of rows, and column is > 0 and less than the amount of chars in the row
    if it is, increment neighbour count
then if the neighbour count for a specific char is less than 4, add its coords to the remove arr

after this has done the check for every character loop through the to remove arrray and replace the values in those positions with . to signal the paper has gone

Wrap this all in a function and only execute it while true, break condition of the removed count from one pass being 0 


*/