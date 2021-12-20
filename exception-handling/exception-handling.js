// 1. throw 처리

// function sum(x,y) {
//   if(typeof x !== 'number' || typeof y !== 'number'){
//     throw '숫자가 아닙니다'
//   }
//   return x + y;
// }

// console.log(sum('a',2));

// 출력값 : answer Uncaught 숫자가 아닙니다

// uncaught 는 잡히지 않은 뭔가가 있다. throw 처리된 걸 잡지 않았다. 라는 뜻으로
// 예외가 발생한 것을 처리 해주지 않아서 뜨는 것

// 2. 예외처리

// function f2() {
//   console.log("f2 start");
//   throw "error";
//   console.log("f2 end");
// }

// function f1() {
//   console.log("f1 start");
//   f2();
//   console.log("f1 end");
// }

// console.log("will : f1");
// f1();
// console.log("did : f1");

// 출력값
// will: f1
// f1 start
// f2 start
// uncaught error

// 에러를 만나면 그 다음 코드를 실행하지 않고 중단한다.
// 그래서 'fe end'가 실행되지 않고 펑션이 종료된다.
// f2에서 에러가 발생 되고 끝났기 때문에 f1에 있는 f2() 호출 코드도 에러
// 예외처리를 하지 않았기 때문에 f1도 error 가 되고, 똑같은 방식으로 메인도 에러를 받아 실행을 멈춘다

// function f2() {
//   console.log("f2 start");
//   throw "error";
//   console.log("f2 end");
// }

// function f1() {
//   console.log("f1 start");
//   try {
//     f2();
//   } catch (e) {
//     console.log(e);
//   }
//   console.log("f1 end");
// }

// console.log("will : f1");
// f1();
// console.log("did : f1");

// 출력값
// will :  f1
// f1 start
// f2 start
// error
// f1 end
// did : f1

// try 안에 예외가 발생할 수도 있는 코드를 넣고,
// catch 를 사용해서 예외처리를 한다.
// 예외처리가 되면 그 이후의 코드도 실행된다.

// function f2() {
//   console.log("f2 start");
//   throw "error";
//   console.log("f2 end");
// }

// function f1() {
//   console.log("f1 start");
//   f2();
//   console.log("f1 end");
// }

// console.log("will : f1");
// try {
//   f1();
// } catch (e) {
//   console.log(e);
// }
// console.log("did : f1");

// 출력값
// will : f1
// f1 start
// f2 start
// error
// did : r1

// f2 함수가 예외를 발생하고 그 다음코드를 실행하지 않고 끝마쳐서
// 'f2 end'는 콘솔에 출력되지 않았고, f1 함수에서 예외 처리를 하지 않았기 때문에 'f1 end'도 출력 되지 않았다
// 전역에서 f1함수를 예외처리 해두었기 때문에 'did: f1'은 출력된다

// function f2() {
//   console.log("f2 start");
//   throw new Error("error");
//   console.log("f2 end");
// }

// function f1() {
//   console.log("f1 start");
//   f2();
//   console.log("f1 end");
// }

// console.log("will : f1");
// try {
//   f1();
// } catch (e) {
//   console.log(e);
// }
// console.log("did : f1");

// 출력값
// will : f1
// f1 start
// f2 start
// Error: error
//   at f2
//   at f1
//   at
// did : f1

// new Error 을 사용해여 예외를 등록하면
// 어떤 파일의 어떤 함수에서 에러가 발생했는지 표현해 주기 때문에 분석하기 좋음

//
//
//

// 3. promise 에서 예외처리

// function wait(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("error!");
//     }, sec * 1000);
//   });
// }

// wait(3);

// 출력값
// 3초 뒤에
// Uncaught (in promise) error!

// promise 에서 reject를 실행해서 예외를 잡았는데,
// 그걸 예외처리를 해주지 않아서 uncaught 에러가 발생함

// function wait(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("error!");
//     }, sec * 1000);
//   });
// }

// try {
//   wait(3);
// } catch (e) {
//   console.error(e);
// }

// 출력값
// 3초 뒤에
// Uncaught (in promise) error!

// try catch 로 잡히지 않음
// 왜냐면 비동기적인 코드이기 때문에 try catch가 지나고 예외 발생

