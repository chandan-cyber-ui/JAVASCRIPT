// function change(x) {
//     x = x + 10;
//     return x;
// }

// let n = 5;

// console.log(change(n));
// console.log(n);


// function outer() {
//     let x = 10;

//     function inner() {
//         console.log(x);
//     }

//     inner();
// }

// outer();

// function apply(fn, value) {
//     console.log(fn(),value)
//     return fn(value);
// }

// console.log(
//     apply(x => x * 2, 5)
// );

// console.log(undefined*2)


// function test() {
//     return 100;
// }

// console.log(test());


// function add(a, b) {
//     console.log(a + b);
// }

// let x = add(2, 3);

// console.log(x);


// function calculate(a, b) {
//     return a + b * 2;
// }

// console.log(calculate(5, 10));



// function test(a, b) {
//     return a - b;
// }

// console.log(test(20, 7));



// function test(a, b) {
//     return a + b;
// }

// console.log(test(10, 20, 30));



// function test(a, b) {
//     console.log(a);
//     console.log(b);
// }

// test(10);

// function test(a) {
//     return a * 2;
// }

// let x = test(5);

// console.log(x + 10);


// function test(a, b) {
//     return a + b;
// }

// let x = test(2, 3);
// let y = test(x, 4);

// console.log(y);



// greet();

// function greet() {
//     console.log("Hello");
// }



// greet();

// var greet = function () {
//     console.log("Hello");
// };



// console.log(test());



// var test = function () {
//     return "B";
// };
// function test() {
//     return "A";
// }


// var test = function () {
//     return "Hello";
// };

// console.log(test());



// function test() {
//     return "A";
// }

// console.log(test());

// function test() {
//     return "B";
// }

// console.log(test());




// let test = function () {
//     return 10;
// };

// console.log(test());


// const test = function () {
//     return 20;
// };

// console.log(test());



// console.log(typeof test);

// var test = function () {
//     return 10;
// };



// console.log(typeof test);

// function test() {
//     return 10;
// }



// console.log(test());

// var test = function () {
//     return 100;
// };




// const add = (a, b) => {
//     return a + b;
// };

// console.log(add(2, 3));


// const square = n => n * n;

// console.log(square(6));


// const test = () => "Hello";

// console.log(test());


// const add = (a, b) => a + b;

// let x = add(5, 10);

// console.log(x);

// const test = (x = 5) => x * 2;

// console.log(test());

// const test = x => {
//     return x + 1;
//     console.log("Hello");
// };

// console.log(test(5));

// const test = () => {
//     console.log("A");
//     return "B";
// };

// console.log(test());


// const test = x => x > 5;

// console.log(test(10));
// console.log(test(3));


// function process(fn) {
//     fn();
// }

// process(function () {
//     console.log("Hello");
// });

// function process(fn, value) {
//     return fn(value);
// }

// console.log(
//     process(x => x * 2, 5)
// );



// function apply(fn, value) {
//     return fn(value);
// }

// function square(x) {
//     return x * x;
// }

// console.log(apply(square, 4));



// function test(fn) {
//     console.log(fn());
// }

// test(function () {
//     return 10;
// });


// function calculate(fn, a, b) {
//     return fn(a, b);
// }

// function add(x, y) {
//     return x + y;
// }

// console.log(calculate(add, 10, 20));

// function test(fn) {
//     return fn(5);
// }

// console.log(
//     test(function (x) {
//         return x + 10;
//     })
// );

// function process(fn) {
//     console.log("A");
//     fn();
//     console.log("B");
// }

// process(function () {
//     console.log("C");
// });


// function apply(fn, v) {
//     return fn(fn(v));
// }

// console.log(
//     apply(x => x + 2, 5)
// );

// function outer(fn) {
//     return fn(10);
// }

// console.log(
//     outer(x => x * 3)
// );


// let x = 10;

// function test() {
//     console.log(x);
// }

// test();


// var x = 10;

// function test() {
//     var x = 20;
//     console.log(x);
// }

// test();
// console.log(x);

// let x = 10;

// function test() {
//     x = 20;
// }

// test();

// console.log(x);


// function test() {
//     var x = 10;
// }

