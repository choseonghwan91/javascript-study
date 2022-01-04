// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionally.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };
//
//
//
// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax // new 로 생성하면 Object에 정의된 constructor 가 불려옴

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true; // 오브젝트에 키와 값을 추가 할 수 있지만, 유지보수 측면이나 생각지 못한 에러가 발생할 수 있기 때문에 사용하지 않는것이 좋음
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);
//
//
//
// 2. Computed properties
// key should be always string  // ** key 값을 넣을땐 string 변수를 넣을땐 변수
console.log(ellie.name); // 코딩하는 순간 그 값을 받아오고 싶을 때
console.log(ellie["name"]); // 정확하게 어떤 키가 필요한지 모를 때, 런타임에 정해질 때 사용
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj.key); // undefined 가 출력 (key 라는 프로퍼티값이 없기 때문에)
  console.log(obj[key]); // 변수를 넣어야 된다면 컴퓨티드 프로퍼티를 사용하세요
}

printValue(ellie, "name");
printValue(ellie, "age");
//
//
//
// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("ellie", 30);
console.log(person4);
//
//
//
// 4. Constructor Function
function Person(name, age) {
  // this = {}; // 생략 된거라고 생각하면 됨
  this.name = name;
  this.age = age;
  // return this; // 생략 된거라고 생각하면 됨
}
//
//
//
// 5. in operator: property existence check (key in obj)
console.log("name" in ellie); // key 가 object에 있는지 체크하는 방법
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);
//
//
//
// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  // ellie 안에 있는 key 들이 출력 됨
  console.log(key);
}

// for (value of interable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  // 아래의 코드와 같은 출력 값
  console.log(array[i]);
}

for (value of array) {
  // 위의 코드를 간단하게 작성 할 수 있음 array 안에 있는 값을 하나하나 실행
  console.log(value);
}
//
//
//
// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user); // user2를 얕은 복사 해서 user의 name도 coder로 변환 됨

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key]; // 하나하나 복사 해주는 방법이 있음
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = {
  color: "blue",
  size: "big",
};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

// spread syntax 를 이용한 deep copy
const test = { ...user };
test.name = "seonghwan";
console.log(test);
console.log(user);
