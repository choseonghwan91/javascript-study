// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing // 하나의 함수는 한가지의 일만 하도록 만들어야 됨
// naming: do Something, command, verb // 변수는 명사로 지정 하지만, 함수명은 동사로 지어야 됨
// e.g. createCardAndPoint -> createCard, createPoint // 함수는 한가지의 일만 수행해야 되기 때문에 두가지 일을 진행하면 되도록이면 나눌것
// function is object in JS // 자바스크립트에서 함수는 객체
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@"); // message 의 타입을 지정한것이 아니기 때문에 인자가 어떤 타입인지 알수 없음
log(1234); // 나중에 typescript를 사용하면 이 점이 해결됨
//
//
//
// 2. Parameters
// premitive parameters: passed by value // primitive 타입을 인자로 전달 하면 값이 전달되고
// object parameters: passed by reference // object 타입을 인자로 전달 하면 ref 값이 전달된다.
function changeName(obj) {
  obj.name = "coder";
}

const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);
//
//
//
// 3. Default parameters (added in ES6)
function showMessage(message = "default", from = "unknown") {
  // 파라미터의 값이 전달되지 않으면 default 값을 지정 할 수 있음
  console.log(`${message} by ${from}`);
}
showMessage("Hi!"); // Hi! by unknown
showMessage(); // default by unknown
//
//
//
// 4. Rest parameters (added in ES6)
function printAll(...args) {
  // 배열 형태로 들어온다고 지정
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    // arg에 하나하나 요소가 들어감
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");
//
//
//
// 5. Local scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  // console.log(childMessage); // 자식 함수에 정의된 변수에 부모 함수가 접근하면 error 발생
}
printMessage();
//
//
//
// 6. Return a value
function sum(a, b) {
  return a + b; // return 이 없으면 return undefined 가 생략되어 있는거랑 같음
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);
//
//
//
// 7. Early return, early exit
// bad
function upgradeUser(user) {
  // 빨리 리턴하고 빨리 종료 하라는 뜻으로 10이상일때 어떤 로직을 수행해야 될때, 10 이상일 때 로직 수행 보다는
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  // 10 이하면 return 을 써서 함수를 끝내고, 그게 아닐때 복잡한 로직을 구현하는게 효율이 좋음
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}
//
//
//
// First-class function
// functions are treated like any other variable // 다른 변수와 마찬가지로
// can be assigned as a value to variable // 변수에 할당이 되고
// can be passed as an argument to other function. // 함수에 파라미터로 전달이 되며,
// can be returned by another function // return 값으로도 리턴이 된다.

// 1. Function expression
// a function declaration can be called earlier than it is definend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  // anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));
//
//
//
// 2. Callback function using function expression
function randomQuiz(answer, printYess, printNo) {
  // 함수를 전달해서, 조건이 맞으면 전달된 함수를 실행시키도록 하는것이 콜백 함수
  if (answer === "love you") {
    printYess();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces // 디버길 할때 함수의 이름을 나오게 하도록 하기 위해서 이름을 지정하기도 함
// recursions
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log("simplePrint!");
// };

const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b; // 블럭을 사용하면 return 을 작성해줘야 됨
};

// IIFE: Immediately Invoked Function Expression // 함수를 선언하고 바로 호출하고 싶을때 선언한 함수를 괄호로 묶고, 호출할 때와 마찬가지로 () 로 실행 하면 선언과 동시에 실행됨
(function hello() {
  console.log("IIFE");
})();

// Fun quiz time
// function calculate(command, a, b)
// command: (add, substract, divide, multiply, remainder)
const calculate = (command, a, b) => {
  switch (command) {
    case "add":
      return a + b;
      break;
    case "substract":
      return a - b;
      break;
    case "divide":
      return a / b;
      break;
    case "multiply":
      return a * b;
      break;
    case "remainder":
      return a % b;
      break;
    default:
      return "check command!";
      break;
  }
};

console.log(calculate("add", 1, 2));
console.log(calculate("substract", 3, 2));
console.log(calculate("divide", 6, 2));
console.log(calculate("multiply", 3, 2));
console.log(calculate("remainder", 5, 2));
console.log(calculate("hello", 1, 2));
