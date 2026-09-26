function largestDigit(n) {

    let largest=0;

    while(n>0){
        let digit=n%10;
        if(digit>largest){
            largest=digit;
        }
        n=Math.floor(n/10)
    }
    return largest;
    
}
let res=largestDigit(58321)
console.log(res);