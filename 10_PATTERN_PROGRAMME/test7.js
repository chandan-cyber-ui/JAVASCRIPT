let res="";
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i%2==0){
            res=res+`*`
        }else{
             res=res+j;
        }
        res+="\n"
    }
}
console.log(res)