const leftChild = (index:number):any => index * 2 + 1;
const rightChild = (index:number):any => index * 2 + 2;
const parentNode = (index:number):any => Math.floor((index - 1) / 2);

export class maxHeap {
    heap:Array<any>;
    constructor() {
        this.heap = [];
    }

    swap(index1:number, index2:number):void {
        const tmp:any = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = tmp;
    }

    peek():any {
        if(this.heap.length === 0) {
            return Number.POSITIVE_INFINITY;
        }
        return this.heap[0];
    }

    insert(element:any): void {
        this.heap.push(element);
        let index:number = this.heap.length - 1;

        // If the element is greater than its parent:
        while (index !== 0 && this.heap[index] > this.heap[parentNode(index)]) {
            this.swap(index, parentNode(index));
            index = parentNode(index);
        }
    }

    extractMax():any {
        if(this.heap.length === 0) {
            return null;
        }
        const root:any = this.heap.shift();

        // put the last element to the front of the heap
        // and remove the last element from the heap as it now sits at the front of the heap;

        this.heap.unshift(this.heap[this.heap.length - 1]);
        this.heap.pop();

        // correctly re-position heap
        this.heapify(0);

        return root;
    }

    // Re-positions the heap by comparing the left and right child of a specific node
    // and swapping them as necessary. This is recursively called until the heap is
    // correctly repositioned
    heapify(index): void {
        let left = leftChild(index);
        let right = rightChild(index);
        let smallest = index;

        // if the left child is bigger than the node we are looking at
        if(left < this.heap.length && this.heap[smallest] < this.heap[left]) {
            smallest = left;
        }

        // if the right child is bigger than the node we are looking at
        if(right < this.heap.length && this.heap[smallest] < this.heap[right]) {
            smallest = right;
        }

        if(smallest !== index) {
            this.swap(smallest, index);
            this.heapify(smallest);
        }
    }

    toString(): string {
        return JSON.stringify(this.heap);
    }
}