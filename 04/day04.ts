import { readData } from "../parse";

const parseData = (fileName: string): number[][] => {
    const data = readData(fileName);

    return data.split('\n').map(line => {
        const re = /(\d+)-(\d+),(\d+)-(\d+)/;
        const [_, lb1, ub1, lb2, ub2] = re.exec(line);
        return [lb1, ub1, lb2, ub2].map(Number);
    });
}

const sampleData: number[][] = parseData('./day04sample.txt');
const data:number[][] = parseData('./day04.txt');

const puzzle1 = (data: number[][]): number => {
    return data.filter(([lb1, ub1, lb2, ub2]) => {
        return (lb1 >= lb2 && ub1 <= ub2) || (lb2 >= lb1 && ub2 <= ub1);
    }).length;
}

const puzzle2 = (data: number[][]): number => {
    return data.length - data.filter(([lb1, ub1, lb2, ub2]) => {
        return (ub1 < lb2) || (ub2 < lb1);
    }).length;
}


console.log(puzzle1(sampleData));
console.time('puzzle1');
console.log(puzzle1(data));
console.timeEnd('puzzle1');

console.log(puzzle2(sampleData));
console.time('puzzle2');
console.log(puzzle2(data));
console.timeEnd('puzzle2');