import { Animal } from "./types";

// object - key value pairs, key on the left e.g. name and value on the right e.g. "Oliver"
const animal1: Animal = {
    name: 'Oliver',
    type: 'Lion',
    health: 500,
    maxAttackStrength: 22,
    isAlive: true
}

const animal2: Animal = {
    name: 'Charlie',
    type: 'Bear',
    health: 1000,
    maxAttackStrength: 10,
    isAlive: true
}

const animal3: Animal = {
    name: 'Bob',
    type: 'Dog',
    health: 200,
    maxAttackStrength: 50,
    isAlive: true
}

const animal4: Animal = {
    name: 'Dave',
    type: 'Eagle',
    health: 300,
    maxAttackStrength: 40,
    isAlive: true
}

const animal5: Animal = {
    name: 'John',
    type: 'Monkey',
    health: 500,
    maxAttackStrength: 20,
    isAlive: true
}

const animal6: Animal = {
    name: 'Liam',
    type: 'Crocodile',
    health: 2000,
    maxAttackStrength: 10,
    isAlive: true
}

const duration: number = 1000;

const calculateAttack = (maxAttack: number) => {
    return Math.floor(Math.random() * (maxAttack + 1));
}

const selectTwoFighters = () => {
    const fighter1 = animals[0];
    animals.splice(0, 1);

    const fighter2 = animals[0];
    animals.splice(0, 1);

    return [fighter1, fighter2];
}

const fight = (animal1: Animal, animal2: Animal) => {
    let bothAnimalsAlive = true
    while(bothAnimalsAlive) {

        console.log(animal1.name + ' is attacking... ' + animal2.name);
        animal2.health = animal2.health - calculateAttack(animal1.maxAttackStrength);
    
        if(animal2.health <= 0) {
            animal2.isAlive = false;
            bothAnimalsAlive = false
            console.log(animal2.name + ' is dead!');
            return animal1;
        }
    
        console.log(animal2.name + ' now has ' + animal2.health + ' health remaining ');
        
        console.log(animal2.name + ' is attacking... ' + animal1.name);
        animal1.health = animal1.health - calculateAttack(animal2.maxAttackStrength);
        
        if(animal1.health <= 0) {
            animal1.isAlive = false;
            bothAnimalsAlive = false;
            console.log(animal1.name + ' is dead!');
            return animal2;
        }
    
        console.log(animal1.name + ' now has ' + animal1.health + ' health remaining ');
    }
}

// Game Engine - What should happen? - Simulation
// i = 0
// check is i less than duration
// check is i less than duration
// i++ - i + 1
// array of Animals (objects)
const animals: Animal[] = [animal1, animal2, animal3, animal4, animal5, animal6];

for(let i = 0; i < duration; i++){
    if(animals.length == 1){
        console.log(animals[0]?.name + ' the ' + animals[0]?.type + ' has won!')
        break;
    }

    const fighters: any[] = selectTwoFighters(); // fighters will equal = [fighter1, fighter2]
    const result: any = fight(fighters[0], fighters[1]);
    animals.push(result);
}


// Variable
// const fighters = ['Dave', 'Mark'] 

// Function
// const getFighters = () => {
//    return ['Jeff', 'Fred']
// }