for(let i=1;i<=5;i++){
    let res="";
    for(let j=1;j<=5;j++){
            if(i%2==1){
                res=res+` ${j}`
            }else{
                res=res+" *"
            }
    }
    console.log(res)
}