let fs = require('fs');
let textByLine = fs.readFileSync('Day14/Day14.txt').toString().split("\r\n");

let memoryValues = maskingValues(textByLine)
countValues(memoryValues)

function maskingValues(input){
    let mask 
    let number
    let numberBinary
    let mem

    let allValues = {}

    for(let i = 0; i < input.length; i++){
        if(input[i].includes('mask')){
            mask = input[i].substring(input[i].indexOf('=') + 2)
        } else {
            number = input[i].substring(input[i].indexOf('=') + 1)
            numberBinary = convertDecimalToBinary(number)
            numberBinary = applyMaskAndReturnInt(numberBinary, mask)
            mem = input[i].substring(input[i].indexOf('[')+1, input[i].indexOf(']'))
            allValues[mem] = numberBinary
        }
    }
    return allValues
}

function convertDecimalToBinary(number){
    var binary = "";
    var temp = number;
 
    while(temp > 0){
        if(temp % 2 == 0){
            binary = "0" + binary;
        }
        else {
            binary = "1" + binary;
        }

        temp = Math.floor(temp / 2);
    }
    binary = "000000000000000000000000000000000000" + binary
    binary = binary.substring((binary.length)-36)

    return binary;
}

function applyMaskAndReturnInt(binary, mask){
    var binaryString = binary
    for(var i = 0; i < binaryString.length; i++){
        if(!(mask[i] == 'X')){
            var index = i;
            binaryString = binaryString.substring(0, index) + mask[i] + binaryString.substring(index + 1);
        }
    }
    return parseInt(binaryString, 2);
}

function countValues(values){
    let count = 0
    for (var key in values){
        count = count + values[key] 
      }
    console.log('count  = ' + count)
}
