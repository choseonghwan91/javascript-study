"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];
//
//
//
// 2. Index position
const fruits = ["사과", "바나나"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // 배열의 제일 마지막 인덱스
//
//
//
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach(function (fruit, index, array) {
  // 첫번째 인자는 요소 하나하나를 받아오고, 두번째 인자는 인덱스, 세번째 인자는 전체 배열을 받아옴
  console.log(fruit, index, array); // anonymous function은 arrow function 으로 변경 가능
});

fruits.forEach((fruit) => console.log(fruit));
//
//
//
// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("딸기", "복숭아");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift("딸기", "레몬");
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push("딸기", "복숭아", "레몬");
console.log(fruits);
fruits.splice(1, 1); // 첫번째 인자는 지우고 싶은 인덱스, 두번째 인자는 몇개를 지울건지
console.log(fruits);
fruits.splice(1, 1, "사과", "수박");
console.log(fruits);

// combine two arrays
const fruits2 = ["포도", "오렌지"];
const newFruits = fruits.concat(fruits2); // 배열을 합쳐줌
console.log(newFruits);
//
//
//
// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("사과"));
console.log(fruits.indexOf("수박"));
console.log(fruits.indexOf("오렌지"));

// includes
console.log(fruits.includes("수박"));
console.log(fruits.includes("오렌지"));

// lastIndexOf
console.clear();
fruits.push("사과");
console.log(fruits);
console.log(fruits.indexOf("사과")); // 찾는 요소 만나면 뒤에 보지 않고 바로 index 반환
console.log(fruits.lastIndexOf("사과")); // 똑같은 요소가 있으면 제일 마지막 index 반환
