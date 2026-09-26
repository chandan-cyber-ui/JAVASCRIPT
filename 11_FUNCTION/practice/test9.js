function isPalindrome(n) {
    let temp=n;
    let rev=0;
    while(n>0){
        let digit=n%10;
        rev=rev*10+digit;
        n=Math.floor(n/10)
    }
     
    if(rev==temp){
        return " pelindroem"
    }else{
        return "not a pelindrome"
    }
  
    
}
let res=isPalindrome(121)
console.log(res)