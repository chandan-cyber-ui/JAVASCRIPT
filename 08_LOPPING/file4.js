let start=1;
let end=20;
let count=0;

for(let num=start;num<=end;num++){
    let prime =true;
    if(num<=1){
            prime=false;
    }else{
        for(let i=2;i<=parseInt(num / 2);i++){
            if(num%i==0){
                prime=false;
                break;
            }
        }
    }
    if(prime==true){
        count++;

        if(count%2==0){
            console.log(num)
        }
    }
   
}

