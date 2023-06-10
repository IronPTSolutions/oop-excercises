class Circle {
  constructor(radius) {
    this.r = radius;
  }

  getArea() {
    return Math.PI * this.r ** 2;
  }

  getCircumference() {
    return 2 * Math.PI * this.r;
  }
}
