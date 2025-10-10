import { animals } from "./animals";

export const calculateAttack = (maxAttack: number) => {
    return Math.floor(Math.random() * (maxAttack + 1));
}

export const selectTwoFighters = () => {
    const fighter1 = animals[0];
    animals.splice(0, 1);

    const fighter2 = animals[0];
    animals.splice(0, 1);

    return [fighter1, fighter2];
}