import { readData } from "../parse";

const parseData = (fileName: string): string[][] => {
    const data = readData(fileName);

    return data.split('\n').map(line => line.split(','));
}

const sampleData:String[][] = parseData('./day04sample.txt');
const data:String[][] = parseData('./day04.txt');

const puzzle1 = (data: String[][]): number => {
    return data.filter(([elf1, elf2]) => {
        const [lb1, ub1] = elf1.split('-').map(Number);
        const [lb2, ub2] = elf2.split('-').map(Number);
        return (lb1 >= lb2 && ub1 <= ub2) || (lb2 >= lb1 && ub2 <= ub1);
    }).length;
}

const puzzle2 = (data: String[][]): number => {
    return data.length - data.filter(([elf1, elf2]) => {
        const [lb1, ub1] = elf1.split('-').map(Number);
        const [lb2, ub2] = elf2.split('-').map(Number);
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