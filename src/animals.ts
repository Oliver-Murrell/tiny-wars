import { Animal } from "./types"

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

export const animals: Animal[] = [animal1, animal2, animal3, animal4, animal5, animal6];