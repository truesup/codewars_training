class Cube {
  constructor(n = 0) {
    this.side = Math.abs(n);
  }
  
  getSide() {
    return this.side;
  }
  
  setSide(n) {
    this.side = Math.abs(n);
  }
}
​