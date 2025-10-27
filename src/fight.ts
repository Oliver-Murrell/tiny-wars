import { Animal } from "./types";
import { calculateAttack } from "./battle";

export const fight = (animal1: Animal, animal2: Animal) => {
    while(true) {

        animal2.health = animal2.health - calculateAttack(animal1.maxAttackStrength);

        if(animal2.health <= 0) {
            animal2.isAlive = false;
            return animal1;
        }
    
        animal1.health = animal1.health - calculateAttack(animal2.maxAttackStrength);    

        if(animal1.health <= 0) {
            animal1.isAlive = false;
            return animal2;
        }
    }
}