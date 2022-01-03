// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
"use script";
//
//
//
// 2. Variable
// let (added in ES6)
let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  // ellie
  name = "hello";
  console.log(name);
  // hello
  console.log(globalName);
}
console.log(name);
// 블럭 스코프 이기 때문에 밖에서는 읽을수 없음
console.log(globalName);
// global name
// 글로벌 스코프 이기 때문에 안에서도, 밖에서도 불러 올 수 있음

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);
// 블록 스코프가 없어서, 블록 안에 있는 내용도 밖에서 불러낼 수 있음
// 아무리 안에서 사용하더라도, 밖에서 불러오기 때문에 문제가 생길 가능성이 다분함
//
//
//
// 3. Constants
// favor immutable data type always for a few reasons"
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;
//
//
//
// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, boxcontainer
// function, first-class function
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 12345678901234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log("value: " + helloBob + ", type: " + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x = undefined;
let y;
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${y}, type: ${typeof y}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;
//
//
//
// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 75
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`); // 4 number

// Dynamic typing 때문에 runtime error 가 뜰 수 있는 경우
// text 일때 text.charAt(0) 을 이용해서 접근해서 쓰다가,
// text = 1; 과 같이 number를 할당해버리면, error 를 반환해서 runtime error 를 발생 시키는 경우가 많음
// 이런 단점을 typescript 를 사용해서 보완 할 수 있음
