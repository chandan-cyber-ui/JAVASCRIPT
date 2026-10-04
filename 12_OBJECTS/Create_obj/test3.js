//  function test() { return 10; } console.log(test());
//  console.log(typeof bar); var bar = function () {};

//  function counter() {
//      let c = 0;
//      return function () {
//         return ++c;
//     };
//  }
//  const inc = counter();
//   inc();
//   inc();
//   console.log(inc());

//   const f = () => { a: 1 }; console.log(f());

// function show() {
//     console.log(arguments.length);
// }

// show(1, 2, 3, 4);

// var x = 10;
// function outer() {
//      console.log(x);
//       var x = 20;
//     }
//      outer();

//  function f(a, b = a * 2)
//  { return a + b;

//  }
//  console.log(f(3), f(3, null));

//  var x = "global";

//   function f() {
//     x = "changed";
//  }
//   f();
//    console.log(x);

// let a = 1;
// function f() {
//   let a = 2;
//   a++;
//   return a;
// }
// console.log(f(), a);

// let x = 10;
// function f(x) {
//   x = x + 5;
//   return x;
// }
// console.log(f(1), x);

// console.log(f());
// function f() {
//   return 1;
// }
// function f() {
//   return 2;
// }

// function hi() {
//   return "hi";
// }
// const g = hi;
// console.log(g === hi, g());

// function apply(fn, v) {
//   return fn(fn(v));
// }
// console.log(apply((x) => x + 2, 5));

// function f(cb) {
//   console.log("A");
//   cb();
//   console.log("C");
// }
// f(() => console.log("B"));

// console.log([1, 2, 3].map((n) => n * 2).filter((n) => n > 2));

// function mul(a) {
//   return function (b) {
//     return a * b;
//   };
// }
// console.log(mul(3)(4));

// function outer() {
//   function inner() {
//     return "in";      ********************************DOUBT
//   }
// }
// outer();
// console.log(typeof inner);

// var x = "global";
// function a() {
//   var x = "a";
//   b();
// }
// function b() {
//   console.log(x);
// }
// a();

// function make() {
//   let n = 0;
//   return {
//     inc() {
//       return ++n;
//     },
//     get() {
//       return n;
//     },
//   };
// }
// const c = make();
// c.inc();
// c.inc();
// const d = make();
// d.inc();
// console.log(c.get(), d.get());

// let x = "out";
// function f() {
//   let x = "in";
//   function g() {
//     return x;
//   }
//   return g();
//  }
//   console.log(f(), x);

// const fns = [];
// for (var i = 0; i < 3; i++) {
//   fns.push(() => i);
// }
// console.log(fns.map((f) => f()));

// function outer() {
//   let c = 0;
//   function inc() {
//     c++;
//     return c;
//   }
//   return inc;
// }
// const a = outer();
// const b = outer();
// console.log(a(), a(), b());

// function f(a) {
//   a = a + 1;
//   return a;
// }
// let n = 5;
// f(n);
// console.log(n);

// function f(o) {
//   o.x = 10;
// }
// const obj = { x: 1 };
// f(obj);
// console.log(obj.x);

// function f() {
//   return typeof g;
//   function g() {}
//   var g = 1;
// }
// console.log(f());

// var a = 1;
// function f() {
//   a = 2;
//   return;
//   var a = 3;
// }
// f();
// console.log(a);

const compose = (f, g) => (x) => f(g(x));
const inc = (x) => x + 1;
const dbl = (x) => x * 2;
console.log(compose(inc, dbl)(5));
