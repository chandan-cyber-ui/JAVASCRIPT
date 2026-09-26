for(let i=1;i<=5;i++){
    let res="";
    for(let j=1;j<=i-1;j++){
        res=res+" ";
    }
    for(let j=1;j<=6-i;j++){
        res=res+"*";
    }
    console.log(res)
}