var _ = require('lodash');
let fs = require('fs');
let textByLine = fs.readFileSync('Day15/Day15.txt').toString().split("\r\n");

let startingNumbers = [0,6,1,7,2,19,20]

speakNumber(startingNumbers)
//29999993

const starting = [0,3,6];

//For part 2: this solution is too slow
//Write lastNumber + index+1 (turn) to Map. 
//Overwrite turn when number is spoken again

function speakNumber(input) {
    let spokenNumbers = input
    let nextNumber
    let lastNumber = input[input.length-1]
    let index
    let initial
    for (let i = 0; i < 7 ; i++) {
        initial = _.initial(spokenNumbers)
        if (_.includes(initial, lastNumber) ) {

           index = _.lastIndexOf(initial, lastNumber)
           
           index = index + 1
           nextNumber = spokenNumbers.length - index
           spokenNumbers.push(nextNumber)
        } else {

            nextNumber = 0
            spokenNumbers.push(nextNumber)
        }
        lastNumber = nextNumber

    }
    //console.log(spokenNumbers)
    console.log(nextNumber)

}