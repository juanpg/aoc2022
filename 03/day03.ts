import { readData } from "../parse";

const parseData = (fileName: string): String[] => {
    const data = readData(fileName);

    return data.split('\n');
}

const sampleData:String[] = parseData('./day03sample.txt');
const data:String[] = parseData('./day03.txt');

const calculatePriority = (letter: String): number => {
    let baseLetter = 'a'; 
    let offset = 1;
    if(letter === letter.toUpperCase()) {
        baseLetter = 'A'; 
        offset = 27;
    }

    return letter.charCodeAt(0) - baseLetter.charCodeAt(0) + offset;
}

const intersect = (bag1: String[], bag2: String[]): String[] => {
    const set1 = new Set(bag1);
    const set2 = new Set(bag2);

    const intersection = new Set(Array.from(set1).filter(x => set2.has(x)));

    return Array.from(intersection);
}


const puzzle1 = (data: String[]) :number => {
    return data.map(rucksack => {
        
        const length:number = rucksack.length;
        const bag1 = rucksack.slice(0, length / 2).split("");
        const bag2 = rucksack.slice(length / 2).split("");

        const common:String = intersect(bag1, bag2)[0];

        return calculatePriority(common);
    }).reduce((total, priority) => total + priority, 0);
}

const puzzle2 = (data: String[]) :number => {
    let total = 0;
    for(let i=0; i<data.length; i += 3) {
        const bag1 = data[i].split("");
        const bag2 = data[i+1].split("");
        const bag3 = data[i+2].split("");

        const common:String = intersect(intersect(bag1, bag2), bag3)[0];

        total += calculatePriority(common);
    }

    return total;
}

console.log(puzzle1(sampleData));
console.time('puzzle1');
console.log(puzzle1(data));
console.timeEnd('puzzle1');

console.log(puzzle2(sampleData));
console.time('puzzle2');
console.log(puzzle2(data));
console.timeEnd('puzzle2');