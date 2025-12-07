import * as fs from 'fs'
const grid = fs.readFileSync('day6input.txt', 'utf-8').split('\n') // keep rows with the empty strings


const operators = grid.pop() // remove last row as it contains the operators
let maxColWidth = 0
for(let r = 0; r < grid.length; r++) {
    if(grid[r].length > maxColWidth) maxColWidth = grid[r].length;
} // loop through each row and check if its length is higher than the current highest and assign it if so. this is to figure out which column to start from

let blockCache = []
let finalArr = []
let currentOp = null

for(let c= maxColWidth -1; c >= 0; c--){ // loop through the number of columns starting from the last one
    let numStr = '' // create an empty string that will act as our number to crete for each column in a block
    for(let r = 0; r < grid.length; r++){    // now loop through each row and check if its char is not an empty space, if so add it to the numStr
        const char = grid[r][c]
        if(char !== ' '){
            numStr += char
        }

    }


    if(operators[c] === '+' || operators[c] === '-' || operators[c] === '*' || operators[c] === '/'){
        currentOp = operators[c]
    } //check the operators row at the same column position
    if(numStr.length > 0){ // this logic checks if after going through the entire row, the number str array exists / has chars in
        blockCache.push(parseInt(numStr)) //if it does it pushes it to the block array
    } else if (blockCache.length > 0){ // else if the string is empty and the block contains values, push the current operator and the number string
        blockCache.push(currentOp)
        finalArr.push(blockCache) // then push this to the finalTotal array
        blockCache = [] //reset the values 
        currentOp = null
    }
}


if(blockCache.length > 0) { // handles the left most block 
    blockCache.push(currentOp)
    finalArr.push(blockCache)
}

let grandTotal = 0

finalArr.forEach((block) => {
    let currentOp = block.pop()
    if(currentOp === '+'){
        grandTotal += block.reduce((a, b) => a + b, 0)
    } else if(currentOp === '-'){
        grandTotal += block.reduce((a, b) => a -b, 0)
    } else if (currentOp === '*'){
        grandTotal += block.reduce((a, b) => a * b, 1)
    } else if(currentOp === '/'){
        grandTotal += block.reduce((a, b) => a * b, 1)

    }   
})

console.log(grandTotal)










