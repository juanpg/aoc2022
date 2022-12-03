def getData(fileName: str) -> list[str]:
    return open(fileName).read().strip().split("\n")

def calculatePriority(letter: str) -> int:
    return ord(letter) - ord('a') + 1 if letter.islower() else ord(letter) - ord('A') + 27

def puzzle1(data: list[str]) -> int:
    total = 0
    for line in data:
        middle = len(line) // 2
        bag1 = line[:middle]
        bag2 = line[middle:]
        common, = set(bag1) & set(bag2)

        total += calculatePriority(common)

    return total

def puzzle2(data: list[str]) -> int:
    total = 0
    for i in range(0, len(data), 3):
        bag1,bag2,bag3 = data[i:i+3]
        common, = set(bag1) & set(bag2) & set(bag3)
        total += calculatePriority(common)
    return total

sampleData = getData("./day03sample.txt")
data = getData("./day03.txt")

print(puzzle1(sampleData))
print(puzzle1(data))
print("\n")
print(puzzle2(sampleData))
print(puzzle2(data))
print("\n")