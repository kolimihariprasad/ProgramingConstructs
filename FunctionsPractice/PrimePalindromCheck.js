const prompt = require('prompt-sync')();
let num = prompt('Enter number: ');

function PrimeCheck(num) {
    let number = num;
    let isPrime = true;
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
        isPrime = false;
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
function PalindromCheck(num) {
        let number = num;
        let isPalindrom = true;
        let rem, temp, final=0;
        temp = num;
		while(number>0) {
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final != temp){
            isPalindrom=false;
        }
        return isPalindrom;
}
if(PalindromCheck(num)) {
    if(PrimeCheck(num)) {
        console.log("the Number is palindrom and prime")    
    } else 
        console.log("the Number is palindrom but not prime")
} else
    console.log("the Number is not palindrom")
