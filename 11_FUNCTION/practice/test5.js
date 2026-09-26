function isPrime(num) {
    let prime=true;
   if(num<=1){
    prime=false;

   }else{
    for(let i=2;i<=num;i++){
        if(num%2==0){
            prime=false;
            break;
        }
    }
   }
   if(prime){
    console.log("prime")
   }else{
    console.log("not prime")
   }
    
}
isPrime(20);