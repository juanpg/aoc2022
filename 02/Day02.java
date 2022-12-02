
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

public class Day02 {
    private static Integer puzzle1(List<String> data) {
        Map<String, Integer> shapePoints = Map.of("X", 1, "Y", 2, "Z", 3);
        Map<String, Integer> roundPoints = Map.of("Win", 6, "Draw", 3, "Lost", 0);

        Map<String, Integer> outcomes = Map.of(
            "A X", shapePoints.get("X") + roundPoints.get("Draw"),
            "A Y", shapePoints.get("Y") + roundPoints.get("Win"),
            "A Z", shapePoints.get("Z") + roundPoints.get("Lost"),

            "B X", shapePoints.get("X") + roundPoints.get("Lost"),
            "B Y", shapePoints.get("Y") + roundPoints.get("Draw"),
            "B Z", shapePoints.get("Z") + roundPoints.get("Win"),

            "C X", shapePoints.get("X") + roundPoints.get("Win"),
            "C Y", shapePoints.get("Y") + roundPoints.get("Lost"),
            "C Z", shapePoints.get("Z") + roundPoints.get("Draw")
        );

        return data.stream().mapToInt(line -> outcomes.get(line) ).sum();

    }

    private static Integer puzzle2(List<String> data) {
        Map<String, Integer> shapePoints = Map.of("Rock", 1, "Paper", 2, "Scissors", 3);
        Map<String, Integer> roundPoints = Map.of("Win", 6, "Draw", 3, "Lost", 0);

        Map<String, Integer> outcomes = Map.of(
            "A X", roundPoints.get("Lost") + shapePoints.get("Scissors"),
            "B X", roundPoints.get("Lost") + shapePoints.get("Rock"),
            "C X", roundPoints.get("Lost") + shapePoints.get("Paper"),
        
            "A Y", roundPoints.get("Draw") + shapePoints.get("Rock"),
            "B Y", roundPoints.get("Draw") + shapePoints.get("Paper"),
            "C Y", roundPoints.get("Draw") + shapePoints.get("Scissors"),
        
            "A Z", roundPoints.get("Win") + shapePoints.get("Paper"),
            "B Z", roundPoints.get("Win") + shapePoints.get("Scissors"),
            "C Z", roundPoints.get("Win") + shapePoints.get("Rock")    
        );
    
        return data.stream().mapToInt(outcomes::get).sum();
    }
    
    public static void main(String[] args) {

        try {
            List<String> sampleData = Files.readAllLines(Path.of("./day02sample.txt"));
            List<String> data = Files.readAllLines(Path.of("./day02.txt"));

            System.out.println("puzzle1");
            System.out.println(puzzle1(sampleData));
            System.out.println(puzzle1(data));
    
            System.out.println("puzzle2");
            System.out.println(puzzle2(sampleData));
            System.out.println(puzzle2(data));
    
        } catch (IOException e) {
            System.out.println("File not found");
            return;
        }
    }
}
