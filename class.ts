class Points {
  readonly z: number;

  t = 0;

  constructor(z: number, t: number) {
    this.z = z;
    this.t = t;
  }

  scale(n: number): void {
    this.t *= n;
  }
}

const points = new Points(10, 20);

points.scale(2);

console.log(points);