// function wait(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("error!");
//     }, sec * 1000);
//   });
// }

// wait(3).catch((e) => {
//   console.log("1st catch", e);
// });

// 출력값
// 3초 뒤에
// 1st catch error!

// promise 에서 지원하는 catch로 예외를 잡아준다.

// function wait(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("error!");
//     }, sec * 1000);
//   });
// }

// wait(3)
//   .catch((e) => {
//     console.log("1st catch", e);
//   })
//   .catch((e) => {
//     console.log("2nd catch", e);
//   });

// 출력값
// 3초 뒤에
// 1st catch error!

// .catch 를 두개 붙였지만 하나만 실행함
// 두번째 catch는 첫번째 catch를 바라보고 있기 때문에
// 첫번째 catch에 예외가 발생하는것을 예외처리 하는 코드
// 그래서 첫번째 catch에 있는 1st catch, e 를 콘솔에 출력하는것이 정상적으로 되었기 때문에
// 두번째 .catch 는 동작하지 않음

// function wait(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("error!");
//     }, sec * 1000);
//   });
// }

// wait(3)
//   .catch((e) => {
//     console.log("1st catch", e);
//     throw e;
//   })
//   .catch((e) => {
//     console.log("2nd catch", e);
//   });

// 출력값
// 3초 뒤에
// 1st catch error!
// 2nd catch error!

// 예외처리를 하고 그 다음 작업을 순차적으로 실행 해야 될 일이 있다면
// 예외처리 한곳에서 할 작업을 정의하고 마지막에 throw 로 에러를 발생시켜주면
// 두번째 catch 도 작동이 되서 작업을 마무리 할수 있음

// function wait(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("error!");
//     }, sec * 1000);
//   });
// }

// wait(3)
//   .then(
//     () => {
//       console.log("done!");
//     },
//     (e) => {
//       console.log("1st catch", e);
//     }
//   )
//   .catch((e) => {
//     console.log("2nd catch", e);
//   });

// 출력값
// 3초 뒤에
// 1st catch error!

// .then 에 두번째 인자는 onerejected 를 받아오기 때문에
// .then 에 두번째 인자를 사용해서 예외처리가 가능
// 역시나 .then 에서 예외처리를 했기 때문에 두번째 .catch 는 작동하지 않음

// function wait(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("error!");
//     }, sec * 1000);
//   });
// }

// wait(3)
//   .then(
//     () => {
//       console.log("done!");
//     },
//     (e) => {
//       console.log("1st catch", e);
//       throw new Error("throw in Then");
//     }
//   )
//   .catch((e) => {
//     console.log("2nd catch", e);
//   });

// 출력값
// 3초 뒤에
// 1st catch error!
// 2nd catch Error : throw in Then

// then의 예외처리에서 throw new Error 로 에러를 던져줘서
// .catch 가 실행됨

//
//
//

// 3. async await 에서의 예외 처리

// async function myAsyncFunc() {
//   return "done!";
// }

// function myPromiseFunc() {
//   return new Promise((resolve, reject) => {
//     resolve("done!");
//   });
// }

// const result1 = myAsyncFunc();
// console.log(result1);

// const result2 = myPromiseFunc();
// console.log(result2);

// 출력값
// Promise{<fulfilled>:'done!'}
// Promise{<fulfilled>:'done!'}

// async 로 함수를 선언하면 안에 프로미스가 생성됨
// 위와 아래의 코드의 출력값이 같음

// async function myAsyncFunc() {
//   throw "myAsyncError!";
// }

// function myPromiseFunc() {
//   return new Promise((resolve, reject) => {
//     reject("myPromiseError!");
//   });
// }

// const result1 = myAsyncFunc();
// console.log(result1);

// const result2 = myPromiseFunc();
// console.log(result2);

// 출력값
// Promist{<rejected>: 'myAsyncError!'}
// Promist{<rejected>: 'myPromiseError!'}
// Uncaught (in promise) myAsyncError!
// Uncaught (in promise) myPromiseError!

// promise에서는 reject를 사용해서 에러를 발생시켜줬지만,
// async await 에서는 함수에서 에러를 발생시킨것과 마찬가지로
// throw를 이용해서 에러를 발생시켜 준다

// async function myAsyncFunc() {
//   throw "myAsyncError!";
// }

