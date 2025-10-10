import { Animal } from "./types";
import { calculateAttack } from "./battle";

export const fight = (animal1: Animal, animal2: Animal) => {
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