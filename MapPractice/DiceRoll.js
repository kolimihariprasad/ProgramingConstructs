let dice = Math.round(Math.random()*10)%6;
let map = new Map();
map.set(1,0)
map.set(2,0)
map.set(3,0)
map.set(4,0)
map.set(5,0)
map.set(6,0)

while(true) {
    let dice = Math.round(((Math.random()*10)+1)%6);
    if(map.has(dice)){
        let value = map.get(dice);
        value++;
        map.set(dice, value)
        if(value == 10){
            break;
        }
    }
}
for(let [key, value] of map) console.log("Dice Numbers: "+key+' = '+ value)