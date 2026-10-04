// function test() {
//     var inner = function () {
//         return "A";
//     };

//     function inner() {
//         return "B";
//     }

//     console.log(inner());
// }

// test();




//  var inner =function () {
//         return "A";
//     };

//     function inner() {
//         return "B";
//     }

//     // console.log(inner());

//     let res=inner();
//     console.log(res)



// console.log(test());

// function test() {
//     return "A";
// }

// var test = function () {
//     return "B";
// };



// function test() {
//     return "A";
// }

// console.log(test());

// function test() {
//     return "B";
// }




// function test() {
//     var inner = function () {
//         return "A";
//     };

//     console.log(inner());

//     inner = function () {
//         return "C";
//     };

//     function inner() {
//         return "B";
//     }

//     console.log(inner());
// }

// test();


m1();                                       
var m1=function () {
    console.log("function expression")
}
function  m1() {
    console.log("function declarations")
}
m1();

 /* 
  m1=()={}
  m1=undefind
  */
