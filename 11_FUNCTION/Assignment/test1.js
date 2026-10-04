
// // greet();

// // function greet() {
// //     console.log("Hello");
// // }



// // sayHello();

// // const sayHello = function () {
// //     console.log("Hello");
// // };


// // function add(a, b) {
// //     return a + b;
// // }

// // console.log(add(10, 20));



// // function calculate() {
// //     console.log("A");
// //     return 100;
// //     console.log("B");
// // }

// // console.log(calculate());

// // *******************
// // console.log(test());

// // function test() {
// //     return "Declaration";
// // }

// // var test = function () {
// //     return "Expression";
// // };

// // 

// // function calculate(a, b, operation) {
// //     return operation(a, b);
// // }

// // console.log(calculate(10, 5, (x, y) => x - y));



// // function execute(fn) {
// //     return fn();
// // }

// // const result = execute(() => {
// //     return "JavaScript";
// // });

// // console.log(result);


// // function outer() {
// //     let x = 10;

// //     function inner() {
// //         console.log(x);
// //     }

// //     inner();
// // }

// // outer();




// // function createFunction() {
// //     return function () {
// //         return "Success";
// //     };
// // }

// // const fn = createFunction();

// // console.log(fn());


// // function operation(a, b, fn) {
// //     return fn(a, b);
// // }

// // const result = operation(6, 3, function (x, y) {
// //     return x / y;
// // });

// // console.log(result);


// // const square = (num) => {
// //     return num * num;
    
// // };

// // console.log(square(5));


// // function createCounter() {
// //     let count = 0;

// //     return function () {
// //         count++;
// //         return count;
// //     };
// // }

// // const counter1 = createCounter();
// // const counter2 = createCounter();

// // console.log(counter1());
// // console.log(counter1());
// // console.log(counter2());
// // console.log(counter2());



// function multiplier(x) {
//     return function (y) {
//         return x * y;
//     };
// }

// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(5));
// console.log(triple(5));


const sayHello = function(){
    console.log("hey");
    
}
sayHello();


