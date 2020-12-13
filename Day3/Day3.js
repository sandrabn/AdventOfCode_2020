var input = ['...#...#....#....##...###....#.',
    '#.#...#...#....#.........#..#..',
    '.#....##..#.#..##..##..........',
    '.....#.#.............#..#......',
    '.......#...#.##.#......#..#.#..',
    '#.#....#......##........##.....',
    '.....##.#....#..#...#...##...#.',
    '...#...#..#.......#..#...##...#',
    '..........#...........##.......',
    '..#..#..#...................#..',
    '#..#....#.....##.#.#..........#',
    '.#.##.......###.....#.#...#....',
    '.#..##....##....#.......#...###',
    '#.#..##...#.#..#...............',
    '.........#....#.......##.#.#...',
    '...###...##....##...#..##.#..#.',
    '....#.........#..#...#.......#.',
    '....................#..#.#.#...',
    '..#....#..........#...........#',
    '.#.....#..#.....##........##..#',
    '#..##..#...##............#..##.',
    '.#..##....#..........#..#.##.#.',
    '..#####..#.#............##.....',
    '...###.#....##..#.#....#.....#.',
    '.#.......##....#...#.#.....##..',
    '...#....#...##.#...#..#........',
    '.####.....#....#.#.#...#.......',
    '...#....#.....#.......#........',
    '#..#.#.......#...#............#',
    '...#.....###.##....#.#.###.#...',
    '.#.........#.......#.#....##...',
    '#.#..#...#.#...##......#..#....',
    '.....#...#..#.#...#..###..#....',
    '......#.........#...###........',
    '.....#..##...#..........#.....#',
    '..#..#.#.##.#...#....#....##..#',
    '##....#.##...#.##.#..##....#...',
    '.....#.#.#.#..#....##.#...#.#..',
    '.....##.......#........#.......',
    '...#.#.....#...#...##.#......##',
    '........#..#.#...#.#.....#.#..#',
    '#..##...#.#...##..##...#.#...##',
    '.##.#.#..#...#.....#.#.##.#...#',
    '.#.####.........##.........#..#',
    '.##..............#....#...#...#',
    '......#...#..#...#..#..###.#...',
    '.......##...#.#.#..##..#......#',
    '.....#....#..##..#.........#...',
    '.....#..#.#.#........#.#.####..',
    '#..#.......###....##...........',
    '#..##..........#.#......#.#....',
    '.....##........#...#..##.......',
    '###...#.##.#.#.#.#.##...##.....',
    '....#...#........##.#.##..##...',
    '.#..#.#.#......#.......##..#..#',
    '.#...#.................#....#..',
    '.##..#..........#..##.......#..',
    '.#.#.#.....#..#.#.........##..#',
    '...#......##...#.......#...##..',
    '##...###....#.###.............#',
    '#.....#.#..#.#..#........#.#.#.',
    '.....#.#......##..#.#.....#.##.',
    '.......#...........#..#.......#',
    '..#....#.#.#......#.....#...#..',
    '.....##........#..##..#..##....',
    '#.#........#...##....#.#..##...',
    '#......#......#....#..#...#.##.',
    '....#.#.......#.#.#............',
    '......####.#.##...#.#.##.....##',
    '..###.#.#..#.........#.####....',
    '.#.......#..#.#....#.#..#.#.##.',
    '#....#....#............##...##.',
    '....#....#............#....#..#',
    '..#........#..#....#..#..#...#.',
    '.#......##....#..........#....#',
    '#.##.....#..........#.###.#....',
    '....##...#.....#.#......#.##...',
    '#.#.....#.......###.###..#..#.#',
    '..###..##.............#.####.##',
    '#....#.....#....#..##.......#..',
    '.....#....#...#.#.#.#..#...#.##',
    '...#.....#..#....###......#.#.#',
    '##.........#.#..#..#.#..#.....#',
    '.#.....#.#....#.........##..#.#',
    '.#.#..#.###..#..#..........#...',
    '.##....#.#.#...#......##.....#.',
    '#.#....#....#...#...##...#..#..',
    '#...#........#....#....#......#',
    '#......#...#..#.#.##.....##..#.',
    '....#...#......##...#..#....#..',
    '.#......##.##.......#.......#..',
    '.#...#..####...........#.#.#...',
    '.........#...#.#.........#.....',
    '#.##.....#.#..#.#.###...###..#.',
    '#...##.###......#.###..##.#.##.',
    '...##.#.....#....#..#......#...',
    '#....###.#..#...##.....#......#',
    '........###...#...#............',
    '........#....#...#...#....#...#',
    '#....#..#..#....#.#........#.#.',
    '##...#.....#.#..........#..#..#',
    '#.#...##.....#........#...#...#',
    '##.#.#.......#...#..#.###....#.',
    '.#.......#....##..##...#.....#.',
    '#....#....#.....#.......#......',
    '.##.##.##...##...#.#.#..#..#...',
    '#..#..#.##....#......##....###.',
    '.......#.#.........#..##.#...##',
    '.#..##...#....#.....#..........',
    '..#.#...#......#.#..#..........',
    '.##....#.#.#.##.......###...#..',
    '..##.#...#.#.#.#.......#..#....',
    '#..#.......#...#........#.....#',
    '.....#.......#......###..#.....',
    '...##.#.......#.....##.....##..',
    '##..#.......#.#.....#....#.....',
    '..#....#.##.##...#...#......#..',
    '.#..#.###.#....###........#...#',
    '....##.##...##..#..#.#....#....',
    '..###...##.....##..............',
    '#....#...##...#....#..........#',
    '.##........#......##...##...#.#',
    '..#.#.##..........#......#.....',
    '...#...#.........#.##........##',
    '..#.#..#.#..#...#....#...#.....',
    '...##...#..#.###.#..#.#...#....',
    '....###........#..#..##...#....',
    '#.#....##.......#.#........#...',
    '.###...#..#.#.#.#..#...#..##.##',
    '..#.........#####.#......#..#..',
    '#.....#.....##..#....#...#...#.',
    '...#..#....##....##.....##.#...',
    '.........#............#.##.....',
    '....##.#..#....#.##.......#..##',
    '.###....#.#..#......#.#.......#',
    '.###...###.#.........#.#..#...#',
    '.....#........#..#.#..#.#..##.#',
    '.###..#....##.........#..##....',
    '..#.......#..#..##...#.###.#...',
    '#.......#...........#.#...#.###',
    '#.##.##...##.#...##..#.....#...',
    '..#..#........###.#.....##.....',
    '#.....##....#...##...####..#..#',
    '....#........#...#...#.........',
    '......#.#.#.#.......#..#.....##',
    '..#..#....#.....#.#...##......#',
    '..#....#...#.###.........#.###.',
    '...#......##..#.#.....#...#....',
    '...#.......#...#...#........##.',
    '............#...#..#....#.....#',
    '....##......................#..',
    '#.#.#....#....#..........##....',
    '#.#.....#.#.##..#...#.##....##.',
    '...#...#..#...#..#.#.#.......#.',
    '#.....#..........#.........##.#',
    '#...##..#..#.#.......###....#..',
    '.#...#..##....#.....##.......#.',
    '....#.##.....#.........#.#....#',
    '........#.#...####..#.......#.#',
    '.####...#.#......####.....#.##.',
    '###..#....#..#.......#.#..##..#',
    '#......#.#....##..#.##.#....#.#',
    '...###...#...#..##.#..#..#.#...',
    '...##..##....#..#.....#........',
    '.....#..............#......#..#',
    '......#....#......#..#.........',
    '#..#.....#.##...........##.....',
    '.#..#.#..................##....',
    '#.#..#..##...#....#.#......#...',
    '.##.#.##......#.##...#...#...#.',
    '..#...#.........#.#..#.#....#..',
    '.#.####.#..#.#......##.#..#....',
    '#..#.......#....#..............',
    '....#............#..#..........',
    '.....#####.....#.....#..##...##',
    '#.#....#.#...............#..##.',
    '.#.#..#...#......#.....#.#.#...',
    '.#....#.#.#......#.....##....#.',
    '....#....#.##..#.......###...##',
    '.....#..#.##...#...#...#..#.#..',
    '##..#........#.#..#..##......#.',
    '.#..#..##.......#..#.....#.....',
    '.#.#.....###..##.#.#...........',
    '..##..##.####..........#..#....',
    '..##..#..#...#....#......#.#...',
    '#...#.#......##.....##.#..###..',
    '#..#..............#........##.#',
    '.........#.##..#.#..#..##.##.#.',
    '#....##....#.#..#.#...##..#....',
    '.#....#.......#............##..',
    '.......#.#.......#...#.#......#',
    '......##...#.......#.#........#',
    '..###..#.#.##....##...#....##..',
    '..##.##..........##..###.......',
    '.#.#.#..#..#.#.......#.#...##..',
    '..#..##.........#.###..#......#',
    '....#.#.#...##.#...#...##..###.',
    '..###..##.........##...#...#..#',
    '.#..##...#.......#.......#..#.#',
    '........##....##....#.#.###.#.#',
    '#.....#.#.................#.#..',
    '....#.#.#.....##.####.#......#.',
    '....#.......#.#.##.##..........',
    '...#...........#...#.##...#.###',
    '#....#....#..........#.##......',
    '##..#...........##.....##.##...',
    '.#.##...##..##....#..#.....####',
    '#...#...#.##..........##..##...',
    '....##..#....#.....#.#...#....#',
    '..#....#..##...###.#.#.........',
    '#......#.#.#...#...#.........#.',
    '#............###.#.#.#..##...#.',
    '.##.....####...##..##..#..##.#.',
    '#..#........#.....#.#.....#...#',
    '#............#....#.#.#........',
    '......##...##.#....#.....#...#.',
    '..#........##......#.#.....##..',
    '.#..#..#.....##.......#..#.#..#',
    '.#....#..#....##.#.#.#..#..#.##',
    '.####.#..........#...#..##.....',
    '...###..###...##..#............',
    '#..#.....##.#...#..##..#.......',
    '.....##....#...###.##...#......',
    '...##..#...#..#..##....##....#.',
    '...###....#.###.#.#.##....#....',
    '##.#.#.....#....#.#....#..#....',
    '.......##.....#.#..##...##...#.',
    '.#....#.#...##.#..#....#.....#.',
    '..#...#..#...#.##........#...#.',
    '#....#......##.#....##...#.#..#',
    '.....#..#..#..#......#...#.#.#.',
    '..###....#........#...#.......#',
    '###...#.......#.#.......##.##..',
    '......##.....#.#........#....#.',
    '#.##..#.#.#.#..#....#.##.....#.',
    '..........#.##.#...#...#..#..#.',
    '..#...##.#..........#..##.###..',
    '..###..##.##..#.#...##.####..#.',
    '#.#.#...............##....###.#',
    '....#.........#.#....#.#....#.#',
    '..#...#.###...#....###.....#...',
    '..#..#....#...#............#...',
    '.#..#....#..##.....##..........',
    '..#....#.#...#.#.#.#.......##.#',
    '.........#....##........#.#....',
    '...#..##.#..#.##...#...#.#....#',
    '....####...#...####.#....###..#',
    '......##...#.##.#.......#..#...',
    '#.#...#.#...#.#...#....#.#.#...',
    '.#.....##...#.....###.#....#...',
    '......##.....###...#.#...#.#...',
    '#..#..##.#.#......#....#..#..#.',
    '....#.###.....#..#...#.##.....#',
    '##.##........#......#....#..##.',
    '##.....##.#.....#.....##.....#.',
    '.....#.##...#.#..#.#.#.....#...',
    '.#.##..#...#.#..#.....#.#......',
    '.....##.......#..#...##..#..#..',
    '#.....#..#.####......#........#',
    '.#..#..##.#..##............#..#',
    '.##..#.#....##.##.....#......#.',
    '.......##.........#..#.........',
    '.#...#.......................#.',
    '#......#.#....##.#.......#..#..',
    '..##..##......#.......#....#.#.',
    '##......#......##...##.........',
    '..#....####....#.#.....##.#.#..',
    '..........#..#.#.#.....#..#.#..',
    '##..##...........##.......#....',
    '##....#.#....#..#......###....#',
    '...#.#.#..#.......##.......#...',
    '#....#.......#.......#.........',
    '...##......##....#...#......#.#',
    '#......#####.#.........#.....#.',
    '#..#.............#..#....#...#.',
    '.......#.##..#..#..#..#....####',
    '......#.##..##..........###...#',
    '.#.##....###..#........#....##.',
    '#......#..#...###.#...#.....#..',
    '.#.#.......#....##.......#.#...',
    '..#.##..#..##.....#.........#.#',
    '#.#...#..#.##....#.......##....',
    '.#.....###....#.#..#...#.....#.',
    '#...#..#.......#.#.....##...#.#',
    '#.#####.........#....##.....#..',
    '#....#..##...#....#.##.......#.',
    '.#.#.........##....##....#.....',
    '...#..##.......#....#.#.#......',
    '#.###.##...###....#.....#.####.',
    '.#...#.#.#..##.#..........#....',
    '#.#.....#.##.#..####.....##.#..',
    '...###.##..####.......#......##',
    '.##..#.........#...#.#.....#.##',
    '..#.....##....###.....#.#...##.',
    '#....#....#..#....#.##.........',
    '......###....#.#..#..#....##...',
    '.#.#................#.......##.',
    '...#.......#.........#.#.......',
    '...#..........#...##.....###...',
    '....#......#...#...............',
    '.##...#....#.....#.##......#...',
    '.#.....###...##..##...#.#......',
    '....##........#.....#...#....#.',
    '#.........#.#...##...#.#..#....',
    '...#.#.....#.#........#.#....#.',
    '.#........#.....#.#.#.#.#..#...',
    '....#...#.....#.#....#........#',
    '..###.#....#.#....##...##..#.##',
    '.#....#.#.####.#.#.....#.......',
    '.#...#...#.................##.#',
    '..................##..#..#.#.#.',
    '.#..#............##....###.....',
    '.......#....#...........#......',
    '....#.#.#.....###.........#..##',
    '...#.#....#.#.##.#.##.....##..#',
    '.#.##.#...##...#.......#.....##',
    '.#............#...#..##...#.#.#',
    '#.##..#.##..#..##.###.#........',
    '..............##....#...#..#.#.',
    '.#.#...#.#....#....###........#',
    '.#....#.#....#......###........',
    '..#.......##......#.##.....#...',
    '.....#......#..#...#.#.....#...']

