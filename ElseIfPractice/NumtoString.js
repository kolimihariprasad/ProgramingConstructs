const prompt = require('prompt-sync')();
let num = prompt('Enter number: ');
let count=1;
while(num>0){
    digit = num%10;
    num=Math.floor(num/10);
    if(count==1) {
        console.log(digit+"units");
        count++;
        continue;
    } else if(count==2) {
        console.log(digit+"tens");
        count++;
        continue;
    } else if(count==3) {
        console.log(digit+"hundres");
        count++;
        continue;
    } else if(count==4) {
        console.log(digit+"thousands");
        count++;
        continue;
    } else if(count==5) {
        console.log(digit+"ten thousands");
        count++;
        continue;
    } else if(count==6) {
        console.log(digit+"laks");
        count++;
        continue;
    } else if(count==7) {
        console.log(digit+"ten laks");
        count++;
        continue;
    } else if(count==8) {
        console.log(digit+"crores");
        count++;
        continue;
    } else if(count==1) {
        console.log(digit+"ten crors");
        count++;
        continue;
    } 
}