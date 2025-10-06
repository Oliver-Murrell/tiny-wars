

// name: string
// Animal
// health: number
// attackStrength: number
// isAlive: boolean

type Animal = {
    name: string, 
    type: string,
    health: number,
    maxAttackStrength: number,
    isAlive: boolean
}

// object - key value pairs, key on the left e.g. name and value on the right e.g. "Oliver"
const animal1: Animal = {
    name: 'Oliver',
    type: 'Lion',
    health: 500,
    maxAttackStrength: 10,
    isAlive: true
}

const animal2: Animal = {
    name: 'Charlie',
    type: 'Bear',
    health: 500,
    maxAttackStrength: 10,
    isAlive: true
}

const duration: number = 100;

// i = 0
// check is i less than duration
// check is i less than duration
// i++ - i + 1

// Parameters are pieces of information we need to pass to a function in order for the function to work correctly.
const calculateAttack = (maxAttack: number) => {
    return Math.floor(Math.random() * (maxAttack + 1));
}

for(let i = 0; i < duration; i++){
    console.log(animal1.name + ' is attacking... ' + animal2.name);
    animal2.health = animal2.health - calculateAttack(animal1.maxAttackStrength);

    if(animal2.health <= 0) {
        animal2.isAlive = false;
        console.log(animal2.name + ' is dead!');
        break;
    }

    console.log(animal2.name + ' now has ' + animal2.health + ' health remaining ');
    
    console.log(animal2.name + ' is attacking... ' + animal1.name);
    animal1.health = animal1.health - calculateAttack(animal2.maxAttackStrength);
    
    if(animal1.health <= 0) {
        animal1.isAlive = false;
        console.log(animal1.name + ' is dead!');
        break;
    }

    console.log(animal1.name + ' now has ' + animal1.health + ' health remaining ');
}