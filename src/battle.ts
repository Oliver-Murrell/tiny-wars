import { Animal } from "./types";

export const calculateAttack = (maxAttack: number) => {
    return Math.floor(Math.random() * (maxAttack + 1));
}

export const selectTwoFighters = (population: Animal[]) => {
    const fighter1 = population[0];
    population.splice(0, 1);

    const fighter2 = population[0];
    population.splice(0, 1);

    return [fighter1, fighter2];
}