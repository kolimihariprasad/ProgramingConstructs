const prompt = require('prompt-sync')();

const LENGTH = 5;
let min=Number.MAX_VALUE;
let max=Number.MIN_VALUE;
for(let count=1; count <= LENGTH; count++){
    let num = prompt('Enter Nmuber ');
    if(count == 1){
        min = num;
        max = num;
    }
    else{
        if(num > max) max = num;
        if(num < min) min = num;
    }
}
console.log("Max is: "+max+" Min is: "+min);