// function myPromiseFunc() {
//   return new Promise((resolve, reject) => {
//     reject("myPromiseError!");
//   });
// }

// const result1 = myAsyncFunc().catch((e) => {
//   console.error(e);
// });

// const result2 = myPromiseFunc().catch((e) => {
//   console.error(e);
// });

// 출력값
// myAsyncError!
// myPromiseError!

// 예외처리는 promise를 반환하기 때문에
// async await 에서도 .catch 를 사용해서 처리해준다

// function wait(sec) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("done!");
//     }, sec * 1000);
//   });
// }

// async function myAsyncFunc() {
//   console.log(new Date());
//   wait(3);
//   console.log(new Date());
// }

// const result = myAsyncFunc();

// 출력값
// 시간
// 시간

// wait의 3초를 기다리지 않고 바로 시간이 두개 다 출력됨
// 이유는 wait 함수는 비동기 함수이기 때문에 다음코드가 바로 실행이 되는것

// function wait(sec) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("done!");
//     }, sec * 1000);
//   });
// }

// async function myAsyncFunc() {
//   console.log(new Date());
//   await wait(3);
//   console.log(new Date());
// }

// const result = myAsyncFunc();

// 출력값
// 시간
// 3초뒤에
// 시간

// await는 promise를 기다려 줄수 있게 만들어줌
// 비동기함수를 처리하는 비동기처리가 된것

// function wait(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("wait Error!");
//     }, sec * 1000);
//   });
// }

// async function myAsyncFunc() {
//   console.log(new Date());
//   await wait(3);
//   console.log(new Date());
// }

// const result = myAsyncFunc();

// 출력값
// 시간
// 3초뒤에
// Uncaught (in promise) wait Error!

// wait 함수에서 에러가 발생했지만 예외처리를 해주지 않았기 때문에 uncaught 에러가 발생

// function wait(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("wait Error!");
//     }, sec * 1000);
//   });
// }

// async function myAsyncFunc() {
//   console.log(new Date());
//   try {
//     await wait(3);
//   } catch (e) {
//     console.error(e);
//   }
//   console.log(new Date());
// }

// const result = myAsyncFunc();

// 출력값
// 시간
// 3초뒤에
// wait Error!
// 시간

// try catch 를 사용하여 예외처리를 해주었기 때문에 에러가 발생하고
// 그 다음 코드인 시간이 출력 될수 있음

// function wait(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("wait Error!");
//     }, sec * 1000);
//   });
// }

// async function myAsyncFunc() {
//   console.log(new Date());
//   await wait(3).catch((e) => {
//     console.error(e);
//   });
//   console.log(new Date());
// }

// const result = myAsyncFunc();

// 출력값
// 시간
// 3초뒤에
// wait Error!
// 시간

// 바로 .catch 를 사용해도 똑같은 결과가 나오지만,
// 저 함수 값을 리턴할 경우는 문제가 있을수 있음

// function wait(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("wait Error!");
//     }, sec * 1000);
//   });
// }

// async function myAsyncFunc() {
//   console.log(new Date());
//   const result = await wait(3).catch((e) => {
//     console.error(e);
//   });
//   console.log(result);
//   console.log(new Date());
// }

// const result = myAsyncFunc();

// 출력값
// 시간
// wait Error!
// undefined
// 시간

// wait 함수에서 에러가 발생하면 result는 .catch를 바라보고 있기 때문에
// error 처리 되고 아무것도 리턴하지 않아서 undefined 가 출력됨

// function wait(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("wait Error!");
//     }, sec * 1000);
//   });
// }

// async function myAsyncFunc() {
//   오타console.log(new Date());
//   const result = await wait(3).catch((e) => {
//     console.error(e);
//   });
//   console.log(result);
//   console.log(new Date());
// }

// myAsyncFunc().catch((e) => {
//   console.log(e);
// });

// 출력값
// ReferenceError: 오타console is not defined
//   at myAsyncFunc (exception-handling.js:558)
//   at exception-handling.js:566

// myAsyncFunc 함수에 대한 예외처리를 하고 싶다면 try catch로는 되지 않음
// 왜냐면 myAsyncFunc는 promise를 반환하기 때문에 예외처리를 위해서는
// .catch를 사용해야 됨
