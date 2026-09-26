function isStrong(n) {
    
    let orgno=n;
    let sum=0;
    while(n>0){
        let fact=1;
        let digit=n%10;
        for(let i=1;i<=digit;i++){
            fact=fact*i
        }
        
        sum=sum+fact;
        n=Math.floor(n/10);

    }
    console.log(orgno)
    console.log(sum)
    if(sum==orgno){
        return "strong no";
    }else{
        return "not a strong no"
    }
    
}
console.log(isStrong(145))