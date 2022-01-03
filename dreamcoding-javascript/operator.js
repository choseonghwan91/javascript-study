// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
//
//
//
// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 & 1); // multiply
console.log(5 % 2); // remainder 나머지
console.log(2 ** 3); // exponentiation 제곱
//
//
//
// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // 3 3
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`); // 3 4
const preDecrement = --counter;
console.log(`preIncrement: ${preDecrement}, counter: ${counter}`); // 3 3
const postDecrement = counter--;
console.log(`preIncrement: ${postDecrement}, counter: ${counter}`); // 3 2
//
//
//
// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;
//
//
//
// 5. Comparison operators
console.log(10 < 6); // less than 작은 값
console.log(10 <= 6); // less than or equal 작거나 같은 값
console.log(10 > 6); // greater than 큰 값
console.log(10 >= 6); // greater than or equal 크거나 같은 값
//
//
//
// 6. Logical operators : || (or), && (and), ! (not)
/**
 중요내용

 or
 false 로 했을때는 뒤의 값 계속 연산 하지만
 true로 했을 때는 or 연산자일때 이미 true 로 되었기 때문에 뒤의 내용은 버린다.
 그래서 value1 || value2 || check() 와 같은 내용을 작성할때는 무거운 일을 수행하는 것들을
 뒤에 작성하는것이 효율성 측면에서 좋다

 and
 true 의 값일 때는 뒤의 값을 계속 연산 하지만,
 false 일 때는, and 연산자 일때 이미 뒤에걸 연산 하더라도 false를 반환 하기 때문에 뒤에 내용을 체크 하지 않는다.
 그래서 value1 || value2 || check() 와 같은 내용을 작성할때는 
 or와 마찬가지로 무거운 일을 수행하는 것들을 뒤에 작성하는것이 효율성 측면에서 좋다
 */
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("😱");
  }
  return true;
}

// ! (not)
console.log(!value1);
//
//
//
// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion 타입을 상관하지 않고 같은 내용의 값이면 true 반환
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion 엄격하게 확인해서 같은 값이더라도 타입이 다르면 false 를 반환
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// quality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
//
//
//
// 8. Conditional operators: if
// if, else if, else
const name = "de";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}
//
//
//
// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no");
//
//
//
// 10. Switch statement
// use for multiple if checks // else if 가 많이 반복되거나
// use for enum-like value check // enum 같은 값을 확인하거나
// use for multiple type checks in TS // type 을 확인 할때 사용하면 좋음
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}
//
//
//
// 11. Loops
// while looop, while the condition is truthy,
// body code is executed.
// 조건이 맞으면 코드를 실행하고 싶다면 while을 사용
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
// 블럭을 먼저 실행하고 조건이 맞는지 안맞는지 검사하고 조건이 맞지 않다면 정지
// 코드를 실행하고 조건을 체크하고 싶다면 do-while을 사용
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}

// Q2. iterate from 0 to 10 and print number until reaching 8 (use break)
for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i === 8) {
    break;
  }
}
