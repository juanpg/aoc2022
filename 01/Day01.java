import java.io.File;
import java.io.FileNotFoundException;
import java.util.Collections;
import java.util.PriorityQueue;
import java.util.Scanner;

public class Day01 {
    private static PriorityQueue<Integer> getData(String fileName) {
        try {
            PriorityQueue<Integer> heap = new PriorityQueue<Integer>(Collections.reverseOrder());

            File tmp = new File(fileName);
            Scanner rdr = new Scanner(tmp);
            int current = 0;
            while (rdr.hasNextLine()) {
                String data = rdr.nextLine();
                if (data.length() == 0) {
                    heap.add(current);
                    current = 0;
                } else {
                    current += Integer.parseInt(data);
                }
            }

            heap.add(current);

            rdr.close();

            return heap;
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        }

        return null;
    }

    private static Integer puzzle1(PriorityQueue<Integer> heap) {
        return heap.peek();
    }

    private static Integer puzzle2(PriorityQueue<Integer> heap) {
        return heap.poll() + heap.poll() + heap.poll();
    }

    public static void main(String[] args) {
        PriorityQueue<Integer> sampleData = getData("./day01sample.txt");
        PriorityQueue<Integer> data = getData("./day01.txt");

        System.out.println("puzzle1");
        System.out.println(puzzle1(sampleData));
        System.out.println(puzzle1(data));

        System.out.println("puzzle2");
        System.out.println(puzzle2(sampleData));
        System.out.println(puzzle2(data));
    }
}
