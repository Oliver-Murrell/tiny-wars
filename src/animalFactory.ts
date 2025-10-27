export type AnimalType = 'Lion' | 'Bear' | 'Dog' | 'Eagle' | 'Monkey' | 'Crocodile';

export const spawnAnimal = (animalType: AnimalType) => {
    switch (animalType) {
        case 'Lion':
            return {
                type: 'Lion',
                health: 500,
                maxAttackStrength: 22,
                isAlive: true,
            };
        case 'Bear':
            return {
                type: 'Bear',
                health: 1000,
                maxAttackStrength: 10,
                isAlive: true,
            };
        case 'Dog':
            return {
                type: 'Dog',
                health: 200,
                maxAttackStrength: 50,
                isAlive: true,
            };
        case 'Eagle':
            return {
                type: 'Eagle',
                health: 300,
                maxAttackStrength: 40,
                isAlive: true,
            };
        case 'Monkey':
            return {
                type: 'Monkey',
                health: 500,
                maxAttackStrength: 20,
                isAlive: true,
            };
        case 'Crocodile':
            return {
                type: 'Crocodile',
                health: 2000,
                maxAttackStrength: 10,
                isAlive: true,
            };
        default:
            throw new Error(`Unknown animal type: ${animalType}`);
    }
};
