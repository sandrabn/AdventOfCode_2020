let fs = require('fs');
let textByLine = fs.readFileSync('Day14/Day14_testinput_part2.txt').toString().split("\r\n");

let memoryValues = maskingValues(textByLine)
countValues(memoryValues)

function maskingValues(input){
    let mask 
    let number
    let numberBinary
    let allWildcards = []
    let value
    let allValues = {}

    for(let i = 0; i < input.length; i++){
        if(input[i].includes('mask')){
            mask = input[i].substring(input[i].indexOf('=') + 2)
        } else {
            number = input[i].substring(input[i].indexOf('[') + 1, input[i].indexOf(']'))
            value = input[i].substring(input[i].indexOf('=') + 1)
            numberBinary = convertDecimalToBinary(number)
            allWildcards = applyMaskAndReturnInt(numberBinary, mask)
            for(let c = 0; c < allWildcards.length; c++){
                let mem = parseInt(allWildcards[c], 2)
                allValues[mem] = value
            }
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
    var mem
    for(var i = 0; i < binaryString.length; i++){
        if(mask[i] == 'X' || mask[i] == '1'){
            var index = i;
            binaryString = binaryString.substring(0, index) + mask[i] + binaryString.substring(index + 1);
        }
    }
   
    var addresses = []
    var wildcardArray = wildcard(binaryString.split(''), 0, addresses)
    return wildcardArray
}
//https://github.com/matthewgehring/adventofcode/blob/main/2020/day14/script.js
//takes address as array returns array of addresses as strings, replacing X with 1 or 0
function  wildcard(address, index=0, addresses){
    if(index === address.length){
        addresses.push(address.toString().replace(/,/g, ''))
        return;
    }

    if(address[index] === 'X'){
        address[index] = '0';
        wildcard(address, index + 1, addresses)
        address[index] = '1';
        wildcard(address, index + 1, addresses)
        address[index] = 'X';
    }else{
        wildcard(address, index + 1, addresses)
    }
    return addresses
}

function countValues(values){
    let count = 0
    for (const [key, value] of Object.entries(values)) {
        count = count + Number(value) 
    }
    console.log('count  = ' + count)
}
