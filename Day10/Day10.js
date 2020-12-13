let fs = require('fs');
let textByLine = fs.readFileSync('Day10/Day10_testinput.txt').toString().split("\r\n");

let sortedArray = textByLine.sort(function (a, b) { return a - b });
//console.log(sortedArray)
// let result = countDifferencesInArrayItems(sortedArray)
// console.log(result)
countAllPossiblePaths(sortedArray)

function countDifferencesInArrayItems(listNumbers) {
    let countDifferenceOne = 1 // starting point 0 not included in list
    let countDifferenceThree = 1 // final point not included in list

    for (let i = 0; i < listNumbers.length; i++) {

        if (Number(listNumbers[i]) + 1 == Number(listNumbers[i + 1])) {
            countDifferenceOne = countDifferenceOne + 1
        } else if (Number(listNumbers[i]) + 3 == Number(listNumbers[i + 1])) {
            countDifferenceThree = countDifferenceThree + 1
        }

    }
    return countDifferenceOne * countDifferenceThree
}


function countAllPossiblePaths(listNumbers) {

    listNumbers.unshift('0')
    listNumbers.push((Number(listNumbers[listNumbers.length -1]) + 3))
    let countTotalRoutes = 1
    console.log(listNumbers)
    let eersteTak = true

    for (let i = 0; i < listNumbers.length - 1; i++) {
        console.log('in lijst: ' + listNumbers[i])
        let optionsFromNumber = 0
        if (Number(listNumbers[i]) + 1 == Number(listNumbers[i + 1]) || Number(listNumbers[i]) + 2 == Number(listNumbers[i + 1]) || Number(listNumbers[i]) + 3 == Number(listNumbers[i + 1])) {
            optionsFromNumber = optionsFromNumber + 1
        }
        if (Number(listNumbers[i]) + 1 == Number(listNumbers[i + 2]) || Number(listNumbers[i]) + 2 == Number(listNumbers[i + 2]) || Number(listNumbers[i]) + 3 == Number(listNumbers[i + 2])) {
            optionsFromNumber = optionsFromNumber + 1
        }
        if (Number(listNumbers[i]) + 1 == Number(listNumbers[i + 3]) || Number(listNumbers[i]) + 2 == Number(listNumbers[i + 3]) || Number(listNumbers[i]) + 3 == Number(listNumbers[i + 3])) {
            optionsFromNumber = optionsFromNumber + 1
        }


        // if (eersteTak) {
        //     if (optionsFromNumber >= 2) {
        //         eersteTak = false
        //     }
        // } else {
        //     if (optionsFromNumber >= 2) {
        //         optionsFromNumber -= 1
        //     }
        // }
        console.log('total tussendoor: ' + countTotalRoutes)

        if (eersteTak && optionsFromNumber >= 2) {
            console.log('eerste tak')
            countTotalRoutes = countTotalRoutes * optionsFromNumber
            eersteTak = false



        } else {
            if (optionsFromNumber == 1) {

                countTotalRoutes = countTotalRoutes * optionsFromNumber
            } else {
                
                countTotalRoutes = countTotalRoutes * optionsFromNumber
                countTotalRoutes = countTotalRoutes - 1
            }
        }

        console.log('count total options: ' + optionsFromNumber)

        //countTotalRoutes = countTotalRoutes * optionsFromNumber
        console.log('total tussendoor: ' + countTotalRoutes)
    }

    console.log('total: ' + countTotalRoutes)
}
