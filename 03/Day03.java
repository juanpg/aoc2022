import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

public class Day03 {
    private static Integer calculatePriority(char letter) {
        char baseLetter = 'a';
        int offset = 1;
        if(Character.isUpperCase(letter)) {
            offset = 27;
            baseLetter = 'A';
        }

        return letter - baseLetter + offset;
    }

    private static String intersect(String string1, String string2) {
        ArrayList<String> result = new ArrayList<String>();
        for (char c : string1.toCharArray()) {
            if(string2.indexOf(c) > -1) {
                result.add(Character.toString(c));
            }
        }
        return String.join("", result);
    }

    private static Integer puzzle1(List<String> data) {
        int total = 0;
        for (String rucksack : data) {
            int middle = rucksack.length() / 2;
            String bag1 = rucksack.substring(0, middle);
            String bag2 = rucksack.substring(middle);

            String common = intersect(bag1, bag2);

            total += calculatePriority(common.charAt(0));
        }
        return total;
    }

    private static Integer puzzle2(List<String> data) {
        int total = 0;
        for (int i = 0; i < data.size(); i+=3) {
            String bag1 = data.get(i);
            String bag2 = data.get(i+1);
            String bag3 = data.get(i+2);

            String common = intersect(intersect(bag1, bag2), bag3);
            total += calculatePriority(common.charAt(0));
        }
        return total;
    }
    public static void main(String[] args) {
        try {
            List<String> sampleData = Files.readAllLines(Path.of("./day03sample.txt"));
            List<String> data = Files.readAllLines(Path.of("./day03.txt"));

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