//Puzzle part 1
var first = countTreesWithSlopeAndDownhill(input, 1)

//Puzzle part 2
var second = countTreesWithSlopeAndDownhill(input, 3)
var third = countTreesWithSlopeAndDownhill(input, 5)
var fourth = countTreesWithSlopeAndDownhill(input, 7)
var fifth = countTreesWithSlopeAndDownhill(input, 1, 2)


console.log(first * second * third * fourth * fifth)    

function countTreesWithSlopeAndDownhill(input, slope, down = 1) {
    var totalTrees = 0
    var position = 0
    var rest
    var row
    for (var i = 0; i < input.length; i = i + down) {
        row = input[i]
        if (row.charAt(position) == '#') {
            totalTrees++
        }
        if (position + slope > 30) {
            rest = 30 - position
            if (rest == 0) {
                position = slope - 1
            } else if (rest == 1) {
                position = slope - 2
            } else if (rest == 2) {
                position = slope - 3
            } else if (rest == 3) {
                position = slope - 4
            } else if (rest == 4) {
                position = slope - 5
            } else if (rest == 5) {
                position = slope - 6
            } else if (rest == 6) {
                position = slope - 7
            }

        } else {
            position = position + slope
        }
    }

    console.log('Total number of threes: ' + totalTrees)
    console.log('Right: ' + slope)
    console.log('Down: ' + down)
    return totalTrees
}

// Right 1, down 1. = 80
// Right 3, down 1. = 162 (This is the slope you already checked.)
// Right 5, down 1. = 77
// Right 7, down 1. = 83
// Right 1, down 2. = 37



