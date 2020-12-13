let fs = require('fs');
let textByLine = fs.readFileSync('Day12/Day12.txt').toString().split("\r\n");

// for (let c = 0; c < textByLine.length; c++) {
//     if (textByLine[c].includes('L') || textByLine[c].includes('R')) {
//         console.log(textByLine[c])
//     }
// }


let east = 10
let south = -1
moveBoat(textByLine)

function moveBoat(input) {
    let eastBoat = 0
    let southBoat = 0
    for (let i = 0; i < input.length; i++) {
        //console.log(input[i])
        if (input[i].includes('R') || input[i].includes('L') || input[i].includes('N') || input[i].includes('S') || input[i].includes('E') || input[i].includes('W')) {
            moveWaypoint(input[i])

        }
        if (input[i].includes('F')) {
            eastBoat = eastBoat + (Number(input[i].substring(1) * east))
            southBoat = southBoat + (Number(input[i].substring(1) * south))

        }
        // console.log('east waypoint: ' + east)
        // console.log('south waypoint: ' + south)
        // console.log('east boat: ' + eastBoat)
        // console.log('south boat: ' + southBoat)
        // console.log("")
    }
    console.log('east boat end : ' + eastBoat)
    console.log('south boat end: ' + southBoat)
    console.log('manhattan: ' + (eastBoat+-southBoat))
}

function moveWaypoint(input){
    let eastOld = east
    let southOld = south
    if(input.includes('R90') || input.includes('L270')){
        east = -southOld
        south = eastOld
    }
    if(input.includes('R180') || input.includes('L180')){
        east = -eastOld
        south = -southOld
    } 
    if(input.includes('R270') || input.includes('L90')){
        east = southOld
        south = -eastOld
    }
    if(input.includes('N')){
        south = south - Number(input.substring(1))
    }

    if(input.includes('S')){
        south = south + Number(input.substring(1))
    }

    if(input.includes('W')){
        east = east - Number(input.substring(1))
    }

    if(input.includes('E')){
        east = east + Number(input.substring(1))
    }
}



function moveBoatPuzzleOne(input){
    let east = 0
    let south = 0
    let facing = 0
    let directions = ['east', 'south', 'west', 'north']

    for(let i = 0; i< input.length; i++){
        if(input[i].includes('R') || input[i].includes('L')){

            if(input[i].includes('R90') || input[i].includes('L270')){
                if(directions[facing + 1] == undefined){
                    facing = facing - 3
                } else {
                    facing = facing + 1
                }
            }
            if(input[i].includes('R180') || input[i].includes('L180')){
                if(directions[facing + 2] == undefined){
                    facing = facing - 2
                } else {
                    facing = facing + 2
                }
            } 
            if(input[i].includes('R270') || input[i].includes('L90')){
                if(directions[facing + 3] == undefined){
                    facing = facing - 1
                } else {
                    facing = facing + 3
                }
            }
        }

        if(input[i].includes('N')){
            south = south - Number(input[i].substring(1))
        }

        if(input[i].includes('S')){
            south = south + Number(input[i].substring(1))
        }

        if(input[i].includes('W')){
            east = east - Number(input[i].substring(1))
        }

        if(input[i].includes('E')){
            east = east + Number(input[i].substring(1))
        }

        if(input[i].includes('F')){
            let direction  = directions[facing]
            if(direction == 'north'){
                south = south - Number(input[i].substring(1))
            } 
            else if (direction == 'south'){
                south = south + Number(input[i].substring(1))
            }
            else if (direction == 'west'){
                east = east - Number(input[i].substring(1))
            }
            else if (direction == 'east'){
                east = east + Number(input[i].substring(1))
            }
        }

    }

    console.log('east: ' + east)
    console.log('south: ' + south)
    console.log(east + south)
}


// Action N means to move north by the given value.
// Action S means to move south by the given value.
// Action E means to move east by the given value.
// Action W means to move west by the given value.
// Action L means to turn left the given number of degrees.
// Action R means to turn right the given number of degrees.
// Action F means to move forward by the given value in the direction the ship is currently facing.