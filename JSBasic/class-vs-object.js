'use strict';
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.name}: hello`);
  }
}

const p1 = new Person('Yui', 20);

console.log(p1.age);
console.log(p1.name);
p1.speak();

/*
1.class: coffee vending machine
2.property
number of coffee : int
put coin() : void
make coffee() : void
3.for preventing add -1 interger for the coffee number need getter and setter
so make the number of coffee to private : encapsulation
*/

//getter and setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    /* if (value < 0) {
      throw Error('Age can not be negative');
    } */
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Jobs', -2);
console.log(user1.age);

//Fields(public and private)
class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // cannot access privateField

//Static
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.publisher); //static cannot access through object
console.log(Article.publisher);
Article.printPublisher();
//오브젝트에 상관없이 공통적으로 존재할때 static을 사용하면 메모리의 사용을 줄여줄수 있다
//static: can save the usage of memory for common property

//Inheritance
//A way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('!!!!');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle: color-${this.color}`;
  }
}
const rectangle = new Rectangle(20, 10, 'red');
const triangle = new Triangle(20, 10, 'green');

rectangle.draw();
console.log(rectangle.getArea());

triangle.draw();
console.log(triangle.getArea());

console.log(triangle.toString());

//class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
