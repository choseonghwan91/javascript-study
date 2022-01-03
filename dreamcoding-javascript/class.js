"use strict";

// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//   - introduced in ES6
//   - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  //constructor // 생성자
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; // this.age 는 get 을 가져오고, = age 의 age는 se을 실행함
  }

  // 값을 리턴
  get age() {
    return this._age;
  }

  // 값을 설정
  set age(value) {
    // if (value < 0) {
    // throw Error(' age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = "Dream Coding"; // static으로 작성하면, 클래스를 이용해서 오브젝트를 만들더라도 static 으로 정의된건 클래스 자체가 가지고 있는 고정 값이기 때문에 오브젝트로는 접근이 안되고, class 자체로 접근해야 됨
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // 클래스로 접근한 모습
Article.printPublisher();

// 5. inheritance
// away for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} // extends 를 이용해서 상속을 하면 Shape 클래스에 지정한 것들을 상속 받음 , 그리고 오버라이딩이 가능
class Triangle extends Shape {
  draw() {
    super.draw(); // super를 사용하면 부모의 메소드도 호출 가능
    console.log("🔺");
  }

  getArea() {
    return (this.width * this.height) / 2; // 필요한 부분을 오버라이딩 (overWriting) 할수 있음
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf // 왼쪽에 있는 변수가 오른쪽에 있는 instance 인지 확인하는 방법
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString());
