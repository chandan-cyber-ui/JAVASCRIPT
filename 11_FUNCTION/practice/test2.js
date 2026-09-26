function countD(n) {

    let count=0;
    for(let i=1;i<=10;i++){
        if(i%n==0){
            count++;
        }
    }
    return count;
    
}
console.log(countD(5));
