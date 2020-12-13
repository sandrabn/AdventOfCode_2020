let fs = require('fs');
let textByLine = fs.readFileSync('Day9/Day9.txt').toString().split("\r\n");


//Puzzle part 1
let errorNumber = addItems(textByLine)
console.log(errorNumber)


//Puzzle part 2
let numberList = addContigiousNumbers(textByLine, errorNumber)
console.log('final answer: ' + (numberList.sort()[0] + numberList.sort()[numberList.length - 1]))

function addItems(textByLine) {
    let match = false
    let finalNumber = 0

    for (let i = 25; i < textByLine.length; i++) {
        match = false
        let first25Items = textByLine.slice(i - 25, i)
        labelLoop:
        for (let c = 0; c < first25Items.length; c++) {

            for (let x = 0; x < first25Items.length; x++) {
                if (c == x) {
                    continue
                }

                let total = Number(first25Items[c]) + Number(first25Items[x])

                if (total == textByLine[i]) {
                    match = true
                    break labelLoop
                }
            }
            if (c == first25Items.length - 1 && !match) {
                match = false
                console.log('houston we have a problem')
                break
            }

        }
        first25Items = []

        if (!match) {
            finalNumber = textByLine[i]
            break
        }
    }

    return finalNumber
}

function addContigiousNumbers(textByLine, desiredTotal) {
    let usedNumbers = []
    let tempTotal = 0

    for (let i = 0; i < textByLine.length; i++) {
        usedNumbers = []
        tempTotal = 0
        for (let c = i; c < textByLine.length; c++) {
            tempTotal = tempTotal + Number(textByLine[c])
            usedNumbers.push(Number(textByLine[c]))
            if (tempTotal > desiredTotal) {
                tempTotal = 0
                break
            } else if (tempTotal == desiredTotal) {
                console.log('Found it!')
                console.log(usedNumbers)
                return usedNumbers
            }
        }
    }
}