import { readData } from "../parse";

const parseData = (fileName: string): Array<string> => {
    const data: string = readData(fileName);

    return data.split("\n");
}

const puzzle1 = (rounds: Array<string>): number => {
    // A -> Rock, B -> Paper, C -> Scissors
    // X -> Rock, Y -> Paper, Z -> Scissors    
    const shapePoints = {
        "X": 1,
        "Y": 2,
        "Z": 3
    };
    const roundPoints = {
        "Win": 6,
        "Draw": 3,
        "Lost": 0
    };
    const outcomes = {
        "A X": shapePoints.X + roundPoints.Draw ,
        "A Y": shapePoints.Y + roundPoints.Win,
        "A Z": shapePoints.Z + roundPoints.Lost,

        "B X": shapePoints.X + roundPoints.Lost ,
        "B Y": shapePoints.Y + roundPoints.Draw,
        "B Z": shapePoints.Z + roundPoints.Win,

        "C X": shapePoints.X + roundPoints.Win ,
        "C Y": shapePoints.Y + roundPoints.Lost,
        "C Z": shapePoints.Z + roundPoints.Draw,
    };

    return rounds.reduce((total, round) => total + outcomes[round], 0);
};

const puzzle2 = (rounds: Array<string>): number => {
    // A -> Rock, B -> Paper, C -> Scissors
    // X -> Lost, Y -> Draw, Z -> Win

    const shapePoints = {
        "Rock": 1,
        "Paper": 2,
        "Scissors": 3
    };
    const roundPoints = {
        "Win": 6,
        "Draw": 3,
        "Lost": 0
    };

    const outcomes = {
        "A X": roundPoints.Lost + shapePoints.Scissors,
        "B X": roundPoints.Lost + shapePoints.Rock,
        "C X": roundPoints.Lost + shapePoints.Paper,

        "A Y": roundPoints.Draw + shapePoints.Rock,
        "B Y": roundPoints.Draw + shapePoints.Paper,
        "C Y": roundPoints.Draw + shapePoints.Scissors,

        "A Z": roundPoints.Win + shapePoints.Paper,
        "B Z": roundPoints.Win + shapePoints.Scissors,
        "C Z": roundPoints.Win + shapePoints.Rock
    };

    return rounds.reduce((total, round) => total + outcomes[round], 0);
}



const sampleData:Array<string> = parseData('./day02sample.txt');
const data:Array<string> = parseData('./day02.txt');

console.log(puzzle1(sampleData));
console.time('puzzle1');
console.log(puzzle1(data));
console.timeEnd('puzzle1');

console.log(puzzle2(sampleData));
console.time('puzzle2');
console.log(puzzle2(data));
console.timeEnd('puzzle2');