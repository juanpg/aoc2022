
import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class Day02 {
    private static ArrayList<String> parseData(String fileName) {
        try {
            ArrayList<String> data = new ArrayList<>();
            File fl = new File(fileName);
            Scanner rdr = new Scanner(fl);

            while (rdr.hasNextLine()) {
                data.add(rdr.nextLine());
            }

            rdr.close();

            return data;

        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        }

        return null;
    }

    private static Integer puzzle1(ArrayList<String> data) {
        HashMap<String, Integer> shapePoints = new HashMap<>();
        shapePoints.put("X", 1);
        shapePoints.put("Y", 2);
        shapePoints.put("Z", 3);

        HashMap<String, Integer> roundPoints = new HashMap<>();
        roundPoints.put("Win", 6);
        roundPoints.put("Draw", 3);
        roundPoints.put("Lost", 0);

        HashMap<String, Integer> outcomes = new HashMap<>();
        
        outcomes.put("A X", shapePoints.get("X") + roundPoints.get("Draw"));
        outcomes.put("A Y", shapePoints.get("Y") + roundPoints.get("Win"));
        outcomes.put("A Z", shapePoints.get("Z") + roundPoints.get("Lost"));

        outcomes.put("B X", shapePoints.get("X") + roundPoints.get("Lost"));
        outcomes.put("B Y", shapePoints.get("Y") + roundPoints.get("Draw"));
        outcomes.put("B Z", shapePoints.get("Z") + roundPoints.get("Win"));

        outcomes.put("C X", shapePoints.get("X") + roundPoints.get("Win"));
        outcomes.put("C Y", shapePoints.get("Y") + roundPoints.get("Lost"));
        outcomes.put("C Z", shapePoints.get("Z") + roundPoints.get("Draw"));

        return data.stream().mapToInt(line -> outcomes.get(line) ).sum();

    }

    private static Integer puzzle2(ArrayList<String> data) {
        HashMap<String, Integer> shapePoints = new HashMap<>();
        shapePoints.put("Rock", 1);
        shapePoints.put("Paper", 2);
        shapePoints.put("Scissors", 3);

        HashMap<String, Integer> roundPoints = new HashMap<>();
        roundPoints.put("Win", 6);
        roundPoints.put("Draw", 3);
        roundPoints.put("Lost", 0);

        HashMap<String, Integer> outcomes = new HashMap<>();
    
        outcomes.put("A X", roundPoints.get("Lost") + shapePoints.get("Scissors"));
        outcomes.put("B X", roundPoints.get("Lost") + shapePoints.get("Rock"));
        outcomes.put("C X", roundPoints.get("Lost") + shapePoints.get("Paper"));
    
        outcomes.put("A Y", roundPoints.get("Draw") + shapePoints.get("Rock"));
        outcomes.put("B Y", roundPoints.get("Draw") + shapePoints.get("Paper"));
        outcomes.put("C Y", roundPoints.get("Draw") + shapePoints.get("Scissors"));
    
        outcomes.put("A Z", roundPoints.get("Win") + shapePoints.get("Paper"));
        outcomes.put("B Z", roundPoints.get("Win") + shapePoints.get("Scissors"));
        outcomes.put("C Z", roundPoints.get("Win") + shapePoints.get("Rock"));

        return data.stream().mapToInt(outcomes::get).sum();
    }
    
    public static void main(String[] args) {
        ArrayList<String> sampleData = parseData("./day02sample.txt");
        ArrayList<String> data = parseData("./day02.txt");

        if(sampleData == null || data == null) {
            return;
        }

        System.out.println("puzzle1");
        System.out.println(puzzle1(sampleData));
        System.out.println(puzzle1(data));

        System.out.println("puzzle2");
        System.out.println(puzzle2(sampleData));
        System.out.println(puzzle2(data));
    }
}
