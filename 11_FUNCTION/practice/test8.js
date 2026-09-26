function reverseNumber(n) {
    let rev=0;
    while (n>0) {
        let digit=n%10;
        rev=rev*10+digit;
        n=Math.floor(n/10)
        
    }
    return rev;
}
let res=reverseNumber(5832)
console.log(res);