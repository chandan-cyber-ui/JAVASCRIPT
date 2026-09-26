function isArmstrong(n) {

    let temp=n;
    let sum=0;
  
    while(n>0){
        let digit=n%10;
        sum=sum+digit**3;
        n=Math.floor(n/10);

    }
    console.log(temp);
    console.log(sum)
    if(temp==sum){
        return "amstrong n"
    }
    else{
        return "not a amstrong no"
    }
    
}
let res=isArmstrong(153)
console.log(res)