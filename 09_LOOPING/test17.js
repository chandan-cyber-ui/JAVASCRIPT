let smalest=9;
let num=5832;
while(num>0){
    let digit=num%10;
    if(digit<smalest){
        smalest=digit;
    }
    num=Math.floor(num/10);
}
console.log(smalest)