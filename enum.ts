enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function move(direction: Direction) {
  console.log(direction);
}

move(Direction.Left);
