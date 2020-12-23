const { time } = require('console');
let fs = require('fs');
let textByLine = fs.readFileSync('Day13/Day13_testinput.txt').toString().split("\r\n");

let buslines = getRelevantInput(textByLine[1])
let timestamp = textByLine[0]

getTforBusline(textByLine[1])
//1006401
//Puzzle part 1
//getNearestTimestampFromBusline(timestamp, buslines)

function getNearestTimestampForTwoBuslines(buslines){
    let bustimeT = buslines['17']
    let bustimeSecondLine = buslines['37']

    for(let i = 0; i < buslines.length; i++){
        bustime = 0
        while(bustime < timestamp){
            bustime = bustime + Number(buslines[i])
        }
        console.log('Nearest time for busline ' + buslines[i] + ' time ' + bustime)
    }
}

function getNearestTimestampFromBusline(timestamp, buslines){
    let bustime = 0
    for(let i = 0; i < buslines.length; i++){
        bustime = 0
        while(bustime < timestamp){
            bustime = bustime + Number(buslines[i])
        }
        console.log('Nearest time for busline ' + buslines[i] + ' time ' + bustime)
    }
}

function getTforBusline(input){
    let buslines = {}
    input = input.split(',')
    for(let i = 0; i < input.length; i++){
        if(!(input[i] == 'x')){
            buslines[i] = input[i]
        }
    }
    console.log(buslines)
    return buslines
}

function getRelevantInput(input){
    let buslines = []
    input = input.split(',')
    for(let i = 0; i < input.length; i++){
        if(!(input[i] == 'x')){
            buslines.push(input[i])
        }
    }

    return buslines
}