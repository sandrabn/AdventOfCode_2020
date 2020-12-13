let fs = require('fs');
let textByLine = fs.readFileSync('Day8/Day8.txt').toString().split("\r\n");

//Puzzle part 1
let finalIndex = jump(textByLine)
console.log('final index: ' + finalIndex)

//Puzzle part 2
jumpUntillTheEnd(textByLine)

function jump(textByLine) {
    let acc = 0
    let indexUsed = []
    let finalIndex
    for (let i = 0; i < textByLine.length; i = i) {
        let rule = textByLine[i].split(" ")
        if (rule[0] == "acc") {
            acc = acc + Number(rule[1])
            i = i + 1
        } else if (rule[0] == "nop") {
            i = i + 1
        }
        else {
            i = i + Number(rule[1])
        }

        if (indexUsed.includes(i)) {
            //console.log(acc)
            break
        } else {
            indexUsed.push(i)
        }

        // console.log(rule)
        // console.log("acc: " + acc)
        // console.log('i is: ' + i)
        finalIndex = i

    }
    return finalIndex
}

function jumpUntillTheEnd(textByLine) {
    let acc = 0
    let indexUsed = []
    let finalIndex

    firstloop:
    for (let c = 0; c < textByLine.length; c++) {
        // console.log('index is ' + c)
        // console.log(textByLine[c])
        if (textByLine[c].includes('nop')) {
            textByLine[c] = textByLine[c].replace('nop', 'jmp')
        } else if (textByLine[c].includes('jmp')) {
            textByLine[c] = textByLine[c].replace('jmp', 'nop')
        } else {
            continue
        }
        //console.log('is nu: ' + textByLine[c])
        let indexUsed = []
        acc = 0  
        let finalIndex

        for (let i = 0; i < textByLine.length; i = i) {
            let rule = textByLine[i].split(" ")
            if (rule[0] == "acc") {
                acc = acc + Number(rule[1])
                i = i + 1
            } else if (rule[0] == "nop") {
                i = i + 1
            }
            else {
                i = i + Number(rule[1])
            }

            if (i == (textByLine.length)) {
                console.log('Last item in list!')
                console.log(textByLine[i])
                console.log(acc)
                break firstloop;
            }

            if (indexUsed.includes(i)) {
                //console.log('includes i')
                break 
            } else {
                //console.log('i toegevoegd aan lijst')
                indexUsed.push(i)
            }

            finalIndex = i

            // console.log(rule)
            // console.log("acc: " + acc)
            // console.log(i)

        }
        // console.log(acc)
        // console.log(finalIndex)

        if (textByLine[c].includes('nop')) {
            textByLine[c] = textByLine[c].replace('nop', 'jmp')
        } else if (textByLine[c].includes('jmp')) {
            textByLine[c] = textByLine[c].replace('jmp', 'nop')
        } 
    }
    console.log("acc: " + acc)
}