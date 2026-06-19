function printCoord(pt: { x: number; y?: number }) {
  console.log(pt.x);

  if (pt.y !== undefined) {
    console.log(pt.y);
  }
}

printCoord({
  x: 100,
});

printCoord({
  x: 100,
  y: 50,
});
