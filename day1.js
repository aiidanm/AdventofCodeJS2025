const fs = require('fs');

const input = fs.readFileSync('day1input.txt', 'utf-8').trim().split('\n')

let zeroCount = 0
const result = input.reduce((acc, curr) => {
    const direction = curr[0] // seperate out the direction by selectng first character of string
    const distance = Number(curr.slice(1)) // convert the rest of the string to a nunber by slicing from index 1 to end

    const fullRotations = Math.floor(distance / 100) // handles full rotations, by dividing distance by 100 and flooring it to get whole number e.g 650 / 100 = 6.5 floored to 6
    zeroCount += fullRotations // adds the full rotations to zeroCount

    const remainder = distance % 100 //remaining distance after the full rotations are cut off e.g 650 % 100 = 50

    for (let i = 0; i < remainder; i++) { // loops through remaining nunbers, 
        if (direction === 'R') {
            acc++ // increments acc if direction is R
        }else {
            acc-- //decrements acc if L 
        }

        acc = (acc % 100 + 100) % 100 // normalizes acc to be within 0-99 range by using modulo operation e.g -1 % 100 = -1 + 100 = 99 % 100 = 99

        if(acc === 0) { 
            ++zeroCount 
        }
    }
    return acc
    

}, 50)

//commented so i actually remember what i was doing at some point

console.log(zeroCount)