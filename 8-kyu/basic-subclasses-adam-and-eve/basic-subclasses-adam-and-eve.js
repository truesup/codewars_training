class Human {
  constructor() {
    this.species = "Homo sapiens";
  }
}
​
class Man extends Human {
  constructor() {
    super();
    this.gender = "male";
  }
}
​
class Woman extends Human {
  constructor() {
    super();
    this.gender = "female";
  }
}
​
class God {
  /**
   * @returns Human[]
   */
  static create() {
    return [new Man(), new Woman()];
  }
}