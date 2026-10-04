for(let i=1;i<=5;i++){
    let res="";
    for(let j=1;j<=5;j++){
        if(j%2==1){
            res=res+" *";
        }else{
            res=res+` ${j}`
        }
    }
    console.log(res)
}