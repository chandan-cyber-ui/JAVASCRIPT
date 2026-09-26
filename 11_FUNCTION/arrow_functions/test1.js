// arroe function is short way write a functons

let main=()=>{
    console.log("i am arrow functions")
}
main();

// Explicit returns

let main1=()=>{
    return "i am arrow functions"
}
let res=main1();
console.log(res)


// implicit returns


let main2=()=>"i am arrow functions"
let res1=main2();
console.log(res1)

// parametrised
let sum=(a,b)=>{
    return a+b;
}
console.log(sum(6,8))

// implicit return
let sum1=(a,b)=>a+b;
console.log(sum(6,8))