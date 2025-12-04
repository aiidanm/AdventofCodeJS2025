const fs = require('fs')

const testinput = fs.readFileSync('day3test.txt', 'utf-8').trim().split('\n')
const input = fs.readFileSync('day3input.txt', 'utf-8').trim().split('\n')

const testBattery = "811111111111119"

function check(char1, char2, curr){
    const num = parseInt(char1 + char2)
    if(num > curr){
        return num
    } else return curr
}


let sum = 0
for (const battery of input){
    let removesLeft = battery.length - 12
    let stack = []
    for (const char of battery){
            let currentDigit = parseInt(char)


            while ((currentDigit > stack[stack.length - 1]) && (removesLeft > 0) && (stack.length > 0)){
                stack.pop()
                removesLeft--
            }
            stack.push(currentDigit)
    }

    stack = stack.slice(0, 12)
    let total = parseInt(stack.join(''))
    sum += total
}


console.log(sum)

// let batteryVoltageSum = 0

// for(const battery of testinput){
//         let currentHighest = 0

//     for(let i = 0; i < battery.length; i++){ //loops through each character in a battery
//         let currentChar = battery[i]

//         for(let x = i +1; x < battery.length; x++){ //loops through to find the following characters in the same battery
//             let compareChar = battery[x]
//             currentHighest = check(currentChar, compareChar, currentHighest)
//         }
//     }

//     batteryVoltageSum += currentHighest
// }



// console.log(batteryVoltageSum)