// test();

// console.log(x);


// function test() {
//     let x = 10;
// }

// test();

// console.log(x);


// let x = 5;

// function test() {
//     let y = 10;
//     console.log(x + y);
// }

// test();



// function test() {
//     var x = 10;

//     function inner() {
//         console.log(x);
//     }

//     inner();
// }

// test();



// let x = 10;

// function outer() {
//     let x = 20;

//     function inner() {
//         console.log(x);
//     }

//     inner();
// }

// outer();


// let x = 10;

// function outer() {
//     function inner() {
//         console.log(x);
//     }

//     let x = 20;
//     inner();
// }

// outer();



// function outer() {
//     let x = 10;

//     function inner() {
//         x++;
//         console.log(x);
//     }

//     inner();
//     inner();
// }

// outer();


// test();

// function test() {
//     console.log("Hello");
// }



// test();

// var test = function () {
//     console.log("Hello");
// };


// console.log(x);

// var x = 10;


// function test() {
//     console.log(x);
//     var x = 20;
// }

// test();

// console.log(test());

// function test() {
//     return "A";
// }

// var test = function () {
//     return "B";
// };


// function test() {
//     console.log(a);
//     let a = 10;
// }

// test();


// var x = 1;

// function test() {
//     console.log(x);

//     var x = 2;

//     console.log(x);
// }

// test();


// function outer() {
//     let x = 10;

//     function inner() {
//         console.log(x);
//     }

//     inner();
// }

// outer();


// function outer() {
//     let x = 10;

//     return function () {
//         x++;
//         return x;
//     };
// }

// let fn = outer();

// console.log(fn());
// console.log(fn());
// console.log(fn());


// function counter() {
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// let c1 = counter();

// console.log(c1());
// console.log(c1());


// function counter() {
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// let c1 = counter();
// let c2 = counter();

// console.log(c1());
// console.log(c1());
// console.log(c2());



// function multiplier(x) {
//     return function (y) {
//         return x * y;
//     };
// }

// const double = multiplier(2);

// console.log(double(10));



// function multiplier(x) {
//     return function (y) {
//         return x * y;
//     };
// }

// const triple = multiplier(3);

// console.log(triple(4));
// console.log(triple(5));


// function outer() {
//     let x = 10;

//     function inner() {
//         return x;
//     }

//     x = 20;

//     return inner;
// }

// let fn = outer();

// console.log(fn());




// function test() {
//     let x = 5;

//     return function () {
//         return x + 5;
//     };
// }

// console.log(test()());


// function outer() {
//     let x = 1;

//     return function () {
//         x++;
//         console.log(x);
//     };
// }

// const a = outer();
// const b = outer();

// a();
// a();
// b();



// function test(a) {
//     a = a + 1;
//     return a;
// }

// let n = 5;

// test(n);

// console.log(n);


// function test(obj) {
//     console.log(obj)
//     obj.name = "Bob";
//     console.log(obj)
// }

// let user = {
//     name: "John"
// };

// test(user);

// console.log(user.name);


// function test(obj) {
//     obj = {
//         name: "Bob"
//     };
// }

// let user = {
//     name: "John"
// };

// test(user);

// console.log(user.name);

// function test() {
//     return;
//     console.log("Hello");
// }

// console.log(test());

// function test() {
//     console.log("A");
//     return "B";
//     console.log("C");
// }

// console.log(test());


// function test(a, b) {
//     return a + b;
// }

// console.log(test(10));


// function test(a, b) {
//     return a + b;
// }

// console.log(test(10, undefined));


// function test(a = 5) {
//     return a;
// }

// console.log(test(undefined));
// console.log(test(null));


// function test() {
//     console.log(arguments)
//     console.log(arguments.length);
// }

// test(10, 20, 30);

// function test() {
//     console.log(typeof inner);

//     function inner() {
//         return "Hello";
//     }
// }

// test();



// function test() {
//     console.log(inner());

//     function inner() {
//         return "Hello";
//     }
// }

// test();



function test() {
    var inner = function () {
        return "A";
    };

    function inner() {
        return "B";
    }

    console.log(inner());
}

test();