let num=153;
let sum=0;
let temp=num;

while(temp>0){
    let digit=temp%10;
    sum=sum+(digit*digit*digit)
    temp=Math.floor(temp/10)

   
}
if(num==sum){
    console.log("amstrong number")
}else{
    console.log("not a amstrong")
}