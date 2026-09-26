function printPrimes(start,end) {
     let count=0;

    for(let i=start;i<=end;i++){
        let prime=true;
       
        for(let j=2;j<i;j++){
            if(i%j==0){
                prime=false;
                break;
            }
        }
        if(prime){

           count++;

            
        }
       
    }
     return count;
    
}
console.log(printPrimes(10, 30))