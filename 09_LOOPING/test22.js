let num=153;
let temp=num;
let count=0;
let sum=0;
while (temp>0) {
    temp=Math.floor(temp/10)
    count++;

}
console.log(count)

temp=num;
while (temp>0) {
    let digit=temp%10;
    sum=sum+(digit**count)
  temp=Math.floor(temp/10);

    
}
console.log(sum)

if(num==sum){
    console.log("amstrong no");
}else{
    console.log("not a amstrong no")
}