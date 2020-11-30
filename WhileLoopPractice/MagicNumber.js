const prompt = require('prompt-sync')();
let num = prompt('Enter number between 1-100: ');
let lower=0;
let upper=100;
let magicNumber = 0;
while(num != magicNumber) {
    if(num != magicNumber) {
        magicNumber = Math.floor((lower+upper)/2);
        let choice = prompt(magicNumber+" if it is your number press 2 or smaller than your number press 1 if not press 0 ");
        if(choice == 1){
            upper = magicNumber
        }else {
            lower = magicNumber
        }c
    }
}
console.log("The number you selected is"+magicNumber)
