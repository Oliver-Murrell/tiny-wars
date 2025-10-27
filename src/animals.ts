import { Animal } from "./types"
import { AnimalType, spawnAnimal } from "./animalFactory";


// Oliver goes to counter and asks for:
// 2000 animals - Code to choose animals to generate at random
// Animals with different health - Code to choose a random health between two parameters - minHp, maxHp
// Animals with different strength - Code to choose a random attack between two parameters - minAp, maxAp


// 2000 loops
// For each loop we need:
// Pick a random number between 0 and 5 ✅
// Select animal at the index position using the random number ✅
// Push to population array.

const typesOfAnimals: AnimalType[] = ['Lion', 'Bear', 'Dog', 'Eagle', 'Monkey', 'Crocodile'];

export const generateAnimals = (numberOfAnimals: number) => {
    const tempArray = []

    for(let i = 0; i < numberOfAnimals; i++){
        const randomNumber = Math.floor(Math.random() * typesOfAnimals.length); // 0 to 5

        const typeOfAnimal = typesOfAnimals[randomNumber];
        const animal = spawnAnimal(typeOfAnimal!);

        tempArray.push(animal);
    }

    return tempArray;
}

// Iteration 1
// [{ type: 'Monkey', health: 500, maxAttackStrength: 20, isAlive: true }]

// Iteration 2
// [{type: 'Monkey', health: 500, maxAttackStrength: 20, isAlive: true }, {type: 'Bear', health: 1000, maxAttackStrength: 10, isAlive: true }]


// Iteration 3
// [
//     {
//         type: 'Monkey', 
//         health: 500, 
//         maxAttackStrength: 20, 
//         isAlive: true 
//     }, 
//     {
//         type: 'Bear', 
//         health: 1000, 
//         maxAttackStrength: 10, 
//         isAlive: true 
//     }, 
//     {
//         type: 'Crocodile',
//         health: 2000,
//         maxAttackStrength: 10,
//         isAlive: true
//     }
// ]