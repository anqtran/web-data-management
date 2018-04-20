/*input
50 50
11 43
56 22
35 20
33 48
96 81
87 20
68 98
52 93
32 78
11 49
94 67
89 15
0 52
28 28
18 39
13 23
87 13
9 38
18 21
90 56
4 99
34 63
22 3
76 18
*/
import java.util.*;
public class search {
	public static void main(String[] args) {
		int[] x = new int [25]; 
		int[] y = new int [25]; 
		Scanner sc = new Scanner(System.in);
		List<Integer> list = new LinkedList<>();
		for (int i = 0; i < 25 ; i++ ) {
			x[i] = sc.nextInt();
			y[i] = sc.nextInt();
		}
		int[][] d = new int[25][25];

		for (int i = 0; i < 25; i++) {
			for (int j = 0; j < 25; j++) {
				d[i][j] = getDistance(x[i],y[i],x[j],y[j]);
			}
		}

		int cost = 0;
		boolean[] visit = new boolean[25];
		int current = 0;
		list.add(0);
		for (int i = 0; i < 25; i++) {
			
			visit[current] = true;
			int minIndex = 0;
			int min = Integer.MAX_VALUE;
			for (int j = 0; j < 25; j++) {
				if (d[current][j] < min && !visit[j]) {
					minIndex = j;
					min = d[current][j];
				}
			}
			cost += d[current][minIndex];
			current = minIndex;
			list.add(current);
			System.out.println(list+ " with cost " + cost);
		}
		// System.out.println(list);
		// System.out.println(current);
		// System.out.println(cost);
		// System.out.println(list+ " with cost " + cost);
		// System.out.println("move to the starting point: " + d[21][0]);
	}

	public static int getDistance(int x1, int y1, int x2, int y2) {
		// return Math.max(Math.abs(x1-x2), Math.abs(y1-y2));
		return Math.abs(x1-x2)+Math.abs(y1-y2);
	}


}