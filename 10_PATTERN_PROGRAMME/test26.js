for(let i=1;i<=5;i++){
    let res="";


    for(let j=1;j<=5-i;j++){


        res=res+" ";


    }
    for(let k=1;k<=i;k++){
        res=res+"*"
    }
    console.log(res)
}
for(let i=4;i>=1;i--){
    let res=" ";
    for(let j=1;j<=5-i;j++){
        res=res+" ";
    }
    for(let k=1;k<=i;k++){
        res=res+"*";
    }
    console.log(res)
}