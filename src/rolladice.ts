enum DiceSet {
        D2 = 2,
        D4 = 4,
        D6 = 6,
        D8 = 8,
        D10 = 10,
        D12 = 12,
        D20 = 20,
        D100 = 10
 }

class Dice{   
    diceFaces: DiceSet;
    constructor(diceFaces: DiceSet){
        this.diceFaces = diceFaces;
    }

    rollDice = () => {
        
    }
}

export class RollADice extends Dice{
    rollD2      = (dice: DiceSet.D2)    => this.getRandomValue(dice);
    rollD4      = (dice: DiceSet.D4)    => this.getRandomValue(dice);
    rollD8      = (dice: DiceSet.D8)    => this.getRandomValue(dice);
    rollD10     = (dice: DiceSet.D10)   => this.getRandomValue(dice);
    rollD12     = (dice: DiceSet.D12)   => this.getRandomValue(dice);
    rollD20     = (dice: DiceSet.D20)   => this.getRandomValue(dice);
    rollD100    = (dice: DiceSet.D100)  => this.getRandomValue(dice) * 10;
    getRandomValue = (maxvalue: number) => Math.floor(Math.random() * (maxvalue + 1));
}