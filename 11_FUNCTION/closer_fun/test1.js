// function outer(a,b) {
//     console.log("outer functions")
//     function inner() {
//         console.log("inner fun")
        
//     }
//     return "hello"
    
// }
// let res=outer(5,8);
// console.log(res)


function outer() {
    console.log("outer functions")
    function inner() {
        console.log("inner fun")
        
    }
    return inner
    
}
let res=outer();

console.log(res)
res()


