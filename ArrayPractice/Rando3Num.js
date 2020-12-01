let randArr = new Array();
for(let i=0;i<10;i++){
    let randNum = Math.round(Math.random()*899)+100;
    randArr.push(randNum);
}

randArr.sort();
let length = randArr.length
let secondLarge = randArr[length-2]
let secondSmall = randArr[1]
console.log(randArr+" \t"+secondLarge+" "+secondSmall)