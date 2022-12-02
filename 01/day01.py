from heapq import heappop, heappush, heapify


def getData(fileName):
    data = open(fileName).read().strip()

    heap = []
    heapify(heap)

    current = 0
    for line in data.splitlines():
        if len(line) == 0:
            heappush(heap, -1 * current)
            current = 0
        else:
            current += int(line)

    heappush(heap, -1 * current)
    return heap

def puzzle1(heap):
    return -1 * heap[0]

def puzzle2(heap):
    return -1 * (heappop(heap) + heappop(heap) + heappop(heap) )

sampleData = getData("./day01sample.txt")
data = getData("./day01.txt")

print(puzzle1(sampleData))
print(puzzle1(data))
print("\n")

print(puzzle2(sampleData))
print(puzzle2(data))
