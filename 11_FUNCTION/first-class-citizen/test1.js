// higher order functions
// callback functions

function sum(a,b) {
    return a+b;
    
}
function sub(a,b) {
    return a-b
    
}
let mul=function (a,b) {
    return a*b;
    
}
let div=(a,b)=>a/b;
function calculator(n1,n2,calType){
    console.log(`n1=${n1},n2=${n2}`)
    console.log(calType);
    console.log(calType(n1,n2))
}
calculator(5,6,sum)
calculator(5,6,sub)
calculator(5,6,div)
calculator(5,6,mul)