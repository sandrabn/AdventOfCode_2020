// const readline = require('readline');


let fs = require('fs');
let textByLine = fs.readFileSync('Day5/Day5.txt').toString().split("\n");

//Puzzle part 1
let allSeatIds = sumRowAndPlane(textByLine)
let biggestNumber = biggestNumberInArray(allSeatIds)
console.log(biggestNumber)

//Puzzle part 2
findMySeat(allSeatIds)

function sumRowAndPlane(boardingpass){
    let allSeatIds = []
    for(let i = 0; i < boardingpass.length; i++){
        let sum = (findRowInPlane(boardingpass[i]) * 8) + findseatInPlane(boardingpass[i])
        allSeatIds.push(sum)
    }
    return allSeatIds
}

function biggestNumberInArray(arr) {
    const max = Math.max(...arr);
    return max;
  }

function findMySeat(allSeatIds){
    allSeatIds = allSeatIds.sort(function(a, b){return a-b});
    for(let i = 0; i < allSeatIds.length; i++){
        if(!(Number(allSeatIds[i]) == (Number(allSeatIds[i+1]) - 1))){
            console.log(allSeatIds[i])
            console.log(allSeatIds[i+1])
        }
    }
}

function findRowInPlane(boardingpass) {
    let rowMax = 127
    let rowMin = 0
    let foundRow = 0
    for (let c = 0; c < 7; c++) {
        if (boardingpass[c] == "F") {
            rowMax = rowMax - Math.ceil((rowMax - rowMin) / 2)
            rowMin = rowMin
        } else if (boardingpass[c] == "B") {
            rowMax = rowMax
            rowMin = rowMin + Math.ceil((rowMax - rowMin) / 2)
        }
    }
    if (boardingpass[6] == "F") {
        foundRow = rowMin
    } else if (boardingpass[6] == "B") {
        foundRow = rowMax
    }

    return foundRow
}

function findseatInPlane(boardingpass) {
    let seatMax = 7
    let seatMin = 0
    let foundSeat = 0
    
    for (let c = 7; c < 10; c++) {
        if (boardingpass[c] == "L") {
            seatMax = seatMax - Math.ceil((seatMax - seatMin) / 2)
            seatMin = seatMin
        } else if (boardingpass[c] == "R") {
            seatMax = seatMax
            seatMin = seatMin + Math.ceil((seatMax - seatMin) / 2)
        }
    }
    
    if (boardingpass[9] == "L") {
        foundSeat = seatMin
    } else if (boardingpass[9] == "R") {
        foundSeat = seatMax
    }
    return foundSeat
}