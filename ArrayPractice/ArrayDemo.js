let origDogs = ["BUlldog", "Begal", "Labrador"];
let cats = new Array("Americal curl", "Bengal");
let birds = new Array("Falcos", "Ducks", "Flamingos");

let  sliceDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

let pushDog = dogs.push("Golden Retriver");
let popDog = dogs.pop();
dogs[dogs.length] = "Poodle";

dogs.slice(2,1,"Pug", "Boxer");

let animals = dogs.concat(cats, birds);
let newAnimal = [...dogs,...cats,...birds];
let sortDog = dogs.slice(0).sort();
function scanArray([first, second]) {console.log("Scan:"+first+" "+second);}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for(let animal of animals) allAnimals += animal +" ";

console.log("Animals: "+ allAnimals);