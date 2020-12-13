const { count } = require('console');
let fs = require('fs');
const { concat } = require('lodash');
let textByLine = fs.readFileSync('Day11/Day11.txt').toString().split("\r\n");
var _ = require('lodash');

let seatingChart = createGraph(textByLine)
let lastChart = rounds(seatingChart)
countOccupiedSeats(lastChart)

function createGraph(textByLine) {
    for (let i = 0; i < textByLine.length; i++) {
        let seats = textByLine[i].split("")
        textByLine[i] = seats
    }
    return textByLine
}

function rounds (seatingChart){
    changedSomething = false
    let newChart
    let previousChart = seatingChart
    let rounds = 0

    do{
        newChart = fillSeats(previousChart)
        changedSomething = _.isEqual(newChart, previousChart)
        previousChart = newChart
        rounds = rounds + 1
    } while (!changedSomething)

    console.log(rounds-1)

    return previousChart
}

function countOccupiedSeats(seatingChart){
    let count = 0
    for (let i = 0; i < seatingChart.length; i++) {
        for (let c = 0; c < seatingChart[i].length; c++) {
            if (seatingChart[i][c] == '#'){
                count = count + 1
            }
        }
    }
    console.log(count)
}

function fillSeats(seatingChart) {
    let newSeatingChart = []
    for (let i = 0; i < seatingChart.length; i++) {
        var seatingRow = []
        for (let c = 0; c < seatingChart[i].length; c++) {
            if (seatingChart[i][c] == '.') {
                seatingRow.push(seatingChart[i][c])
            } else if (seatingChart[i][c] == 'L') {
                let otherSeats = checkOtherSeatsAllTheWay(seatingChart, i, c)
                var countItems = (otherSeats.match(/#/g) || []).length
                if(countItems == 0){
                    seatingRow.push('#')
                } else {
                    seatingRow.push(seatingChart[i][c])
                }
            } else if (seatingChart[i][c] == '#') {
                let otherSeats = checkOtherSeatsAllTheWay(seatingChart, i, c)
                var countItems = (otherSeats.match(/#/g) || []).length
                //for puzzle part 1: change 5 to 4
                if(countItems >= 5){
                    seatingRow.push('L')
                } else {
                    seatingRow.push(seatingChart[i][c])
                }
            }
        }
        newSeatingChart.push(seatingRow)
    }
    return newSeatingChart
}

//Puzzle part 1
function checkOtherSeats(seatingChart, row, column) {
    let seatingOptions = ''
    for (let i = -1; i < 2; i++) {

        for (let c = -1; c < 2; c++) {
            // console.log(i)
            // console.log(c)
            if(i == 0 && c == 0){
                //console.log('skipping my own position')
                continue
            }

            //console.log('checking this value: ' + seatingChart[row + i][column + c])
            if (!(seatingChart[row + i] == undefined)) {
                //console.log('checking ' + (i + 1) + (c + 1))
                if(!(seatingChart[row + i][column + c] == undefined)){
                    seatingOptions = seatingOptions + seatingChart[row + i][column + c]
                    //console.log(seatingOptions)
                }
                
            }
        }
    }
    //console.log('seating options: ' + seatingOptions + ' for row ' +  row + ' and column ' + column)
    return seatingOptions
}

//Puzzle part 2
function checkOtherSeatsAllTheWay(seatingChart, row, column){
    let seatingOptions = ''

    //console.log('checking for row ' +  row + ' and column ' + column)

    //all seats right of this one
    for (let i = column + 1; i < seatingChart[row].length; i++) {
        // console.log('checking right row ' +  row + ' column ' + i)
        // console.log('checking ' +  seatingChart[row][i])
        if (!(seatingChart[row][i] == undefined) && (seatingChart[row][i] == 'L' || seatingChart[row][i] == '#')) {
            seatingOptions = seatingOptions + seatingChart[row][i]
            // console.log(seatingOptions)
            break
        }
    }

    //all seats left of this one
    for (let i = column - 1; i >= 0; i--) {
        // console.log('checking left row ' +  row + ' column ' + i)
        // console.log('checking ' +  seatingChart[row][i])
        if (!(seatingChart[row][i] == undefined) && (seatingChart[row][i] == 'L' || seatingChart[row][i] == '#')) {
            seatingOptions = seatingOptions + seatingChart[row][i]
            // console.log(seatingOptions)
            break
        }
    }

    //all seats beneath this one
    for (let i = row + 1; i < seatingChart.length; i++) {
        // console.log('checking down row ' +  i + ' column ' + column)
        // console.log('checking ' +  seatingChart[i][column])
        if (!(seatingChart[i] == undefined) && (seatingChart[i][column] == 'L' || seatingChart[i][column] == '#')) {
            seatingOptions = seatingOptions + seatingChart[i][column]
            // console.log(seatingOptions)
            break
        }
    }

    //all seats above this one
    for (let i = row - 1; i >= 0; i--) {
        // console.log('checking up row ' +  i + ' column ' + column)
        // console.log('checking ' +  seatingChart[i][column])
        if (!(seatingChart[i] == undefined) && (seatingChart[i][column] == 'L' || seatingChart[i][column] == '#')) {
            seatingOptions = seatingOptions + seatingChart[i][column]
            // console.log(seatingOptions)
            break
        }
    }

    //all seats down + 1 right + 1 this one
    let c = column + 1 
    for (let i = row + 1; i < seatingChart.length; i++) {
        // console.log('checking row ' +  i + ' column ' + c)
        // console.log('checking ' +  seatingChart[i][c])
        if (!(seatingChart[i] == undefined) && (seatingChart[i][c] == 'L' || seatingChart[i][c] == '#')) {
            seatingOptions = seatingOptions + seatingChart[i][c]
            // console.log(seatingOptions)
            break
        } 
        c = c + 1
    }

    //all seats down + 1 left + 1 this one
    c = column - 1
    for (let i = row + 1; i < seatingChart.length; i++) {
        // console.log('checking row ' +  i + ' column ' + c)
        // console.log('checking ' +  seatingChart[i][c])
        if (!(seatingChart[i] == undefined) && (seatingChart[i][c] == 'L' || seatingChart[i][c] == '#')) {
            seatingOptions = seatingOptions + seatingChart[i][c]
            // console.log(seatingOptions)
            break
        }
        c = c - 1
    }

    //all seats up + 1 left + 1 this one
    c = column + 1
    for (let i = row - 1; i >= 0 ; i--) {
        // console.log('checking row ' + i + ' column ' + c)
        // console.log('checking ' + seatingChart[i][c])
        if (!(seatingChart[i] == undefined) && (seatingChart[i][c] == 'L' || seatingChart[i][c] == '#')) {
            seatingOptions = seatingOptions + seatingChart[i][c]
            // console.log(seatingOptions)
            break
        }
        c = c + 1
    }

    //all seats up + 1 left + 1 this one
    c = column - 1
    for (let i = row - 1; i >= 0; i--) {
        // console.log('checking row ' + i + ' column ' + c)
        // console.log('checking ' + seatingChart[i][c])
        if (!(seatingChart[i] == undefined) && (seatingChart[i][c] == 'L' || seatingChart[i][c] == '#')) {
            seatingOptions = seatingOptions + seatingChart[i][c]
            // console.log(seatingOptions)
            break
        }
        c = c - 1
    }

    return seatingOptions
}