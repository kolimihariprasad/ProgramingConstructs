const prompt = require('prompt-sync')();
let year = prompt('Enter Year: ');
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}

/* 
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;    
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

function getWorkingHours(empCheck){
    switch(empCheck) {
        case IS_PART_TIME:
           return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOURS;
}

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    let empCheck = (Math.round(Math.random() * 10) % 3);
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs))
    totalWorkingDays++;
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Working Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+ empWage);
*/