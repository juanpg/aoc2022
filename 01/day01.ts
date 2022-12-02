import { readData } from "../parse";
import { maxHeap } from "../maxHeap";

const parseData = (fileName:string):maxHeap => {
    const data:string = readData(fileName);

    return data.split('\n\n').reduce((heap, elf) => {
        heap.insert( elf.split('\n').reduce((total, item) => total + parseFloat(item), 0))
        return heap;
    }, new maxHeap());
}

const sampleData:maxHeap = parseData('./day01sample.txt');
const data:maxHeap = parseData('./day01.txt');

const puzzle1 = (heapData:maxHeap):number => heapData.peek();

const puzzle2 = (heapData:maxHeap):number => heapData.extractMax() + heapData.extractMax() + heapData.extractMax();

console.log(puzzle1(sampleData));
console.time('puzzle1');
console.log(puzzle1(data));
console.timeEnd('puzzle1');

console.log(puzzle2(sampleData));
console.time('puzzle2');
console.log(puzzle2(data));
console.timeEnd('puzzle2');
