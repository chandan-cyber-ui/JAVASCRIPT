function countEvenDigits(n) {

    let count=0;
    while(n>0){
        let digit=n%10;
        if(digit%2==0){
            count++;
        }
        n=Math.floor(n/10);
    }
    return count;
    
}
let res=countEvenDigits(583246);
console.log(res)
