let res="";
for(let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
        res=res+"*"+" ";
    }
    for(k=1;k<=i;k++){
        res=res+" ";
    }
    res+="\n"
   
}
console.log(res)