// for(let i = 1; i <= 5; i++){

//     let str = "";

//     for(let j = 1; j <= 5 - i; j++){
//         str = str + " ";
//     }

//     for(let k = 1; k <= i; k++){
//         str = str + "*";
//     }

//     console.log(str);
// }


for(let i=1;i<=5;i++){
    let res="";
    for(let j=1;j<=5-i;j++){
        res=res+" ";
    }
    for(let k=1;k<=i;k++){
        res=res+" *";
    }
    console.log(res)
}