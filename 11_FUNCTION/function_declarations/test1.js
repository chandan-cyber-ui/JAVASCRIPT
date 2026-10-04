// show();

// function show() {
//     console.log("JavaScript");
// }

// function calculate(a, b) {
//     return a * b;
// }

// console.log(calculate(5, 4));


// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("Chandan");


// function test() {
//     console.log("Start");
//     return "Done";
// }

// console.log(test());


// function calculate(num) {
//     return num + 5;
// }

// let result = calculate(10);

// console.log(result);



// sayHi();

// const sayHi = function () {
//     console.log("Hi");
// };



// const subtract = function (a, b) {
//     return a - b;
// };

// console.log(subtract(20, 8));


// const square = num => num * num;

// console.log(square(6));




// const test = () => {
//     return "Hello";
// };

// console.log(test());


// const calculate = (a, b) => {
//     console.log(a + b);
//     return a * b;
// };

// console.log(calculate(3, 4));


// function test() {
//     console.log("A");
//     console.log("B");
//     return "C";
//     console.log("D");
// }

// console.log(test());



// function check(num) {

//     if (num > 10) {
//         return "Greater";
//     }

//     return "Smaller";
// }

// console.log(check(15));


// function calculate(num) {

//     if (num % 2 === 0) {
//         return num * 2;
//     }

//     return num * 3;
// }

// console.log(calculate(5));
// console.log(calculate(8));



// function test() {
//     return;
//     console.log("Hello");
// }

// console.log(test());



// function calculate(a, b) {

//     let result = a + b;

//     return result * 2;
// }

// console.log(calculate(5, 10));


// function process(num, callback) {
 
//     return callback(num);
// }

// function square(n) {
//     return n * n;
// }

// console.log(process(4, square));




// function execute(fn) {
//     console.log("Start");
//     fn();
//     console.log("End");
// }

// function message() {
//     console.log("Hello");
// }

// execute(message);





// function calculate(a, b, callback) {
//     return callback(a, b);
// }

// function add(x, y) {
//     return x + y;
// }

// console.log(calculate(10, 20, add));



// function process(value, fn) {
//     console.log("Value:", value);
//     console.log("Result:", fn(value));
// }

// process(5, function (num) {
//     return num * 10;
// });


// function operation(a, b, fn) {
//     return fn(a, b);
// }

// console.log(
//     operation(10, 5, function (x, y) {
//         return x + y;
//     })
// );



// function calculate(value, operation) {
//     return operation(value);
// }

// const result = calculate(10, function (num) {
//     return num * 2;
// });

// console.log(result);



// function execute(fn) {
//     console.log(fn())
//     return fn(5);
// }

// const result = execute(num => num + 10);

// console.log(result);



// function process(fn) {
//     return fn();
// }

// const result = process(function () {
//     return "Success";
// });

// console.log(result);







// function first(callback) {
//     console.log("A");
//     callback();
//     console.log("B");
// }

// function second() {
//     console.log("C");
// }

// first(second);



// function outer() {

//     let x = 20;

//     function inner() {
//         console.log(x);
//     }

//     inner();
// }

// outer();



// function outer() {

//     let message = "Outer";

//     function inner() {

//         let message = "Inner";

//         console.log(message);
//     }

//     inner();
// }

// outer();




// function outer() {

//     let x = 10;

//     function inner() {
//         x = x + 5;
//         console.log(x);
//     }

//     inner();
//     inner();
// }

// outer();



// function outer() {

//     let a = 10;

//     function inner() {
//         let b = 20;
//         console.log(a + b);
//     }

//     inner();
// }

// outer();

// function outer() {

//     let x = 10;

//     function inner() {
//         console.log(x);
//     }

//     let x = 20;

//     inner();
// }

// outer();




// function createCounter() {

//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// const counter = createCounter();
// console.log(counter)

// console.log(counter());
// console.log(counter());
// console.log(counter());


// function createCounter() {

//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// console.log(counter1());
// console.log(counter2());
// console.log(counter1());
// console.log(counter2());


// function multiplier(x) {

//     return function (y) {
//         return x * y;
//     };
// }

// const double = multiplier(2);

// console.log(double(10));
// console.log(double(5));



// function createGreeting(message) {

//     return function (name) {
//         return message + " " + name;
//     };
// }

// const greet = createGreeting("Hello");

// console.log(greet("Chandan"));
// console.log(greet("Rahul"));



// function outer(value) {

//     return function (num) {
//         return value + num;
//     };
// }

// const addTen = outer(10);

// console.log(addTen(5));
// console.log(addTen(20));



// console.log(test());

// function test() {
//     return "A";
// }

// var test = function () {
//     return "B";
// };



// console.log(test());

// var test = function () {
//     return "Hello";
// };



// function outer() {
//     let x = 10;

//     return function () {
//         x++;
//         console.log(x);
//     };
// }

// const fn = outer();

// fn();
// fn();
// fn();


// function outer() {
//     let x = 10;

//     function inner() {
//         x++;
//         return x;
//     }

//     console.log(inner());
//     console.log(inner());
// }

// outer();


// function create() {
//     let value = 5;

//     return function (num) {
//         return value + num;
//     };
// }

// const fn = create();

// console.log(fn(10));
// console.log(fn(20));




// let user = {
//     name: "John",
//     age: 25
// };

// function update(obj) {
//     console.log(obj)
//     obj.age = 30;
// }

// update(user);

// console.log(user.age);



// let user = {
//     name: "John",
//     age: 25
// };

// function update(obj) {
//     console.log(obj)
//     obj = {
//         name: "Alex",
//         age: 30
//     };
//     console.log(obj)
    
// }

// update(user);

// console.log(user.name);
// console.log(user.age);


// let student = {
//     name: "Rahul",
//     marks: 80
// };

// function test(s) {
//     s.marks += 10;
//     return s.marks;
// }

// console.log(test(student));
// console.log(student.marks);



// let employee = {
//     name: "Amit",
//     salary: 20000
// };

// function increase(emp) {
//     return {
//         name: emp.name,
//         salary: emp.salary + 5000
//     };
// }

// let result = increase(employee);
// console.log(result)

// console.log(result.salary);
// console.log(employee.salary);


// let obj = {
//     a: 10,
//     b: 20
// };

// function test(x) {
//     return x.a + x.b;
// }

// console.log(test(obj));



let user = {
    name: "John",
    age: 25
};

function process(obj, fn) {
    return fn(obj);
}

console.log(
    process(user, function (u) {
        return u.name + " " + u.age;
    })
);