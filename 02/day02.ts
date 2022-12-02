import * as fs from "fs";

const getData = (fileName:string):Array<Array<string>> => {
    const data:string = fs.readFileSync(fileName, 'utf-8').replace(/\r/g, '');

    const rounds = data.split('\n').map(round => round.split(' '));

    return rounds;
}


// A -> Rock, B -> Paper, C -> Scissors
// X -> Rock, Y -> Paper, Z -> Scissors

// Score = {Rock: 1, Paper: 2, Scissors: 3} + {Lost: 0, Draw: 3, Win: 6}

const shapePoints = {
    "Rock": 1,
    "Paper": 2,
    "Scissors": 3
};

const roundPoints = {
    "Lost": 0,
    "Draw": 3,
    "Win": 6
};

const otherMove = {
    "A": "Rock",
    "B": "Paper",
    "C": "Scissors"
};

const sampleData:Array<Array<string>> = getData('./day02sample.txt');
const data:Array<Array<string>> = getData('./day02.txt');

const puzzle1 = (data: Array<Array<string>>):number => {
    const calculateRoundScore = (round: Array<string>): number => {
        const selfMove = {
            "X": "Rock",
            "Y": "Paper",
            "Z": "Scissors"
        };
        
        const other = otherMove[round[0]];
        const self = selfMove[round[1]];
    
        let points = shapePoints[self];
        if(other === self) {
            // Tie
            points += roundPoints.Draw;
        } else {
            if((self === "Rock" && other === "Scissors") || (self === "Paper" && other === "Rock") || (self === "Scissors" && other === "Paper") ) {
                points += roundPoints.Win;
            } else {
                points += roundPoints.Lost;
            }
        }
    
        return points;
    }
    return data.reduce((total, round) => total + calculateRoundScore(round), 0);
}

const puzzle2 = (data: Array<Array<string>>):number => {
    const calculateRoundScore = (round: Array<string>): number => {
        const outcomes = {
            "X": "Lost",
            "Y": "Draw",
            "Z": "Win"
        };

        const other = otherMove[round[0]];
        const outcome = outcomes[round[1]];
        let self = "";

        let points = roundPoints[outcome];

        switch(outcome) {
            case "Draw":
                self = other;
                break;
            case "Win":
                switch(other) {
                    case "Scissors":
                        self = "Rock";
                        break;
                    case "Rock":
                        self = "Paper";
                        break;
                    case "Paper":
                        self = "Scissors";
                        break;
                }
                break;
            case "Lost":
                switch(other) {
                    case "Scissors":
                        self = "Paper";
                        break;
                    case "Rock":
                        self = "Scissors";
                        break;
                    case "Paper":
                        self = "Rock";
                        break;
                }
                break;
        }
        
        points += shapePoints[self];

        return points;
    }

    return data.reduce((total, round) => total + calculateRoundScore(round), 0);
}

console.log(puzzle1(sampleData));
console.time('puzzle1');
console.log(puzzle1(data));
console.timeEnd('puzzle1');

console.log(puzzle2(sampleData));
console.time('puzzle2');
console.log(puzzle2(data));
console.timeEnd('puzzle2');