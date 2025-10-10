import { fight } from "./fight";
import { selectTwoFighters } from "./battle";
import { animals } from "./animals";

const duration: number = 1000;

const start = () => {
    for(let i = 0; i < duration; i++){
    if(animals.length == 1){
        console.log(animals[0]?.name + ' the ' + animals[0]?.type + ' has won!')
        break;
    }

    const fighters: any[] = selectTwoFighters(); // fighters will equal = [fighter1, fighter2]
    const result: any = fight(fighters[0], fighters[1]);
    animals.push(result);
    }
}

start();