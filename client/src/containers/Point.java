public class Point{
	int x;
	int y;

	public int getDistance(Point o) {
		return Math.abs(this.x - o.x) + Math.abs(this.y - o.y);
	}

}	