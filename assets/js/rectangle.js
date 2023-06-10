class Rectangle {
  constructor(width, height) {
    this.w = width;
    this.h = height;
  }

  area() {
    return this.w * this.h;
  }

  perimeter() {
    return this.w + this.w + this.h + this.h;
  }
}
