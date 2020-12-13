const { group } = require('console');
let fs = require('fs');
let textByLine = fs.readFileSync('Day6/Day6.txt').toString().split("\r\n\r\n");

//Puzzle part 1
countTotalUniqueAnswers(textByLine)

//Puzzle part 2
countQuestionsToEveryoneSaidYes(textByLine)

function removeDuplicateCharacters(string) {
    return string
        .split('')
        .filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        })
        .join('');
}

function countTotalUniqueAnswers(answers) {
    totalAnswers = 0
    for (let i = 0; i < answers.length; i++) {
        answers[i] = answers[i].replace(/\r\n/gi, "")
        let uniqueAnswers = removeDuplicateCharacters(answers[i])
        totalAnswers = totalAnswers + uniqueAnswers.length
    }

    console.log(totalAnswers)
}

function countQuestionsToEveryoneSaidYes(answers) {
    totalAnswers = 0
    for (let i = 0; i < answers.length; i++) {
        let individualAnswers = answers[i].split("\r\n")
        let lengthIndividualAnswers = individualAnswers.length

        if (individualAnswers.length == 1) {
            totalAnswers = totalAnswers + individualAnswers[0].length
        } else {
            let matchingAnswers = 0

            for (let c = 0; c < individualAnswers[0].length; c++) {
                let char = individualAnswers[0][c]
                const regex = new RegExp(char, 'g');

                var countItems = (answers[i].match(regex) || []).length;
                if (countItems == lengthIndividualAnswers) {
                    matchingAnswers += 1
                }
            }
            totalAnswers = totalAnswers + matchingAnswers
        }
    }
    console.log('Echte total answers = ' + totalAnswers)
    return totalAnswers
}