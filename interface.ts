interface Point {
  x: number;
  y: number;
}

function printPoint(point: Point) {
  console.log(point.x);
  console.log(point.y);
}

printPoint({
  x: 100,
  y: 200,
});
