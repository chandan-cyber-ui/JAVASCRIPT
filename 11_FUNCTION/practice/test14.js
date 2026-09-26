function printPrimes(start,end) {

    for(let i=start;i<=end;i++){
        let prime=true;
        for(let j=2;j<i;j++){
            if(i%j==0){
                prime=false;
                break;
            }
        }
        if(prime){

            console.log(i)
            
        }
    }
    
}
printPrimes(10, 30);