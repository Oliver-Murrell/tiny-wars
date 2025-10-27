import { fight } from "./fight";
import { selectTwoFighters } from "./battle";
import { Animal } from "./types";
import { generateAnimals } from "./animals";

const start = () => {
    const duration: number = 100000;
    const population: Animal[] = generateAnimals(50000);

    for(let i = 0; i < duration; i++){
        if(population.length == 1){
            console.log(population[0]?.type + ' has won!, with ' + population[0]?.health + ' health');
            break;
        }

        console.log('iteration: ' + i);
        console.log('population count: ' + population.length);

        const fighters: any[] = selectTwoFighters(population); // fighters will equal = [fighter1, fighter2]
        const result: any = fight(fighters[0], fighters[1]);
        population.push(result);

        console.log('population count: ' + population.length);
        // console.log(result.type + ' has won!');
        // console.log('population remaining: ' + population.length);
    }
}

start();
